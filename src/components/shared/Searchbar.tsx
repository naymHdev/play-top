"use client";

import { FiSearch } from "react-icons/fi";
import { Input } from "../ui/input";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { gameSearch } from "@/services/games";
import { TGame } from "@/types/games";
import Image from "next/image";
import Link from "next/link";

const Searchbar = () => {
  const [games, setGames] = useState<TGame[] | null>(null);
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch games on query change
  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchGames = await gameSearch({ searchTerm: query });
        setGames(searchGames?.data || []);
      } catch (error: any) {
        console.error("Fetch error", error);
        setGames(null);
      }
    };
    if (query.trim()) {
      fetchData();
    } else {
      setGames(null);
    }
  }, [query]);

  // Update URL query params
  const handleSearchQuery = (query: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(query, value.toString());
    } else {
      params.delete(query);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // console.log("games", games);

  return (
    <div className="relative" ref={wrapperRef}>
      {/*className="pl-4 pr-10 py-2 rounded-full text-primary lg:w-[626px] h-[48px] bg-card border-none" */}
      <div className="relative w-full">
        <Input
          type="search"
          value={query}
          onChange={(e) => {
            const value = e.target.value;
            setQuery(value);
            handleSearchQuery("searchTerm", value);
          }}
          onFocus={() => setShowResults(true)}
          placeholder="Search games..."
          className="pl-4 pr-10 py-2 rounded-full text-primary lg:w-[626px] h-[48px]  bg-card border-none focus:outline-none focus:ring-2 focus:ring-primary"
          autoComplete="off"
          aria-label="Search games"
        />
        <FiSearch
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary opacity-70 pointer-events-none"
          size={18}
          aria-hidden="true"
        />
      </div>

      {showResults && query && (
        <div
          className="absolute mt-2 w-full max-h-[70vh] bg-black text-white rounded-xl shadow-lg overflow-y-auto z-50 p-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900 hide-scrollbar"
          role="listbox"
          aria-label="Search results"
        >
          <div className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
            Games
          </div>
          <div className="flex flex-col gap-3">
            {games?.length ? (
              games.map((game) => (
                <Link href={`/game-details/${game?.id}`} key={game?.id}>
                  <button
                    onClick={() => {
                      setQuery(game.title);
                      setShowResults(false);
                    }}
                    className="flex items-center gap-4 w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 focus:bg-gray-800 focus:outline-none hover:cursor-pointer"
                    role="option"
                    aria-selected={query === game.title}
                    type="button"
                  >
                    <div className="relative  flex-shrink-0 rounded-md overflow-hidden bg-gray-700">
                      <Image
                        src={game.thumbnail || "/placeholder.png"}
                        alt={game.title}
                        width={200}
                        height={200}
                        className="object-cover"
                      />
                    </div>
                    <span className="truncate">{game.title}</span>
                  </button>
                </Link>
              ))
            ) : (
              <p className="text-gray-400 italic text-center select-none">
                No games found.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchbar;

"use client";

import { FiSearch } from "react-icons/fi";
import { Input } from "../ui/input";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { gameSearch } from "@/services/games";
import { TGame } from "@/types/games";
import PTGameCard from "../ui/PTGameCard";

const Searchbar = () => {
  const [games, setGames] = useState<TGame[] | null>(null);
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // ✅ Close search results when clicking outside
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

  // ✅ Get query from URL
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

  // ✅ Push query to URL
  const handleSearchQuery = (query: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(query, value.toString());
    } else {
      params.delete(query);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="relative" ref={wrapperRef}>
      <div className="relative">
        <Input
          type="search"
          value={query}
          onChange={(e) => {
            const value = e.target.value;
            setQuery(value);
            handleSearchQuery("searchTerm", value);
          }}
          onFocus={() => setShowResults(true)}
          placeholder="Search"
          className="pl-4 pr-10 py-2 rounded-full text-primary lg:w-[626px] h-[48px] bg-card border-none"
        />
        <FiSearch
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary opacity-70"
          size={18}
        />
      </div>

      {showResults && query && (
        <div className="absolute mt-2 w-full bg-black text-white rounded-xl shadow-lg overflow-y-auto z-50 p-4">
          <div className="text-lg font-semibold mb-2">Games</div>
          <div className="space-y-2">
            {games?.length ? (
              games.map((game, idx) => (
                <PTGameCard key={`${idx + 1}`} games={game} />
              ))
            ) : (
              <p className="text-gray-400 italic text-center">
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

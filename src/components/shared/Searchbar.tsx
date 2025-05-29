"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Loader2, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { gameSearch } from "@/services/games";
import type { TGame } from "@/types/games";
import { useDebounce } from "@/hooks/useDebounce";
import SearchResultsLoading from "./SearchResultsLoading";
import SearchResultItem from "./SearchResultItem";

const Searchbar = () => {
  const [games, setGames] = useState<TGame[] | null>(null);
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Debounce search query to prevent excessive API calls
  const debouncedQuery = useDebounce(query, 300);

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

  // Handle keyboard navigation
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowResults(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Fetch games on debounced query change
  useEffect(() => {
    const fetchData = async () => {
      if (!debouncedQuery.trim()) {
        setGames(null);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        const searchGames = await gameSearch({ searchTerm: debouncedQuery });
        setGames(searchGames?.data || []);
      } catch (error: any) {
        console.error("Search error:", error);
        setError("Failed to fetch games. Please try again.");
        setGames(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [debouncedQuery]);

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

  const clearSearch = () => {
    setQuery("");
    setGames(null);
    handleSearchQuery("searchTerm", "");
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-[426px]" ref={wrapperRef}>
      <div className="relative w-full">
        <Input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            const value = e.target.value;
            setQuery(value);
            handleSearchQuery("searchTerm", value);
            if (value.trim()) {
              setIsLoading(true);
              setShowResults(true);
            }
          }}
          onFocus={() => setShowResults(Boolean(query.trim()))}
          placeholder="Search games..."
          className="pl-4 pr-12 py-2 rounded-full text-primary w-full h-[48px] bg-card border-none focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          autoComplete="off"
          aria-label="Search games"
          aria-expanded={showResults}
          aria-controls="search-results"
        />

        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
          {query && (
            <button
              onClick={clearSearch}
              className="p-1 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {showResults && query && (
        <div
          id="search-results"
          className="absolute mt-2 w-full max-h-[70vh] bg-card text-white rounded-xl shadow-lg overflow-hidden z-50 border border-gray-800 animate-in fade-in-0 zoom-in-95 duration-100"
          role="listbox"
          aria-label="Search results"
        >
          <div className="text-lg font-semibold px-4 py-3 border-b border-gray-800 flex items-center justify-between">
            <span>Games</span>
            {isLoading && (
              <Loader2 className="animate-spin text-primary" size={16} />
            )}
          </div>

          <div className="overflow-y-auto hide-scrollbar max-h-[calc(70vh-48px)] p-2">
            {isLoading && !games?.length ? (
              <SearchResultsLoading />
            ) : error ? (
              <div className="p-4 text-center text-red-400">
                <p>{error}</p>
              </div>
            ) : games?.length ? (
              <div className="flex flex-col gap-2">
                {games.map((game) => (
                  <SearchResultItem
                    key={game.id}
                    game={game}
                    onClick={() => {
                      setQuery(game?.title);
                      setShowResults(false);
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="p-6 text-gray-400 italic text-center select-none">
                No games found matching "{query}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchbar;

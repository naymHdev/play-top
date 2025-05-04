"use client";

import { FiSearch } from "react-icons/fi";
import { Input } from "../ui/input";
import { useState, useRef, useEffect } from "react";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="relative" ref={wrapperRef}>
      <div className="relative">
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowResults(true)}
          placeholder="Search"
          className="pl-4 pr-10 py-2 rounded-full text-primary w-[426px] h-[48px] bg-card border-none"
        />
        <FiSearch
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary opacity-70"
          size={18}
        />
      </div>

      {showResults && query && (
        <div className="absolute mt-2 w-full bg-black text-white rounded-xl shadow-lg max-h-[400px] overflow-y-auto z-50 p-4">
          {/* Simulated search results */}
          <div className="text-lg font-semibold mb-2">Games</div>
          <ul className="space-y-2">
            <li className="hover:bg-neutral-800 p-2 rounded-lg">
              The Bluecoats: North vs South
            </li>
            <li className="hover:bg-neutral-800 p-2 rounded-lg">
              Three Fourths Home: Extended Edition
            </li>
            <li className="hover:bg-neutral-800 p-2 rounded-lg">
              Fourth grade Math - Multiplication
            </li>
            {/* Add more mock/fetched results */}
          </ul>

          <div className="text-lg font-semibold mt-4 mb-2">Collections</div>
          <ul className="space-y-2">
            <li className="hover:bg-neutral-800 p-2 rounded-lg">
              Fourth-Wall Breaking Games
            </li>
            <li className="hover:bg-neutral-800 p-2 rounded-lg">Youth</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Searchbar;

"use client";

import Image from "next/image";
import Link from "next/link";
import type { TGame } from "@/types/games";
import { platformIconMap } from "@/constants/platform";

interface SearchResultItemProps {
  game: TGame;
  onClick: () => void;
}

const SearchResultItem = ({ game, onClick }: SearchResultItemProps) => {
  return (
    <Link href={`/game-details/${game?.id}`}>
      <button
        onClick={onClick}
        className="flex items-center gap-4 w-full text-left p-2 rounded-lg hover:bg-gray-800 focus:bg-gray-800 focus:outline-none transition-colors group"
        role="option"
        aria-selected={false}
        type="button"
      >
        <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-700">
          <Image
            src={game?.thumbnail || "/placeholder.svg?height=200&width=200"}
            alt=""
            fill
            sizes="56px"
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        <div className="flex flex-col gap-2 overflow-hidden">
          <span className="font-medium truncate">{game?.title}</span>
          {game?.genre && (
            <span className="text-sm text-gray-400 truncate">
              {game?.genre}
            </span>
          )}
          <div className="flex gap-2 items-center">
            {game?.platform?.map((platformName: string, index: number) => {
              const icon = platformIconMap[platformName];
              return (
                icon && (
                  <Image
                    key={index}
                    src={icon || "/placeholder.svg"}
                    alt={platformName}
                    width={12}
                    height={12}
                    className="object-contain opacity-70"
                  />
                )
              );
            })}
          </div>
        </div>
      </button>
    </Link>
  );
};

export default SearchResultItem;

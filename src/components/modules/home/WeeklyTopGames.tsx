"use client";

import { useState } from "react";
import PTContainer from "@/components/ui/PTContainer";
import PTSectionName from "@/components/ui/PTSectionName";
import android from "../../../assets/icons/android.png";
import apple from "../../../assets/icons/apple.png";
import windows from "../../../assets/icons/windows.png";
import linux from "../../../assets/icons/linux.png";
import game1 from "../../../assets/images/weekly-t1.png";
import PTWeeklyGameCard from "@/components/ui/PTWeeklyGameCard";
import { TWeeklyGames } from "@/types/weeklyGames";
import PTButton from "@/components/ui/PTButton";
import { FiArrowRight, FiArrowUp } from "react-icons/fi";

// Game Data
 const gamesData: TWeeklyGames[] = [
  {
    _id: "1",
    title: "The Talos Principle: Resaw",
    image: game1,
    categories: ["Productivity", "Artificial Intelligence"],
    platform: [android, apple, windows, linux],
    price: 8.99,
  },
];

// Repeat data
export const weeklyGamesData = Array.from({ length: 30 }, (_, index) => ({
  ...gamesData[0],
  _id: `${index + 1}`,
}));

const WeeklyTopGames = () => {
  const INITIAL_COUNT = 10;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const isShowingAll = visibleCount >= weeklyGamesData.length;

  const handleToggle = () => {
    setVisibleCount(isShowingAll ? INITIAL_COUNT : visibleCount + 4);
  };

  return (
    <div className="mt-20">
      <PTContainer>
        <div>
          <PTSectionName
            title="Top Games of the Week"
            description="Donec ac posuere tellus. Nunc sem ipsum, cursus quis erat feugiat, cursus dictum enim."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {weeklyGamesData?.slice(0, visibleCount).map((games) => (
              <PTWeeklyGameCard key={games._id} game={games} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center mt-8">
          <PTButton
            onClick={handleToggle}
            className="border border-card py-2 px-5"
            label={isShowingAll ? "Show Less" : "Show More"}
            icon={isShowingAll ? <FiArrowUp /> : <FiArrowRight />}
          />
        </div>
      </PTContainer>
    </div>
  );
};

export default WeeklyTopGames;

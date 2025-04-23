"use client";

import PTContainer from "@/components/ui/PTContainer";
import PTGameCard from "@/components/ui/PTGameCard";
import PTSectionName from "@/components/ui/PTSectionName";
import { TGame } from "@/types/games";
import game1 from "../../../assets/images/game1.png";
import android from "../../../assets/icons/android.png";
import apple from "../../../assets/icons/apple.png";
import windows from "../../../assets/icons/windows.png";
import linux from "../../../assets/icons/linux.png";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";

const gamesData: TGame[] = [
  {
    _id: "1",
    title: "Need for Speed™ Heat Deluxe Edition",
    image: game1,
    categories: ["Design Tools", "Productivity", "Artificial Intelligence"],
    platform: [android, apple, windows, linux],
    price: 8.99,
  },
];

// To repeat the same data 5 times (for example)
const repeatedGamesData = Array.from({ length: 10 }, (_, index) => ({
  ...gamesData[0],
  _id: `${index + 1}`, // Make sure each game card has a unique ID
}));

const DailyTopGames = () => {
  return (
    <>
      <PTContainer>
        <div>
          <PTSectionName
            title="Top Games of the Day"
            description="Donec ac posuere tellus. Nunc sem ipsum, cursus quis erat feugiat, cursus dictum enim."
          />
        </div>

        <div className="mt-16">
          {repeatedGamesData?.map((game) => (
            <PTGameCard key={game._id} games={game} />
          ))}
        </div>
        <div className="bg-black bg-opacity-30 h-[148px] flex items-center justify-center shadow-lg shadow-black/50 -mt-20">
          <div className="flex items-center justify-center">
            <Button className="px-8 py-5 flex items-center gap-2 rounded-full text-primary font-medium leading-7 max-w-[154px] max-h-[44px] bg-background border border-card">
              Show More <FaArrowRight />
            </Button>
          </div>
        </div>
      </PTContainer>
    </>
  );
};

export default DailyTopGames;

"use client";

import { useState } from "react";
import PTContainer from "@/components/ui/PTContainer";
import PTGameCard from "@/components/ui/PTGameCard";
import PTSectionName from "@/components/ui/PTSectionName";
import { TGame } from "@/types/games";
import { FaArrowRight, FaArrowUp } from "react-icons/fa6";
import PTButton from "@/components/ui/PTButton";
import Newsletter from "@/components/Newsletter";

type DailyTopGamesProps = {
  topGameDay: TGame[];
};
const DailyTopGames = ({ topGameDay }: DailyTopGamesProps) => {
  // console.log(topGameDay);

  const INITIAL_COUNT = topGameDay?.length;
  const LOAD_MORE_COUNT = 5;

  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const isShowingAll = visibleCount >= topGameDay?.length;

  const handleToggle = () => {
    console.log("Toggling...", visibleCount);
    if (isShowingAll) {
      setVisibleCount(INITIAL_COUNT);
    } else {
      setVisibleCount((prev) =>
        Math.min(prev + LOAD_MORE_COUNT, topGameDay?.length)
      );
    }
  };

  return (
    <PTContainer className="mt-24 relative">
      <div>
        <PTSectionName title="Top Games of the Day" />
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-7 gap-8">
        <div className=" col-span-full lg:col-span-5">
          {[...topGameDay]
            .reverse()
            .slice(0, visibleCount)
            .map((game, idx) => (
              <PTGameCard key={game._id || idx} games={game} />
            ))}

          <div>
            {topGameDay?.length > INITIAL_COUNT && (
              <div className="flex justify-center mt-10">
                <PTButton
                  onClick={handleToggle}
                  className="py-2 px-5 bg-card rounded-sm"
                  label={isShowingAll ? "Show Less" : "Show More"}
                  icon={isShowingAll ? <FaArrowUp /> : <FaArrowRight />}
                />
              </div>
            )}
          </div>
        </div>

        <div className="col-span-full lg:col-span-2">
          <Newsletter />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <PTButton
          onClick={handleToggle}
          className="py-2 px-5 bg-card rounded-sm"
          label={isShowingAll ? "Show Less" : "Show More"}
          icon={isShowingAll ? <FaArrowUp /> : <FaArrowRight />}
        />
      </div>
    </PTContainer>
  );
};

export default DailyTopGames;

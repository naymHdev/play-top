"use client";

import { useState } from "react";
import PTContainer from "@/components/ui/PTContainer";
import PTSectionName from "@/components/ui/PTSectionName";
import PTButton from "@/components/ui/PTButton";
import { TGame } from "@/types/games";
import PTGameCard from "@/components/ui/PTGameCard";
import { FaArrowRight, FaArrowUp } from "react-icons/fa6";

const WeeklyTopGames = ({ topGameWeek }: { topGameWeek: TGame[] }) => {
  const INITIAL_COUNT = 10;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const isShowingAll = visibleCount >= topGameWeek?.length;

  const handleToggle = () => {
    if (isShowingAll) {
      setVisibleCount(INITIAL_COUNT);
    } else {
      setVisibleCount((prev) => Math.min(prev + 5, topGameWeek.length));
    }
  };
  return (
    <div className="mt-20">
      <PTContainer>
        <div>
          <PTSectionName title="Top Games of the Week" />
          <div className="lg:w-[60%] mt-12">
            {topGameWeek?.slice(0, visibleCount).map((games) => (
              <PTGameCard key={games._id} games={games} />
            ))}
          </div>
        </div>

        {topGameWeek?.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-10">
            <PTButton
              onClick={handleToggle}
              className="py-2 px-5 bg-card rounded-sm"
              label={isShowingAll ? "Show Less" : "Show More"}
              icon={isShowingAll ? <FaArrowUp /> : <FaArrowRight />}
            />
          </div>
        )}
      </PTContainer>
    </div>
  );
};

export default WeeklyTopGames;

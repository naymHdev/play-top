"use client";

import PTContainer from "@/components/ui/PTContainer";
import PTSectionName from "@/components/ui/PTSectionName";

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
      </PTContainer>
    </>
  );
};

export default DailyTopGames;

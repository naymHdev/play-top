import PTSectionName from "@/components/ui/PTSectionName";
import { weeklyGamesData } from "../home/WeeklyTopGames";
import PTWeeklyGameCard from "@/components/ui/PTWeeklyGameCard";

const RelatedGames = () => {
  return (
    <>
      <PTSectionName
        title="Similar Games"
        description="Donec ac posuere tellus. Nunc sem ipsum, cursus quis erat feugiat, cursus dictum enim. "
      />

      <div className=" mt-12 grid grid-cols-2 gap-5">
        {weeklyGamesData?.map((games) => (
          <PTWeeklyGameCard key={games._id} game={games} />
        ))}
      </div>
    </>
  );
};

export default RelatedGames;

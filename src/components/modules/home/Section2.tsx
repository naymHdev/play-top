import { TGame } from "@/types/games";
import UpcomingRelease from "./UpcomingRelease";

type DailyTopGamesProps = {
  game: TGame[];
};

const Section2 = async ({ game }: DailyTopGamesProps) => {
  const upcomingGames = await game;

  return (
    <>
      <div>
        <UpcomingRelease upcomingGames={upcomingGames} />
      </div>
    </>
  );
};

export default Section2;

import { TGame } from "@/types/games";
import WeeklyTopGames from "./WeeklyTopGames";

type DailyTopGamesProps = {
  game: TGame[];
};
const Section3 = async ({ game }: {game : Promise<DailyTopGamesProps>}) => {
  const topGameWeek = await game;

  return (
    <>
      <div>
        <WeeklyTopGames topGameWeek={topGameWeek} />
      </div>
    </>
  );
};

export default Section3;

import { TGame } from "@/types/games";
import DailyTopGames from "./DailyTopGames";

type DailyTopGamesProps = {
  game: TGame[];
};

const Section1 = async ({ game }: DailyTopGamesProps) => {
  const topGameDay = await game;
  //   console.log("topGameDay", topGameDay);

  return (
    <>
      <div>
        <DailyTopGames topGameDay={topGameDay} />
      </div>
    </>
  );
};

export default Section1;

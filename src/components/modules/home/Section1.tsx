import { TGame } from "@/types/games";
import DailyTopGames from "./DailyTopGames";

type DailyTopGamesProps = {
  game: TGame[];
};

const Section1 = async ({ game }: {game : Promise<DailyTopGamesProps>}) => {
  const topGameDay = await game as any;
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

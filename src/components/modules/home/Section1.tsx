import { TGame } from "@/types/games";
import DailyTopGames from "./DailyTopGames";

type DailyTopGamesProps = {
  game: TGame[];
};

const Section1 = async ({ game, hasid }: {game : Promise<DailyTopGamesProps>, hasid : boolean}) => {
  const topGameDay = await game as any;
  //   console.log("topGameDay", topGameDay);

  return (
    <>
      <div>
        <DailyTopGames topGameDay={topGameDay} hasid={hasid} />
      </div>
    </>
  );
};

export default Section1;

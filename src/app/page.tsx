import BannerSection from "@/components/modules/home/Banner";
import DailyTopGames from "@/components/modules/home/DailyTopGames";
import UpcomingRelease from "@/components/modules/home/UpcomingRelease";
import WeeklyTopGames from "@/components/modules/home/WeeklyTopGames";
import { allGames, topGamesDay, topGamesWeek } from "@/services/games";
import { TGame } from "@/types/games";

const HomePage = async () => {
  const { data: allGamesData } = await allGames();
  // console.log("games", allGamesData);

  const { data: topGameDay } = await topGamesDay();
  // console.log("topGameDay", topGameDay);

  const { data: topGameWeek } = await topGamesWeek();
  // console.log("topGamesData", topGameWeek);

  const upcomingGames = allGamesData?.allGames?.filter(
    (game: TGame) => game.gameStatus === "upcoming"
  );
  // console.log("upcomingGames", upcomingGames);

  return (
    <>
      <BannerSection />
      <DailyTopGames topGameDay={topGameDay} />
      <UpcomingRelease upcomingGames={upcomingGames} />
      <WeeklyTopGames topGameWeek={topGameWeek} />
    </>
  );
};

export default HomePage;

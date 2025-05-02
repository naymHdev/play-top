import BannerSection from "@/components/modules/home/Banner";
import DailyTopGames from "@/components/modules/home/DailyTopGames";
import UpcomingRelease from "@/components/modules/home/UpcomingRelease";
import WeeklyTopGames from "@/components/modules/home/WeeklyTopGames";
import { allGames, topGamesDay, topGamesWeek } from "@/services/games";

const HomePage = async () => {
  const { data: allGamesData } = await allGames();
  // console.log("games", allGamesData);

  const { data: topGameDay } = await topGamesDay();
  // console.log("topGameDay", topGameDay);

  const { data: topGameWeek } = await topGamesWeek();
  // console.log("topGamesData", topGameWeek);

  return (
    <>
      <BannerSection />
      <DailyTopGames topGameDay={allGamesData.allGames} />
      <UpcomingRelease />
      <WeeklyTopGames topGameWeek={topGameWeek} />
    </>
  );
};

export default HomePage;

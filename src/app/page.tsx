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

  const upcomingGames = allGamesData?.allGames?.filter(
    (game: TGame) => game.gameStatus === "upcoming"
  );
  // console.log("upcomingGames", upcomingGames);

  const { data: topGameWeek } = await topGamesWeek();
  // console.log("topGamesData", topGameWeek);

  return (
    <>
      <div className=" mb-20">
        <BannerSection />

        {topGameDay?.length > 0 && <DailyTopGames topGameDay={topGameDay} />}

        {upcomingGames?.length > 0 && (
          <UpcomingRelease upcomingGames={upcomingGames} />
        )}

        {topGameWeek?.length > 0 && (
          <WeeklyTopGames topGameWeek={topGameWeek} />
        )}
      </div>
    </>
  );
};

export default HomePage;

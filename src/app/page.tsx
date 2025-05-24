import BannerSection from "@/components/modules/home/Banner";
import DailyTopGames from "@/components/modules/home/DailyTopGames";
import LatestBlogs from "@/components/modules/home/LatestBlogs";
import UpcomingRelease from "@/components/modules/home/UpcomingRelease";
import WeeklyTopGames from "@/components/modules/home/WeeklyTopGames";
import { getAllBlogs } from "@/services/blogs";
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

  const { data: blogs } = await getAllBlogs(1);
  // console.log("blogs", blogs?.allBlogs);

  return (
    <>
      <div className=" mb-10">
        <BannerSection />

        {topGameDay?.length > 0 && <DailyTopGames topGameDay={topGameDay} />}

        {upcomingGames?.length > 0 && (
          <UpcomingRelease upcomingGames={upcomingGames} />
        )}

        {topGameWeek?.length > 0 && (
          <WeeklyTopGames topGameWeek={topGameWeek} />
        )}

        {blogs.allBlogs.length > 0 && <LatestBlogs blogs={blogs.allBlogs} />}
      </div>
    </>
  );
};

export default HomePage;

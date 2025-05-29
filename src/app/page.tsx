import BannerSection from "@/components/modules/home/Banner";
import Section1 from "@/components/modules/home/Section1";
import Section2 from "@/components/modules/home/Section2";
import Section3 from "@/components/modules/home/Section3";
import Section4 from "@/components/modules/home/Section4";
import PTBlogSkeleton from "@/components/ui/core/PTBlogSkeleton";
import PTCSliderSkeleton from "@/components/ui/core/PTCSliderSkeleton";
import PTGameCardSkeleton from "@/components/ui/core/PTGameCardSkeleton";
import { getAllBlogs } from "@/services/blogs";
import { allGames, topGamesDay, topGamesWeek } from "@/services/games";
import { TGame } from "@/types/games";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

const HomePage = async () => {
  const session = await getServerSession(authOptions);
  const { data: allGamesData } = await allGames();
  // console.log("games", allGamesData);

  const topGameDay = topGamesDay();
  // console.log("topGameDay", topGameDay);

  const upcomingGames = allGamesData?.allGames?.filter(
    (game: TGame) => game.gameStatus === "upcoming"
  );
  // console.log("upcomingGames", upcomingGames);

  const topGameWeek = topGamesWeek();
  // console.log("topGamesData", topGameWeek)

  const blogs = getAllBlogs();
  // console.log("blogs", blogs?.allBlogs);

  return (
    <>
      <div className=" mb-10">
        <BannerSection session={session} />

        {/* --------------- Use Suspense instead of Suspense --------------- */}
        <Suspense fallback={<PTGameCardSkeleton />}>
          <Section1 game={topGameDay} />
        </Suspense>

        <Suspense fallback={<PTCSliderSkeleton />}>
          <Section2 game={upcomingGames} />
        </Suspense>

        <Suspense fallback={<PTGameCardSkeleton />}>
          <Section3 game={topGameWeek} />
        </Suspense>

        <Suspense fallback={<PTBlogSkeleton />}>
          <Section4 blogs={blogs} />
        </Suspense>
      </div>
    </>
  );
};

export default HomePage;

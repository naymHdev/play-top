import BannerSection from "@/components/modules/home/Banner";
import DailyTopGames from "@/components/modules/home/DailyTopGames";
import UpcomingRelease from "@/components/modules/home/UpcomingRelease";
import WeeklyTopGames from "@/components/modules/home/WeeklyTopGames";
import Newsletter from "@/components/Newsletter";

const HomePage = () => {
  return (
    <>
      <BannerSection />
      <DailyTopGames />
      <UpcomingRelease />
      <WeeklyTopGames />
      <Newsletter />
    </>
  );
};

export default HomePage;

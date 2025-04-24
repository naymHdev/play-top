import BannerSection from "@/components/modules/home/Banner";
import DailyTopGames from "@/components/modules/home/DailyTopGames";
import UpcomingRelease from "@/components/modules/home/UpcomingRelease";
import WeeklyTopGames from "@/components/modules/home/WeeklyTopGames";

const HomePage = () => {
  return (
    <>
      <BannerSection />
      <DailyTopGames />
      <UpcomingRelease />
      <WeeklyTopGames />
    </>
  );
};

export default HomePage;

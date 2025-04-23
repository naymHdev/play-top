import BannerSection from "@/components/modules/home/Banner";
import DailyTopGames from "@/components/modules/home/DailyTopGames";
import UpcomingRelease from "@/components/modules/home/UpcomingRelease";
import Newsletter from "@/components/Newsletter";

const HomePage = () => {
  return (
    <>
      <BannerSection />
      <DailyTopGames />
      <UpcomingRelease />
      <Newsletter />
    </>
  );
};

export default HomePage;

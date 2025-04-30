import PTSectionName from "@/components/ui/PTSectionName";
import PTWeeklyGameCard from "@/components/ui/PTWeeklyGameCard";
import { TWeeklyGames } from "@/types/weeklyGames";
import android from "../../../assets/icons/android.png";
import apple from "../../../assets/icons/apple.png";
import windows from "../../../assets/icons/windows.png";
import linux from "../../../assets/icons/linux.png";
import game1 from "../../../assets/images/weekly-t1.png";

// Game Data
const gamesData: TWeeklyGames[] = [
  {
    _id: "1",
    title: "The Talos Principle: Resaw",
    image: game1,
    categories: ["Productivity", "Artificial Intelligence"],
    platform: [android, apple, windows, linux],
    price: 8.99,
  },
];

const RelatedGames = () => {
  // Repeat data
  const weeklyGamesData = Array.from({ length: 10 }, (_, index) => ({
    ...gamesData[0],
    _id: `${index + 1}`,
  }));
  return (
    <>
      <PTSectionName
        title="Similar Games"
        description="Donec ac posuere tellus. Nunc sem ipsum, cursus quis erat feugiat, cursus dictum enim. "
      />

      <div className=" my-12 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {weeklyGamesData?.map((games) => (
          <PTWeeklyGameCard key={games._id} game={games} />
        ))}
      </div>
    </>
  );
};

export default RelatedGames;

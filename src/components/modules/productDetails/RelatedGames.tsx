import PTGameCard from "@/components/ui/PTGameCard";
import PTSectionName from "@/components/ui/PTSectionName";
import { TGame } from "@/types/games";
const RelatedGames = ({ gamesData }: { gamesData: TGame[] }) => {
  // console.log("gamesData", gamesData);

  return (
    <>
      <PTSectionName
        title="Similar Games"
        description="Donec ac posuere tellus. Nunc sem ipsum, cursus quis erat feugiat, cursus dictum enim. "
      />

      <div className=" my-12 grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className=" col-span-3">
          {gamesData?.map((games: TGame) => (
            <PTGameCard key={games._id} games={games} />
          ))}
        </div>
        <div className=" col-span-2"></div>
      </div>
    </>
  );
};

export default RelatedGames;

import PTGameCard from "@/components/ui/PTGameCard";
import PTSectionName from "@/components/ui/PTSectionName";
import { allGames } from "@/services/games";
import { TGame } from "@/types/games";
const RelatedGames = async () => {
  const allGame = await allGames();
  const gamesData = allGame?.data?.allGames;

  return (
    <>
      <PTSectionName
        title="Similar Games"
        description="Donec ac posuere tellus. Nunc sem ipsum, cursus quis erat feugiat, cursus dictum enim. "
      />

      <div className=" my-12 grid grid-cols-1 xl:grid-cols-5 gap-6">
        <div className=" col-span-3">
          {gamesData?.map((games: TGame) => (
            <PTGameCard key={games.id} games={games} hasid={true} />
          ))}
        </div>
        <div className=" col-span-2"></div>
      </div>
    </>
  );
};

export default RelatedGames;

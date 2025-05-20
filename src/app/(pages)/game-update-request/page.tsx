import UpdateGameForm from "@/components/modules/game/UpdateGameForm";
import PTContainer from "@/components/ui/PTContainer";
import { allGames } from "@/services/games";
import { TGame } from "@/types/games";

type PageProps = {
  searchParams: Promise<{ id?: string }>;
};

const GameUpdateRequestPage = async ({ searchParams }: PageProps) => {
  const { id } = await searchParams;
  const gamesData = await allGames();

  const game = gamesData?.data?.allGames?.find((itm: TGame) => itm?.id === id);
  //   console.log("game", game);

  return (
    <>
      <div className=" mb-20">
        <PTContainer>
          <div>
            <UpdateGameForm game={game} />
          </div>
        </PTContainer>
      </div>
    </>
  );
};

export default GameUpdateRequestPage;

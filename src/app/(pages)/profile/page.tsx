import ProfileDetails from "@/components/modules/profile";
import ProfileBanner from "@/components/modules/profile/ProfileBanner";
import PTContainer from "@/components/ui/PTContainer";
import { allGames } from "@/services/games";
import { TGame } from "@/types/games";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);

  const gamesData = await allGames();
  // console.log("myGamesData", gamesData?.data?.allGames);

  const myGames = gamesData?.data?.allGames?.filter(
    (game: TGame) => game?.userId?.email === session?.user?.email
  );

  // console.log("myGames", myGames);

  return (
    <>
      <div>
        <ProfileBanner />
        <PTContainer>
          <div className=" w-full lg:max-w-4xl mx-auto">
            <ProfileDetails myGames={myGames} />
          </div>
        </PTContainer>
      </div>
    </>
  );
};

export default ProfilePage;

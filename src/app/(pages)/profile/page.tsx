import ProfileDetails from "@/components/modules/profile";
import ProfileBanner from "@/components/modules/profile/ProfileBanner";
import PTContainer from "@/components/ui/PTContainer";
import { myProfile } from "@/services/auth";
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

  const profileInfo = await myProfile();
  // console.log("profileInfo", profileInfo);

  return (
    <>
      <div className=" mb-20">
        <ProfileBanner session={session} profileInfo={profileInfo.data} />
        <PTContainer>
          <div className=" w-full lg:max-w-4xl mx-auto">
            <ProfileDetails myGames={myGames} profileInfo={profileInfo} />
          </div>
        </PTContainer>
      </div>
    </>
  );
};

export default ProfilePage;

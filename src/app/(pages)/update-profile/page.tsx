import ProfileUpdateForm from "@/components/modules/profile/ProfileUpdateForm";
import PTContainer from "@/components/ui/PTContainer";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const UpdateProfile = async () => {
  const session = await getServerSession(authOptions);
  // console.log("session", session);

  return (
    <>
      <div className="h-[240px] bg-gradient-to-b from-[#000000] to-[#09190A]"></div>
      <PTContainer>
        <div className=" mb-20">
          <ProfileUpdateForm session={session} />
        </div>
      </PTContainer>
    </>
  );
};

export default UpdateProfile;

import ProfileUpdateForm from "@/components/modules/profile/ProfileUpdateForm";
import PTContainer from "@/components/ui/PTContainer";
import { allUser } from "@/services/auth";

const UpdateProfile = async () => {
  const users = await allUser();
  const userInfo = users?.data?.allUsers;
  return (
    <>
      <div className="h-[240px] bg-gradient-to-b from-[#000000] to-[#09190A]"></div>
      <PTContainer>
        <div>
          <ProfileUpdateForm userInfo={userInfo} />
        </div>
      </PTContainer>
    </>
  );
};

export default UpdateProfile;

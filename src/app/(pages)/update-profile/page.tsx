import ProfileUpdateForm from "@/components/modules/profile/ProfileUpdateForm";
import PTContainer from "@/components/ui/PTContainer";
import { myProfile } from "@/services/auth";

const UpdateProfile = async () => {

  const myData = await myProfile()
  // console.log("myData", myData);


  return (
    <>
      <div className="h-[240px] bg-gradient-to-b from-[#000000] to-[#09190A]"></div>
      <PTContainer>
        <div>
          <ProfileUpdateForm userInfo={myData} />
        </div>
      </PTContainer>
    </>
  );
};

export default UpdateProfile;

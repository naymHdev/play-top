import ProfileDetails from "@/components/modules/profile";
import ProfileBanner from "@/components/modules/profile/ProfileBanner";
import PTContainer from "@/components/ui/PTContainer";

const ProfilePage = () => {
  return (
    <>
      <div>
        <ProfileBanner />
        <PTContainer>
          <div className=" w-full lg:max-w-4xl mx-auto">
            <ProfileDetails />
          </div>
        </PTContainer>
      </div>
    </>
  );
};

export default ProfilePage;

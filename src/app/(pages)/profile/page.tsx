import ProfileDetails from "@/components/modules/profile";
import ProfileBanner from "@/components/modules/profile/ProfileBanner";
import PTContainer from "@/components/ui/PTContainer";

const ProfilePage = () => {
  return (
    <>
      <div>
        <ProfileBanner />
        <PTContainer>
          <div>
            <ProfileDetails />
          </div>
        </PTContainer>
      </div>
    </>
  );
};

export default ProfilePage;

import ProfileUpdateForm from "@/components/modules/profile/ProfileUpdateForm";
import PTContainer from "@/components/ui/PTContainer";

const UpdateProfile = () => {
  return (
    <>
      <div className="h-[240px] bg-gradient-to-b from-[#000000] to-[#09190A]"></div>
      <PTContainer>
        <div>
          <ProfileUpdateForm />
        </div>
      </PTContainer>
    </>
  );
};

export default UpdateProfile;

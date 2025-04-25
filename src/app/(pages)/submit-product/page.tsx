import AddGameForm from "@/components/modules/AddGameForm";
import PTContainer from "@/components/ui/PTContainer";
import masking from "../../../assets/images/Mask group.png";
import Image from "next/image";

const SubmitProductPage = () => {
  return (
    <>
      <div className=" relative">
        <PTContainer>
          <div>
            <AddGameForm />
          </div>
        </PTContainer>
        <div className=" absolute bottom-0">
          <Image src={masking} alt="Bg Masking" />
        </div>
      </div>
    </>
  );
};

export default SubmitProductPage;

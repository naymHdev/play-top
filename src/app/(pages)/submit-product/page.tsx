import AddGameForm from "@/components/modules/AddGameForm";
import PTContainer from "@/components/ui/PTContainer";
import masking from "../../../assets/images/Mask group.png";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

const SubmitProductPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div className=" relative">
        <PTContainer className=" z-50">
          <div>
            <AddGameForm session={session} />
          </div>
        </PTContainer>
        <div className=" absolute bottom-0 -z-10">
          /
          <Image src={masking} alt="Bg Masking" />
        </div>
      </div>
    </>
  );
};

export default SubmitProductPage;

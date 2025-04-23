import PTContainer from "@/components/ui/PTContainer";
import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import bannerImage from "../../../assets/images/banner-image.avif";
import PTButton from "@/components/ui/PTButton";

const BannerSection = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className=" bg-cover bg-center">
        <Image
          src={bannerImage}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
        />
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-20" /> */}
      </div>

      <PTContainer>
        <div className="relative w-1/2 z-10 py-20">
          <h2 className="text-primary font-extrabold text-6xl leading-16">
            All in One Place for Game Creators and Fans Alike
          </h2>
          <p className="text-primary text-sm leading-normal mt-5 max-w-3xl mx-auto">
            This is your platform to showcase your work, grow a community, and
            find your next favorite game. Submit a link or host it here—
            whatever works for you. Indie spirit meets seamless sharing, with
            discovery at its heart.
          </p>
          <PTButton className=' px-[70px] py-[12px]' label="Learn More" icon={<MdArrowForwardIos className=" size-4 mt-1" />} />
        </div>
      </PTContainer>
    </div>
  );
};

export default BannerSection;

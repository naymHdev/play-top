import PTContainer from "@/components/ui/PTContainer";
import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import bannerImage from "../../../assets/images/banner-image.avif";
import PTButton from "@/components/ui/PTButton";

const BannerSection = () => {
  return (
    <>
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bannerImage}
            alt="Banner Image"
            layout="fill"
            className=" object-cover bg-no-repeat object-center"
            quality={100}
          />
        </div>

        {/* Content on top of the image */}
        <PTContainer>
          <div className="relative lg:w-1/2 z-10 py-10 lg:py-46">
            <h2 className="text-primary font-extrabold text-3xl md:text-6xl lg:leading-16">
              All in One Place for Game Creators and Fans Alike
            </h2>
            <p className="text-primary text-sm leading-normal mt-5 max-w-3xl mx-auto">
              This is your platform to showcase your work, grow a community, and
              find your next favorite game. Submit a link or host it here—
              whatever works for you. Indie spirit meets seamless sharing, with
              discovery at its heart.
            </p>
            <PTButton
              className=" px-[70px] py-[12px] bg-secondary"
              label="Learn More"
              icon={<MdArrowForwardIos className=" size-4 mt-1" />}
            />
          </div>
        </PTContainer>
        <div className="bg-gradient-to-r from-black via-black via-25%  to-transparent inset-0 block absolute"></div>
      </div>
    </>
  );
};

export default BannerSection;

"use client";

import Image from "next/image";
import PTContainer from "@/components/ui/PTContainer";
import PTButton from "@/components/ui/PTButton";
import { MdArrowForwardIos } from "react-icons/md";
import bannerImage from "../../../assets/images/avhinash-bg-min.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import AuthModal from "../auth/AuthModal";
import { TUserProps } from "@/types/user";

const BannerSection = ({ session }: { session: TUserProps | null }) => {
  const SubmitButton = (
    <Button className="w-[150px] h-[40px] rounded-full bg-secondary hover:bg-green-700 hover:cursor-pointer text-primary font-medium flex items-center gap-1">
      Submit Game
      <FaPlus className="ml-2" />
    </Button>
  );

  return (
    <section className="relative bg-black overflow-hidden rounded-lg">
      <PTContainer className="relative min-h-[80vh] flex items-center justify-start">
        {/* Background image only inside container and only on md+ */}
        <div className="absolute inset-0 hidden md:block z-0 rounded-lg">
          <Image
            src={bannerImage}
            alt="Banner Background"
            fill
            priority
            className="object-contain object-right w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent rounded-lg" />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-white font-extrabold text-4xl md:text-6xl leading-tight mb-6">
            All in One Place for Game Creators and Fans Alike
          </h1>
          <p className="text-gray-300 text-lg mb-10">
            This is your platform to showcase your work, grow a community, and
            find your next favorite game. Submit a link or host it here—whatever
            works for you. Indie spirit meets seamless sharing, with discovery
            at its heart.
          </p>
          {session?.user?.email ? (
            <Link href="/submit-product">{SubmitButton}</Link>
          ) : (
            <AuthModal>{SubmitButton}</AuthModal>
          )}
        </div>
      </PTContainer>
    </section>
  );
};

export default BannerSection;

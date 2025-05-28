"use client";

import PTButton from "@/components/ui/PTButton";
import PTContainer from "@/components/ui/PTContainer";
import { CiEdit } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { IUser } from "@/types/user";

const ProfileBanner = ({ profileInfo }: { profileInfo: IUser }) => {

  // console.log("profileInfo", profileInfo);

  return (
    <div className="bg-gradient-to-b from-black to-[#09190A] mt-10 lg:mt-0 relative">
      <PTContainer>
        <div className="max-w-4xl mx-auto py-8 lg:py-14 px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-10">
            {/* Avatar and user info */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-5 w-full lg:w-auto">
              <div className="flex-shrink-0">
                <Avatar className="w-[130px] h-[130px] lg:w-[240px] lg:h-[240px]">
                  <AvatarImage
                    src={profileInfo?.photo}
                    alt={profileInfo?.name || "User avatar"}
                  />
                  <AvatarFallback>
                    {(profileInfo?.name || "")
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase() || "CN"}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="text-center lg:text-left md:mt-24">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-tight">
                  {profileInfo?.name}
                </h2>
                <p className="text-foreground text-sm font-normal mt-1 truncate max-w-xs mx-auto lg:mx-0">
                  {profileInfo?.userName}
                </p>
              </div>
            </div>

            {/* Edit profile button */}
            <div className="flex-shrink-0 md:mt-24">
              <Link href="/update-profile" passHref>
                <PTButton
                  className="border border-primary py-2 px-6 text-sm sm:text-base"
                  label="Edit Profile"
                  icon={<CiEdit />}
                />
              </Link>
            </div>
          </div>
        </div>
      </PTContainer>
    </div>
  );
};

export default ProfileBanner;

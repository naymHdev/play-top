"use client";

import PTButton from "@/components/ui/PTButton";
import PTContainer from "@/components/ui/PTContainer";
import { CiEdit } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileBanner = () => {
  return (
    <>
      <div className="h-[240px] bg-gradient-to-b from-[#000000] to-[#09190A]">
        <PTContainer>
          <div className="">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-[240px] h-[240px] mt-14">
                  <Avatar className="w-[240px] h-[240px]">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-primary leading-10">
                    Jackson Roy
                  </h2>
                  <p className="text-foreground text-sm font-normal mt-1">
                    @jacksonroy_gammer
                  </p>
                </div>
              </div>
              <div>
                <PTButton
                  className="border border-primary py-2 px-5"
                  label="Edit Profile"
                  icon={<CiEdit />}
                />
              </div>
            </div>
          </div>
        </PTContainer>
      </div>
    </>
  );
};

export default ProfileBanner;

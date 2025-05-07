"use client";

import PTButton from "@/components/ui/PTButton";
import PTContainer from "@/components/ui/PTContainer";
import { CiEdit } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useUser } from "@/contexts/UserContext";

const ProfileBanner = () => {

  const {user} = useUser()
  // console.log(user);

  return (
    <>
      <div className="h-[240px] bg-gradient-to-b from-[#000000] to-[#09190A] mt-10 lg:mt-0">
        <PTContainer>
          <div className="w-full lg:max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="lg:flex items-center gap-5">
                <div className="lg:w-[240px] w-[130px] lg:h-[240px] h-[130px] mt-8 lg:mt-14">
                  <Avatar className="lg:w-[240px] w-[130px] lg:h-[240px] h-[130px]">
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
                <Link href="/update-profile">
                  <PTButton
                    className="border border-primary py-2 px-5"
                    label="Edit Profile"
                    icon={<CiEdit />}
                  />
                </Link>
              </div>
            </div>
          </div>
        </PTContainer>
      </div>
    </>
  );
};

export default ProfileBanner;

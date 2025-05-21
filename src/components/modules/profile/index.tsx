"use client";

import { FaExternalLinkAlt } from "react-icons/fa";
import ProductTab from "./ProductTab";
import { TGame } from "@/types/games";
import { IUser } from "@/types/user";
import Image from "next/image";
import { socialIconProfile } from "@/constants/platform";
import { TLinks } from "@/types/type";

type TProfileInfo = {
  myGames: TGame[];
  profileInfo: IUser;
};

// --------------- Profile Social Links Icons --------------- //
function normalizeKey(name: string): string | undefined {
  const map: Record<string, string> = {
    facebook: "Facebook",
    x: "X",
    twitter: "X",
    reddit: "Reddit",
    linkedin: "Linkedin",
    github: "Github",
    steam: "Steam",
  };

  const normalized = name.toLowerCase().replace(/\s+/g, "");
  return map[normalized];
}

const ProfileDetails = ({ myGames, profileInfo }: TProfileInfo) => {
  const pData = profileInfo?.data;
  // console.log("profileInfo", pData);

  return (
    <>
      <div className=" mt-24 grid-cols-1 grid lg:grid-cols-6 gap-8">
        {/* ----------- User Bio ----------- */}
        <div className=" col-span-4">
          <h4 className=" text-foreground font-semibold uppercase text-sm">
            BIO
          </h4>
          <p className=" font-normal text-primary/90 text-lg leading-7 mt-2">
            {pData?.bio}
          </p>
        </div>

        {/* ----------- User Links ----------- */}
        <div className="col-span-2">
          <h4 className="text-foreground font-semibold uppercase text-sm mb-3">
            LINKS
          </h4>
          <div className="space-y-3">
            {pData?.links.map((link: TLinks) => {
              if (!link.name || !link.link) return null;

              const keyName = normalizeKey(link.name);
              const icon = socialIconProfile[keyName];
              if (!icon) return null;

              return (
                <div
                  key={link._id || link.id}
                  className="flex rounded-md bg-[#1a1a1a] overflow-hidden"
                >
                  {/* Icon Box */}
                  <div className="flex items-center justify-center p-3 bg-[#202020] rounded-l-md min-w-[44px]">
                    {/* Use dynamic bg color if you want per icon */}
                    <Image
                      src={icon}
                      alt={`${link.name} icon`}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>

                  {/* Name and Link */}
                  <div className="flex flex-1 items-center justify-between bg-[#111111] px-4 rounded-r-md">
                    <p className="text-sm font-semibold text-white">
                      {link.name}
                    </p>
                    <a
                      href={link.link}
                      target="_blank"
                      rel="nofollow"
                      aria-label={`Visit ${link.name}`}
                      className="text-primary/80 hover:text-primary transition"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ----------- User Games ----------- */}
      <ProductTab myGames={myGames} />
    </>
  );
};

export default ProfileDetails;

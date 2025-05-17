import { TGame } from "@/types/games";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "./button";
import { TbArrowBigUpFilled, TbArrowBigDown } from "react-icons/tb";
import Link from "next/link";
import { LuDot } from "react-icons/lu";
import { platformIconMap } from "@/constants/platform";

const PTGameCard = ({ games }: { games: TGame }) => {
  const { title, thumbnail, categories, price, platform, _id } = games || {};
  return (
    <>
      <div className="rounded-md border border-card mb-5">
        <div className="">
          <div className="lg:flex items-center justify-between gap-4">
            <Link href={`/game-details/${_id}`}>
              <div className="lg:flex items-center gap-4">
                {/*  -------------------- Image Section ---------------- */}
                <section>
                  {thumbnail ? (
                    <Image
                      src={thumbnail}
                      alt={title || "Game image"}
                      width={300}
                      height={300}
                      className="rounded-md w-full"
                    />
                  ) : (
                    <Image
                      src="/fallback-image.png"
                      alt="Fallback image"
                      width={300}
                      height={300}
                      className="rounded-md w-full"
                    />
                  )}
                </section>

                {/* -------------------- Content Section ---------------- */}
                <section className=" flex flex-col gap-2 px-3 py-4 lg:py-0">
                  <h2 className=" text-[16px] font-semibold text-primary leading-5">
                    {title}
                  </h2>
                  <div className="lg:flex items-center gap-4">
                    <div className="flex items-center">
                      {categories.map((category: string, idx: number) => (
                        <p
                          key={idx}
                          className="font-semibold leading-5 text-[12px] text-foreground flex items-center"
                        >
                          {idx !== 0 && (
                            <span className="">
                              <LuDot className=" size-6" />
                            </span>
                          )}
                          {category}
                        </p>
                      ))}
                    </div>
                    <div className=" h-6 border-r border-[#666262] hidden lg:block"></div>
                    <div className="flex gap-2 items-center mt-3 lg:mt-0">
                      {platform?.map((platformName: string, index: number) => {
                        const icon = platformIconMap[platformName];
                        return (
                          icon && (
                            <Image
                              key={index}
                              src={icon}
                              alt={platformName}
                              width={20}
                              height={20}
                              className="object-contain"
                            />
                          )
                        );
                      })}
                    </div>
                  </div>
                </section>
              </div>
            </Link>
            {/* -------------------- Price & Button Section ---------------- */}
            <section className="px-3 py-4 lg:py-0">
              <div className=" flex items-center md:justify-end justify-between gap-14">
                <h1 className=" font-medium text-xl uppercase text-secondary">
                  ${price}
                </h1>
                <div className="flex items-center justify-center bg-card rounded-full py-[6px]">
                  <Button className="hover:cursor-pointer bg-transparent p-0 h-auto hover:bg-transparent">
                    <TbArrowBigUpFilled />
                  </Button>
                  <span className="text-white font-normal leading-[18px]">
                    4
                  </span>
                  <Button className="hover:cursor-pointer bg-transparent p-0 h-auto hover:bg-transparent">
                    <TbArrowBigDown />
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PTGameCard;

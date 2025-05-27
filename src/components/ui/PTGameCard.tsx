"use client";
import type { TGame } from "@/types/games";
import Image from "next/image";
import { Button } from "./button";
import { TbArrowBigUpFilled, TbArrowBigDown } from "react-icons/tb";
import Link from "next/link";
import { LuDot } from "react-icons/lu";
import { upvoteGame } from "@/services/games";
import toast from "react-hot-toast";
import { platformIconMap } from "@/constants/platform";

const PTGameCard = ({ games }: { games: TGame }) => {
  const { title, thumbnail, categories, price, platform, _id, totalUpvote } =
    games || {};

  const handleUpvote = async (id: string) => {
    const gameUpVote = {
      data: {
        gameId: id as string,
      },
    };

    try {
      const res = await upvoteGame(gameUpVote);

      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log("Game Upvote Error:", error);
    }
  };

  return (
    <div className="rounded-md border border-card mb-5">
      {/* Mobile Layout */}
      <div className="flex lg:hidden items-center justify-between p-2">
        <Link
          href={`/game-details/${_id}`}
          className="flex items-center gap-3 flex-1 min-w-0"
        >
          {/* Image */}
          <div className="flex-shrink-0">
            {thumbnail ? (
              <Image
                src={thumbnail || "/placeholder.svg"}
                alt={title || "Game image"}
                width={60}
                height={60}
                className="rounded-lg w-16 h-16 object-cover"
              />
            ) : (
              <Image
                src="/fallback-image.png"
                alt="Fallback image"
                width={60}
                height={60}
                className="rounded-lg w-16 h-16 object-cover"
              />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm text-primary leading-tight mb-2 truncate">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <p className="font-medium text-secondary">${price}</p>
              <div className="flex gap-2 items-center">
                {platform?.map((platformName: string, index: number) => {
                  const icon = platformIconMap[platformName];
                  return (
                    icon && (
                      <Image
                        key={`${index + 1}`}
                        src={icon}
                        alt={platformName}
                        width={10}
                        height={10}
                        className="object-contain"
                      />
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </Link>

        {/* Voting Buttons */}
        <div className="flex flex-col items-center gap-1 ml-2">
          <Button
            onClick={() => handleUpvote(_id)}
            className="hover:cursor-pointer bg-transparent p-1 h-auto hover:bg-transparent text-muted-foreground hover:text-primary"
            size="sm"
          >
            <TbArrowBigUpFilled className="w-4 h-4" />
          </Button>
          <span className="text-xs font-medium text-foreground min-w-[20px] text-center">
            {totalUpvote}
          </span>
          <Button className="hover:cursor-pointer bg-transparent p-1 h-auto hover:bg-transparent text-muted-foreground hover:text-primary">
            <TbArrowBigDown className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:items-center lg:justify-between">
        <Link href={`/game-details/${_id}`} className="flex-1">
          <div className="flex items-center gap-4">
            {/*  -------------------- Image Section ---------------- */}
            <section className="flex-shrink-0">
              {thumbnail ? (
                <Image
                  src={thumbnail || "/placeholder.svg"}
                  alt={title || "Game image"}
                  width={500}
                  height={450}
                  className="rounded-md w-[270px] h-[110px] object-cover"
                />
              ) : (
                <Image
                  src="/fallback-image.png"
                  alt="Fallback image"
                  width={300}
                  height={300}
                  className="rounded-md w-[160px] h-auto object-cover"
                />
              )}
            </section>

            {/* -------------------- Content Section ---------------- */}
            <section className="flex flex-col gap-2 py-0 flex-1 min-w-0">
              <h2 className="text-[18px] font-semibold text-primary leading-5">
                {title}
              </h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center flex-wrap">
                  {categories?.map((category: string, idx: number) => (
                    <p
                      key={`${idx + 1}`}
                      className="font-semibold leading-5 text-[14px] text-foreground flex items-center"
                    >
                      {idx !== 0 && (
                        <span>
                          <LuDot className="size-6" />
                        </span>
                      )}
                      {category}
                    </p>
                  ))}
                </div>
                <div className="h-6 border-r border-[#666262]"></div>
                <div className="flex gap-2 items-center mt-3 lg:mt-0">
                  {platform?.map((platformName: string, index: number) => {
                    const icon = platformIconMap[platformName];
                    return (
                      icon && (
                        <Image
                          key={`${index + 1}`}
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
        <section className="px-3 py-0 flex-shrink-0">
          <div className="flex items-center gap-14">
            <h1 className=" font-bold text-xl uppercase text-secondary">
              ${price}
            </h1>
            <div className="flex items-center justify-center bg-card rounded-full py-[6px] px-1">
              <Button
                onClick={() => handleUpvote(_id)}
                className="hover:cursor-pointer bg-transparent p-0 h-auto hover:bg-transparent"
              >
                <TbArrowBigUpFilled />
              </Button>
              <span className="text-white font-normal leading-[18px] px-2 min-w-[20px] text-center">
                {totalUpvote}
              </span>
              <Button className="hover:cursor-pointer bg-transparent p-0 h-auto hover:bg-transparent">
                <TbArrowBigDown />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PTGameCard;

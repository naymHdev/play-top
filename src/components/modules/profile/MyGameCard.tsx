"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import { platformIconMap } from "@/constants/platform";
import { LuDot } from "react-icons/lu";
import { TbArrowBigDown, TbArrowBigUpFilled } from "react-icons/tb";
import { TGame } from "@/types/games";
import { deleteMyGame } from "@/services/profile";
import toast from "react-hot-toast";

const MyGameCard = ({ games }: { games: TGame }) => {
  const { title, thumbnail, categories, price, platform, id } = games || {};

  const handleDeleteGame = async (gameId: string) => {
    const deleteData = {
      data: {
        gameId: gameId,
      },
    };

    try {
      const res = await deleteMyGame(deleteData);

      if (res?.success) {
        toast.success("Game deleted successfully");
      } else {
        toast.error("Failed to delete game");
      }
    } catch (error: any) {
      console.error("Error deleting game:", error);
    }
  };

  return (
    <>
      <div className="rounded-md border border-card mb-5 relative">
        <div className="lg:flex items-center justify-between gap-4">
          <Link href={`/game-details/${id}`}>
            <div className="lg:flex items-center gap-4">
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

              <section className="flex flex-col gap-2 px-3 py-4 lg:py-0">
                <h2 className="text-[16px] font-semibold text-primary leading-5">
                  {title}
                </h2>
                <div className="lg:flex items-center gap-4">
                  <div className="flex items-center">
                    {categories.map((category: string, idx: number) => (
                      <p
                        key={idx}
                        className="font-semibold leading-5 text-[12px] text-foreground flex items-center"
                      >
                        {idx !== 0 && <LuDot className="size-6" />}
                        {category}
                      </p>
                    ))}
                  </div>
                  <div className="h-6 border-r border-[#666262] hidden lg:block"></div>
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
          <section className="px-3 py-4 lg:py-0">
            <div className="flex items-center md:justify-end justify-between gap-14">
              <h1 className="font-medium text-xl uppercase text-secondary">
                ${price}
              </h1>
              <div className="flex items-center justify-center bg-card rounded-full py-[6px]">
                <Button className="bg-transparent p-0 h-auto hover:bg-transparent">
                  <TbArrowBigUpFilled />
                </Button>
                <span className="text-white font-normal leading-[18px]">4</span>
                <Button className="bg-transparent p-0 h-auto hover:bg-transparent">
                  <TbArrowBigDown />
                </Button>
              </div>
            </div>
          </section>
        </div>

        <div className="absolute top-0.5 right-0">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVertical className="text-primary/80 hover:cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card text-primary border-none">
              <DropdownMenuItem>
                <Link
                  href={{
                    pathname: "/game-update-request",
                    query: { id },
                  }}
                >
                  Edit Game
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDeleteGame(id as string)}>
                Delete Game
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default MyGameCard;

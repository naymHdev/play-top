"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { platformIconMap } from "@/constants/platform";
import { LuDot } from "react-icons/lu";
import { TbArrowBigDown, TbArrowBigUpFilled } from "react-icons/tb";
import { TGame } from "@/types/games";
import { deleteMyGame } from "@/services/profile";
import toast, { Toast } from "react-hot-toast";
import { BsThreeDots } from "react-icons/bs";

const MyGameCard = ({ games }: { games: TGame }) => {
  const { title, thumbnail, categories, price, platform, id } = games || {};

  const handleDeleteGame = async (gameId: string) => {
    try {
      const res = await deleteMyGame({ data: { gameId } });

      if (res?.success) {
        toast.success("Game deleted successfully");
      } else {
        toast.error("Failed to delete game");
      }
    } catch (error: any) {
      console.error("Error deleting game:", error);
      toast.error("Error deleting game");
    }
  };

  const confirmDeleteGame = (gameId: string) => {
    toast.custom(
      (t: Toast) => (
        <div
          className={`bg-gray-900 text-white p-4 rounded shadow-lg flex flex-col gap-3 w-72 ${
            t.visible ? "animate-enter" : "animate-leave"
          }`}
        >
          <p>Are you sure you want to delete your game?</p>
          <div className="flex justify-end gap-2">
            <button
              className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
            <button
              className="px-3 py-1 bg-red-600 rounded hover:bg-red-700"
              onClick={() => {
                toast.dismiss(t.id);
                handleDeleteGame(gameId);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      ),
      { duration: Infinity }
    );
  };

  return (
    <div className="rounded-md border border-card mb-5 relative p-4">
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
                <div className="flex items-center flex-wrap gap-1">
                  {categories?.map((category: string, idx: number) => (
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
              ${price ?? "0.00"}
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

      <div className="absolute top-5 lg:top-0.5 lg:right-1.5 right-4.5 ">
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-card md:bg-transparent text-primary rounded-full md:rounded-none p-1">
            <BsThreeDots className="text-primary/80 hover:cursor-pointer size-5" />
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
            <DropdownMenuItem onClick={() => confirmDeleteGame(id as string)}>
              Delete Game
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default MyGameCard;

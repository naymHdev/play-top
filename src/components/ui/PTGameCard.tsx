"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowBigUp } from "lucide-react";
import Link from "next/link";
import { platformIconMap } from "@/constants/platform";
import { TbArrowBigDown, TbArrowBigUpFilled } from "react-icons/tb";
import { upvoteGame } from "@/services/games";
import toast from "react-hot-toast";

// Mock types
interface TGame {
  _id: string;
  title: string;
  thumbnail?: string;
  categories?: string[];
  price: number;
  platform?: string[];
  totalUpvote: number;
}

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
        toast.success("Upvote successful");
      } else {
        toast.error("First login to upvote");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log("Game Upvote Error:", error);
    }
  };

  return (
    <div className="border border-card rounded-lg mb-4 transition-colors">
      {/* Mobile Layout - List Format */}
      <div className="flex lg:hidden items-center p-3 gap-3">
        <Link
          href={`/game-details/${_id}`}
          className="flex items-center gap-3 flex-1 min-w-0"
        >
          {/* Image */}
          <div className="flex-shrink-0">
            {thumbnail ? (
              <Image
                src={thumbnail || "/placeholder.svg?height=64&width=64"}
                alt={title || "Game image"}
                width={64}
                height={64}
                className="rounded-lg w-16 h-16 object-cover"
              />
            ) : (
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Fallback image"
                width={64}
                height={64}
                className="rounded-lg w-16 h-16 object-cover"
              />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm text-white leading-tight mb-1 truncate">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-foreground mb-1">
              {categories?.slice(0, 2).map((category: string, idx: number) => (
                <span key={idx} className="text-gray-400">
                  {idx > 0 && " • "}
                  {category}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <p className="font-semibold text-green-400">${price}</p>
              {/* <div className="flex gap-1 items-center">
                {platform
                  ?.slice(0, 4)
                  .map((platformName: string, index: number) => {
                    const icon = platformIconMap[platformName];
                    return (
                      icon && (
                        <Image
                          key={index}
                          src={icon || "/placeholder.svg"}
                          alt={platformName}
                          width={12}
                          height={12}
                          className="object-contain opacity-70"
                        />
                      )
                    );
                  })}
              </div> */}
            </div>
          </div>
        </Link>

        {/* Upvote Section */}
        <div className="flex items-center gap-1 bg-card rounded-full px-2 py-1">
          <Button
            onClick={() => handleUpvote(_id)}
            className="hover:cursor-pointer bg-transparent p-1 h-auto hover:bg-transparent text-gray-400 hover:text-white"
            size="sm"
          >
            <ArrowBigUp className="w-4 h-4" />
          </Button>
          <span className="text-xs font-medium text-white min-w-[16px] text-center">
            {totalUpvote}
          </span>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:items-center lg:justify-between pr-4">
        <Link href={`/game-details/${_id}`} className="flex-1">
          <div className="flex items-center gap-4">
            {/* Image Section */}
            <section className="flex-shrink-0">
              {thumbnail ? (
                <Image
                  src={thumbnail || "/placeholder.svg?height=80&width=120"}
                  alt={title || "Game image"}
                  width={200}
                  height={90}
                  className="rounded-l-lg w-[200px] h-[90px] object-cover"
                />
              ) : (
                <Image
                  src="/placeholder.svg?height=80&width=120"
                  alt="Fallback image"
                  width={120}
                  height={80}
                  className="rounded-l-lg w-[120px] h-[80px] object-cover"
                />
              )}
            </section>

            {/* Content Section */}
            <section className="flex flex-col gap-2 flex-1 min-w-0">
              <h2 className="text-[16px] font-semibold text-white leading-tight">
                {title}
              </h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-sm text-foreground">
                  {categories?.map((category: string, idx: number) => (
                    <span key={idx}>
                      {idx > 0 && " • "}
                      {category}
                    </span>
                  ))}
                </div>
                <div className="h-5 border-r border-card"></div>
                <div className="flex gap-2 items-center">
                  {platform?.map((platformName: string, index: number) => {
                    const icon = platformIconMap[platformName];
                    return (
                      icon && (
                        <Image
                          key={index}
                          src={icon || "/placeholder.svg"}
                          alt={platformName}
                          width={16}
                          height={16}
                          className="object-contain opacity-70"
                        />
                      )
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </Link>

        {/* Price & Upvote Section */}
        <section className="flex items-center gap-6">
          <h1 className="font-bold text-xl text-green-400">${price}</h1>
          <div className="flex items-center bg-card rounded-full py-2">
            <Button
              onClick={() => handleUpvote(_id)}
              className="hover:cursor-pointer bg-transparent p-1 h-auto hover:bg-transparent text-gray-400 hover:text-white"
            >
              <TbArrowBigUpFilled className="w-10 h-10" />
            </Button>
            <span className="text-white font-medium px-2 min-w-[24px] text-center">
              {totalUpvote}
            </span>
            <Button className="hover:cursor-pointer bg-transparent p-1 h-auto hover:bg-transparent text-gray-400 hover:text-white">
              <TbArrowBigDown className="w-10 h-10" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PTGameCard;

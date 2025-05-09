import { TGame } from "@/types/games";
import Image from "next/image";
import React from "react";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";

const MyGameCard = ({ games }: { games: TGame }) => {
  // console.log(games);
  return (
    <div className="mt-2 border border-card rounded-2xl shadow relative">
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
        <Link href={`game-details/${games._id}`}>
          <div>
            <Image
              className=""
              src={games.image}
              alt={games.title}
              width={450}
              height={350}
            />
          </div>
        </Link>
        <Link href={`game-details/${games._id}`}>
          <div className=" px-3 lg:px-0">
            <h2 className=" text-xl lg:text-2xl font-semibold text-primary">
              {games.title}
            </h2>
          </div>
        </Link>
        <div className="px-3">
          <div className=" flex items-center justify-between lg:justify-evenly">
            <h1 className=" font-medium text-xl uppercase text-secondary">
              ${games.price}
            </h1>
            {/* ----------- Up & Down Vot button -------------- */}
            <div className="flex items-center justify-center bg-[#124116] hover:bg-green-900 text-primary rounded-full px-2 py-1">
              <Button className="hover:cursor-pointer bg-transparent p-0 h-auto hover:bg-transparent">
                <FiArrowUpRight />
              </Button>
              <span className="text-white text-lg font-semibold">4.5k</span>
              <Button className="hover:cursor-pointer bg-transparent p-0 h-auto hover:bg-transparent">
                <FiArrowDownRight />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:mt-0 mt-3 p-3 bg-card border-t border-card rounded-b-2xl">
        <div className="lg:flex items-center space-x-6 font-medium text-[12px] leading-5 text-foreground">
          <div className=" flex items-center gap-2">
            <h3 className=" ">Categories:</h3>
            <div className=" flex gap-2 items-center">
              {games.categories.map((category, idx) => (
                <p key={idx}>{category}</p>
              ))}
            </div>
          </div>
          <div className=" h-6 border-r border-[#666262] hidden lg:block"></div>
          <div className=" flex items-center gap-2 mt-2 lg:mt-0">
            <h3 className="">Platform:</h3>
            <div className=" flex gap-2 items-center">
              {games.platform.map((device, idx) => (
                <Image key={idx} src={device} alt="Device" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute top-2 right-1">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVertical className=" text-primary/80 hover:cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" bg-card text-primary border-none">
            <DropdownMenuItem>Edit Game</DropdownMenuItem>
            <DropdownMenuItem>Delete Game</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default MyGameCard;

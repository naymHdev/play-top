import { TGame } from "@/types/games";
import Image from "next/image";
import React from "react";
import { Button } from "./button";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

const PTGameCard = ({ games }: { games: TGame }) => {
  // console.log(games);
  return (
    <Link href={`game-details/${games._id}`}>
      <div className="mt-2 border border-card rounded-2xl shadow">
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
          <div>
            <Image
              className=""
              src={games.image}
              alt={games.title}
              width={450}
              height={350}
            />
          </div>
          <div className=" px-3 lg:px-0">
            <h2 className=" text-xl lg:text-2xl font-semibold text-primary">
              {games.title}
            </h2>
          </div>
          <div className="px-3">
            <div className=" flex items-center justify-between lg:justify-evenly">
              <h1 className=" font-medium text-xl uppercase text-secondary">
                ${games.price}
              </h1>
              <Button className=" flex items-center gap-2 bg-card text-primary rounded-full max-w-[90px] max-h-[26px]">
                <FiArrowUpRight /> 4.5k <FiArrowDownRight />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-3 p-3 bg-card border-t border-card rounded-b-2xl">
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
      </div>
    </Link>
  );
};

export default PTGameCard;

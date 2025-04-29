import { TWeeklyGames } from "@/types/weeklyGames";
import Image from "next/image";
import { Button } from "./button";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

const PTWeeklyGameCard = ({ game }: { game: TWeeklyGames }) => {
  return (
    <>
      <Link href={`/${game._id}`}>
        <div className="border border-card rounded-2xl shadow relative">
          <div className=" grid lg:flex items-center lg:justify-evenly p-2 lg:p-0">
            <div className=" flx items-center justify-center ">
              <Image
                className="flx items-center justify-center"
                src={game.image}
                alt={game.title}
                width={200}
                height={200}
              />
            </div>
            <div>
              <h2 className=" text-xl lg:text-2xl font-semibold text-primary">
                {game.title}
              </h2>
            </div>
            <div>
              <h1 className="mt-2 md:mt-0 font-medium text-xl uppercase text-secondary">
                ${game.price}
              </h1>
            </div>
          </div>
          <div className=" p-2 bg-card border-t border-card rounded-b-2xl">
            <div className=" lg:flex items-center justify-around font-medium text-[12px] leading-5 text-foreground space-y-3 lg:space-y-0">
              <div className=" flex items-center gap-2">
                <h3 className=" ">Categories:</h3>
                <div className=" flex gap-2 items-center">
                  {game.categories.map((category, idx) => (
                    <p key={idx}>{category}</p>
                  ))}
                </div>
              </div>
              <div className=" flex items-center gap-2">
                <h3 className="">Platform:</h3>
                <div className=" flex gap-2 items-center">
                  {game.platform.map((device, idx) => (
                    <Image key={idx} src={device} alt="Device" />
                  ))}
                </div>
              </div>

              <div className=" flx justify-end">
                <Button className=" flex items-center text-lg gap-2 bg-[#424242] hover:bg-card hover:cursor-pointer text-primary rounded-full max-w-[90px] max-h-[26px]">
                  <FiArrowUpRight /> 4.5k <FiArrowDownRight />
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-[#FFD902] text-background top-0 right-0 absolute rounded-tr-2xl py-1 px-2 font-medium">
            <p>- 10%</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PTWeeklyGameCard;

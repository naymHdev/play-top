import { TWeeklyGames } from "@/types/weeklyGames";
import Image from "next/image";
import { Button } from "./button";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

const PTWeeklyGameCard = ({ game }: { game: TWeeklyGames }) => {
  return (
    <>
      <div className="border border-card rounded-2xl shadow">
        <Link href={`/${game._id}`}>
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
        </Link>
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
    </>
  );
};

export default PTWeeklyGameCard;

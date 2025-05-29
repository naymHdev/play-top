"use client";

import { upvoteGame } from "@/services/games";
import toast from "react-hot-toast";
import { TbArrowBigDown, TbArrowBigUpFilled } from "react-icons/tb";
import { Button } from "../ui/button";

type Props = {
  totalVotes: number;
  findGame: any;
};

const UpvoteButton = ({ totalVotes, findGame }: Props) => {
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
    <>
      <div className="flex items-center">
        <div className="bg-card rounded-full py-2 px-3">
          <Button
            onClick={() => handleUpvote(findGame?._id as string)}
            className="hover:cursor-pointer bg-transparent p-1 h-auto hover:bg-transparent text-gray-400 hover:text-white"
          >
            <TbArrowBigUpFilled className="w-10 h-10" />
          </Button>
          <span className="text-white font-medium px-2 min-w-[24px] text-center">
            {totalVotes}
          </span>
          <Button className="hover:cursor-pointer bg-transparent p-1 h-auto hover:bg-transparent text-gray-400 hover:text-white">
            <TbArrowBigDown className="w-10 h-10" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default UpvoteButton;

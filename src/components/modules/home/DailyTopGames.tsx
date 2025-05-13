"use client";

import { useState } from "react";
import PTContainer from "@/components/ui/PTContainer";
import PTGameCard from "@/components/ui/PTGameCard";
import PTSectionName from "@/components/ui/PTSectionName";
import { TGame } from "@/types/games";
import game1 from "../../../assets/images/new-game-ui.png";
import android from "../../../assets/icons/android.png";
import apple from "../../../assets/icons/apple.png";
import windows from "../../../assets/icons/windows.png";
import linux from "../../../assets/icons/linux.png";
import { FaArrowRight, FaArrowUp, FaXTwitter } from "react-icons/fa6";
import thumb from "../../../assets/images/gameThumbnail.png";
import { FaLinkedin, FaReddit } from "react-icons/fa";
import PTButton from "@/components/ui/PTButton";
import Newsletter from "@/components/Newsletter";

// Game data
const gamesData: TGame[] = [
  {
    _id: "1",
    author: "John Doe",
    title: "Need for Speed™ Heat Deluxe Edition",
    subTitle:
      "Save on the Sakura Storm Collection, Koumei Visions Bundle and more from April 9-23.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: game1,
    categories: ["Design Tools", "Productivity", "Artificial Intelligence"],
    platform: [android, apple, windows, linux],
    price: 8.99,
    thumbnail: thumb,
    socialLinks: [
      {
        icon: <FaReddit />,
        name: "Reddit",
        link: "https://www.facebook.com/",
      },
      {
        icon: <FaLinkedin />,
        name: "Linkedin",
        link: "https://www.facebook.com/",
      },
      {
        icon: <FaXTwitter />,
        name: "Twitter",
        link: "https://twitter.com/",
      },
    ],
  },
];

export // Simulated game list
const repeatedGamesData = Array.from({ length: 20 }, (_, index) => ({
  ...gamesData[0],
  _id: `${index + 1}`,
}));

const DailyTopGames = ({ topGameDay }: { topGameDay: TGame[] }) => {
  // console.log(topGameDay);

  const INITIAL_COUNT = 10;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const isShowingAll = visibleCount >= repeatedGamesData.length;

  const handleToggle = () => {
    setVisibleCount(isShowingAll ? INITIAL_COUNT : visibleCount + 5);
  };

  return (
    <PTContainer className="mt-24 relative">
      <div>
        <PTSectionName title="Top Games of the Day" />
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-7 gap-8">
        <div className=" col-span-full lg:col-span-5">
          {repeatedGamesData.slice(0, visibleCount).map((game) => (
            <PTGameCard key={game._id} games={game} />
          ))}

          <div className="flex justify-center mt-10">
            <PTButton
              onClick={handleToggle}
              className="py-2 px-5  bg-card rounded-sm"
              label={isShowingAll ? "Show Less" : "Show More"}
              icon={isShowingAll ? <FaArrowUp /> : <FaArrowRight />}
            />
          </div>
        </div>
        <div className="col-span-full lg:col-span-2">
          <Newsletter />
        </div>
      </div>
    </PTContainer>
  );
};

export default DailyTopGames;

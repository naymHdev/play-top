"use client";

import PTContainer from "@/components/ui/PTContainer";
import PTGameCard from "@/components/ui/PTGameCard";
import PTSectionName from "@/components/ui/PTSectionName";
import { TGame } from "@/types/games";
import game1 from "../../../assets/images/game1.png";
import android from "../../../assets/icons/android.png";
import apple from "../../../assets/icons/apple.png";
import windows from "../../../assets/icons/windows.png";
import linux from "../../../assets/icons/linux.png";
import { Button } from "@/components/ui/button";
import { FaArrowRight, FaXTwitter } from "react-icons/fa6";
import thumb from "../../../assets/images/gameThumbnail.png";
import { FaLinkedin, FaReddit } from "react-icons/fa";

const gamesData: TGame[] = [
  {
    _id: "1",
    author: "John Doe",
    title: "Need for Speed™ Heat Deluxe Edition",
    subTitle:
      "Save on the Sakura Storm Collection, Koumei Visions Bundle and more from April 9-23.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum tellus, volutpat in eros ac, rhoncus vehicula nibh. Proin quis dui dui. Nullam laoreet facilisis tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam nibh sem, molestie non ex eu, consequat facilisis lacus. Ut sollicitudin dictum elit, ac hendrerit tortor aliquam sit amet. Suspendisse ultrices turpis vel ligula mollis pulvinar. Donec blandit eros nulla, quis lacinia lectus ullamcorper sit amet. In hac habitasse platea dictumst. Cras vel accumsan odio, ac elementum lectus. Curabitur libero augue, rhoncus ac elit vitae, feugiat suscipit erat. Sed dictum ipsum non felis cursus, quis mattis sapien congue. Vestibulum aliquet pretium ligula, nec semper mauris commodo et. Cras vestibulum sollicitudin tortor non elementum. Quisque dapibus mauris at egestas luctus. ",
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

// To repeat the same data 5 times (for example)
export const repeatedGamesData = Array.from({ length: 10 }, (_, index) => ({
  ...gamesData[0],
  _id: `${index + 1}`,
}));

const DailyTopGames = () => {
  return (
    <>
      <PTContainer className=" mt-20">
        <div>
          <PTSectionName
            title="Top Games of the Day"
            description="Donec ac posuere tellus. Nunc sem ipsum, cursus quis erat feugiat, cursus dictum enim."
          />
        </div>

        <div className="mt-10">
          {repeatedGamesData?.map((game) => (
            <PTGameCard key={game._id} games={game} />
          ))}
        </div>
        <div className="bg-black bg-opacity-30 h-[148px] flex items-center justify-center shadow-lg shadow-black/50 -mt-20">
          <div className="flex items-center justify-center">
            <Button className="px-8 py-5 flex items-center gap-2 rounded-full text-primary font-medium leading-7 max-w-[154px] max-h-[44px] bg-background border border-card">
              Show More <FaArrowRight />
            </Button>
          </div>
        </div>
      </PTContainer>
    </>
  );
};

export default DailyTopGames;

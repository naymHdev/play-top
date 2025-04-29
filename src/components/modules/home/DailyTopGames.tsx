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
import { FaArrowRight, FaXTwitter } from "react-icons/fa6";
import thumb from "../../../assets/images/gameThumbnail.png";
import { FaLinkedin, FaReddit } from "react-icons/fa";
import PTButton from "@/components/ui/PTButton";

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
      <PTContainer
        className=" mt-20 relative
      "
      >
        <div>
          <PTSectionName
            title="Top Games of the Day"
            description="Donec ac posuere tellus. Nunc sem ipsum, cursus quis erat feugiat, cursus dictum enim."
          />
        </div>

        <div className="mt-10 w-full lg:w-[70%]">
          <div className="">
            {repeatedGamesData?.map((game) => (
              <PTGameCard key={game._id} games={game} />
            ))}
            <div className="bg-gradient-to-t from-black  to-transparent h-[148px] absolute bottom-0 w-full">
              <div className=" w-full flex items-center ml-[130px] lg:ml-[340px] mt-20">
                <PTButton
                  className="py-2 px-5 rounded-full border border-card hover:border-white"
                  label="Show More"
                  icon={<FaArrowRight />}
                />
              </div>
            </div>
          </div>
        </div>
      </PTContainer>
    </>
  );
};

export default DailyTopGames;

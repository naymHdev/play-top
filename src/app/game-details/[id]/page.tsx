import { TGame } from "@/types/games";
import game1 from "../../../assets/images/game1.png";
import g3 from "../../../assets/images/g3.png";
import g4 from "../../../assets/images/g4.png";
import g5 from "../../../assets/images/g5.png";
import g6 from "../../../assets/images/g6.png";
import g8 from "../../../assets/images/g8.png";
import android from "../../../assets/icons/android.png";
import apple from "../../../assets/icons/apple.png";
import windows from "../../../assets/icons/windows.png";
import linux from "../../../assets/icons/linux.png";
import { FaXTwitter } from "react-icons/fa6";
import thumb from "../../../assets/images/gameThumbnail.png";
import { FaExternalLinkAlt, FaLinkedin, FaReddit } from "react-icons/fa";
import Image from "next/image";
import PTContainer from "@/components/ui/PTContainer";
import { Button } from "@/components/ui/button";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import UserActivities from "@/components/modules/productDetails/UserActivities";
import RelatedGames from "@/components/modules/productDetails/RelatedGames";
import ProductCarousel from "@/components/modules/productDetails/ProductCarousel";
import { EmblaOptionsType } from "embla-carousel";

const gamesData: TGame[] = [
  {
    _id: "1",
    title: "Need for Speed™ Heat Deluxe Edition",
    author: "John Doe",
    subTitle:
      "Save on the Sakura Storm Collection, Koumei Visions Bundle and more from April 9-23.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum tellus, volutpat in eros ac, rhoncus vehicula nibh. Proin quis dui dui. Nullam laoreet facilisis tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam nibh sem, molestie non ex eu, consequat facilisis lacus. Ut sollicitudin dictum elit, ac hendrerit tortor aliquam sit amet. Suspendisse ultrices turpis vel ligula mollis pulvinar. Donec blandit eros nulla, quis lacinia lectus ullamcorper sit amet. In hac habitasse platea dictumst. Cras vel accumsan odio, ac elementum lectus. Curabitur libero augue, rhoncus ac elit vitae, feugiat suscipit erat. Sed dictum ipsum non felis cursus, quis mattis sapien congue. Vestibulum aliquet pretium ligula, nec semper mauris commodo et. Cras vestibulum sollicitudin tortor non elementum. Quisque dapibus mauris at egestas luctus. ",
    image: [game1, g3, g4, g5, g6, g8, g3, g4, g5, g6, g8],
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

const OPTIONS: EmblaOptionsType = {};

const GameDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  // console.log(id);

  const findGame: TGame | undefined = gamesData.find((game) => game._id == id);
  //   console.log(findGame);

  return (
    <>
      <div>
        <Image
          className="object-cover"
          src={findGame?.thumbnail}
          alt="Thumbnail"
        />

        <PTContainer>
          <div className=" -mt-24">
            <div>
              <h2 className=" text-4xl text-primary font-extrabold">
                {findGame?.title}
              </h2>
              <p className=" text-primary text-lg leading-7 mt-4 opacity-70">
                {findGame?.subTitle}
              </p>
            </div>

            {/* ------------------------------------\\ Grid Content Layout \\------------------------------------ */}
            <div className="mt-8 grid grid-cols-5 gap-6">
              {/* ------------------------------------\\ Left Side Content \\------------------------------------ */}
              <div className="col-span-3">
                <div>
                  <ProductCarousel slides={findGame?.image} options={OPTIONS} />
                </div>
                <div className="mt-5">
                  <h3 className=" font-medium text-foreground uppercase">
                    Description
                  </h3>
                  <p className=" m-2 text-primary/90">
                    {findGame?.description}
                  </p>
                </div>
                <div className="mt-6">
                  <UserActivities />
                </div>
              </div>

              {/* ------------------------------------\\ Right Side Content \\------------------------------------ */}
              <div className="col-span-2">
                <div className=" p-5 border border-card rounded-xl">
                  <div className=" text-primary flex items-center gap-3">
                    <p className=" uppercase text-sm">Game Posted By</p>
                    <p className=" font-bold">{findGame?.author}</p>
                  </div>
                  <div className="mt-8 space-y-8">
                    <div>
                      <p className=" uppercase text-sm text-primary">Price</p>
                      <h3 className=" font-medium text-xl uppercase text-secondary">
                        ${findGame?.price}
                      </h3>
                    </div>

                    <div>
                      <Button className="flex items-center gap-2 bg-secondary text-primary rounded-full">
                        <FiArrowUpRight /> Upvote 4.5k <FiArrowDownRight />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* ------------------------------------\\ Category Content Box \\------------------------------------ */}
                <div className="mt-5 p-3 border border-card rounded-md bg-card">
                  <p className=" uppercase font-semibold text-foreground">
                    Categories
                  </p>

                  <div className=" flex items-center gap-2">
                    {findGame?.categories?.map((category, idx) => (
                      <div key={idx} className=" flex items-center gap-2 mt-1">
                        <span className=" w-1 h-1 bg-primary rounded-full"></span>
                        <p className=" text-sm text-foreground font-semibold">
                          {category}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="mt-6 uppercase font-semibold text-foreground">
                      Platform:
                    </p>

                    <div className="mt-1 flex gap-2 items-center">
                      {findGame?.platform.map((device, idx) => (
                        <Image key={idx} src={device} alt="Device" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* ------------------------------------\\ Social Links \\------------------------------------ */}
                <div>
                  <p className="mt-6 uppercase font-semibold text-foreground">
                    Links
                  </p>
                  <div className="mt-2 space-y-2">
                    {findGame?.socialLinks.map((link, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between rounded-md bg-[#111111]"
                      >
                        <div className=" flex">
                          <div className=" flex items-center gap-2">
                            <div className="text-xl text-sky-600 p-3 bg-[#202020] rounded-l-md">
                              {link.icon}
                            </div>
                            <p className="text-sm font-semibold text-foreground">
                              {link.name}
                            </p>
                          </div>
                        </div>
                        <div className=" px-3">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={link.link}
                          >
                            <FaExternalLinkAlt
                              size={16}
                              className=" text-primary"
                            />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------\\ Related Games \\------------------------------------ */}
          <div className=" mt-20">
            <RelatedGames />
          </div>
        </PTContainer>
      </div>
    </>
  );
};

export default GameDetailsPage;

import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import PTContainer from "@/components/ui/PTContainer";
import { Button } from "@/components/ui/button";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import UserActivities from "@/components/modules/productDetails/UserActivities";
import RelatedGames from "@/components/modules/productDetails/RelatedGames";
import ProductCarousel from "@/components/modules/productDetails/ProductCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { allGames } from "@/services/games";
import { TGame } from "@/types/games";
import { platformIconMap, socialIconMap } from "@/constants/platform";
import bannerImg from "../../../assets/images/gameThumbnail.png";

// ------------- By website icons -------------
import steam from "../../../assets/icons/steam-wb.png";
import itch from "../../../assets/icons/itch-wb.png";
import globe from "../../../assets/icons/globe-wb.png";

const OPTIONS: EmblaOptionsType = {};

const GameDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  const gamesData = await allGames();
  // console.log("gamesData", gamesData.data.allGames);

  const findGame = gamesData?.data?.allGames?.find(
    (game: TGame) => game.id === id
  );
  // console.log("findGame", findGame);

  return (
    <>
      <div className=" mt-16 lg:mt-0">
        <Image
          className="object-cover"
          src={bannerImg}
          alt="Thumbnail"
          quality={100}
        />

        <PTContainer>
          <div className=" -mt-26 w-full">
            <div>
              <h2 className=" text-2xl lg:text-4xl text-primary mt-10 lg:mt-0 font-bold lg:font-extrabold">
                {findGame?.title}
              </h2>
              <p className=" text-primary text-lg leading-7 mt-4 opacity-70">
                {findGame?.subTitle}
              </p>
            </div>

            {/* --------------\\ Grid Content Layout \\----------------- */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-6">
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
                  <UserActivities session={session} gameDetails={findGame} />
                </div>
              </div>

              {/* ------------------------------------\\ Right Side Content \\------------------------------------ */}
              <div className="col-span-2">
                <div className=" p-6 border border-card rounded-xl">
                  <div className=" text-primary flex items-center gap-3">
                    <p className=" uppercase text-sm text-primary">
                      Game Posted By
                    </p>
                    <p className=" font-bold -mt-0.5">
                      {findGame?.userId?.name}
                    </p>
                  </div>
                  <div className="mt-8">
                    <div className=" flex justify-between">
                      <div>
                        <p className="text-sm text-primary mb-3">Price</p>
                        <h3 className=" font-bold text-xl uppercase text-secondary">
                          ${findGame?.price}
                        </h3>
                      </div>

                      {/* ----------------- By Website Icons Button ---------------- */}
                      <div>
                        <p className="text-sm text-primary mb-4">Buy Now at</p>
                        <div className=" bg-card text-primary/70 rounded-md px-4 md:px-8 py-2">
                          <a
                            target="_blank"
                            rel="nofollow"
                            href={findGame?.socialLinks[0]?.link}
                            className=" flex gap-2 items-center"
                          >
                            <p className=" text-lg font-medium capitalize">
                              {findGame?.linkType === "steam"
                                ? "steam"
                                : findGame?.linkType === "itch.io"
                                ? "itch"
                                : findGame?.linkType === "globe"
                                ? "Bye Now"
                                : "Bye Now"}
                            </p>
                            <Image
                              src={
                                findGame?.linkType === "steam"
                                  ? steam
                                  : findGame?.linkType === "itch.io"
                                  ? itch
                                  : findGame?.linkType === "globe"
                                  ? globe
                                  : globe
                              }
                              alt="Website Icon"
                              width={25}
                              height={25}
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* ----------- Up & Down Vot button -------------- */}
                    <div className="flex items-center justify-center bg-[#124116] hover:bg-green-900 text-primary rounded-full py-2 w-5/12 md:w-4/12">
                      <Button className="hover:cursor-pointer bg-transparent p-0 h-auto hover:bg-transparent">
                        <FiArrowUpRight />
                      </Button>
                      <span className="text-white text-lg font-semibold">
                        4.5k
                      </span>
                      <Button className="hover:cursor-pointer bg-transparent p-0 h-auto hover:bg-transparent">
                        <FiArrowDownRight />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* ------------------------------------\\ Category Content Box \\------------------------------------ */}
                <div className="mt-5 p-6 border border-card rounded-md bg-card w-full">
                  <p className=" uppercase font-semibold text-foreground mb-2">
                    Categories
                  </p>

                  <div className="flex flex-wrap items-center">
                    {findGame?.categories?.map(
                      (category: string, idx: number) => (
                        <div key={idx} className="flex items-center">
                          <span className=" text-foreground font-medium">
                            {category}
                          </span>
                          {idx < findGame.categories.length - 1 && (
                            <span className="mx-2 text-foreground text-lg">
                              •
                            </span>
                          )}
                        </div>
                      )
                    )}
                  </div>

                  <div>
                    <p className="mt-8 uppercase font-semibold mb-3 text-foreground">
                      Platform:
                    </p>

                    <div className="flex gap-4 items-center">
                      {findGame?.platform?.map(
                        (platformName: string, index: number) => {
                          const icon = platformIconMap[platformName];
                          return (
                            icon && (
                              <Image
                                key={index}
                                src={icon}
                                alt={platformName}
                                width={20}
                                height={20}
                                className="object-contain"
                              />
                            )
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>

                {/* -------------------------\\ Social Links \\--------------------- */}

                {findGame?.socialLinks.length !== 0 && (
                  <div>
                    <p className="mt-6 uppercase font-semibold text-foreground">
                      Links
                    </p>
                    <div className="mt-2 space-y-2">
                      {findGame?.socialLinks?.map((link, idx: number) => {
                        const icon = socialIconMap[link.name];
                        if (!icon) return null;

                        return (
                          <div
                            key={idx}
                            className="flex items-center justify-between rounded-md bg-[#111111]"
                          >
                            <div className="flex">
                              <div className="flex items-center gap-2">
                                <div className="text-xl text-[#000000] p-3 bg-foreground/60 rounded-l-md">
                                  <Image
                                    src={icon}
                                    alt={link.name}
                                    width={20}
                                    height={20}
                                  />
                                </div>
                                <p className="text-sm font-semibold text-foreground">
                                  {link.name}
                                </p>
                              </div>
                            </div>
                            <div className="px-3">
                              <a
                                target="_blank"
                                rel="nofollow"
                                href={link.link}
                              >
                                <FaExternalLinkAlt
                                  size={16}
                                  className="text-primary/60"
                                />
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ------------------------------------\\ Related Games \\------------------------------------ */}
          <div className=" mt-20 w-full">
            <RelatedGames gamesData={gamesData?.data?.allGames} />
          </div>
        </PTContainer>
      </div>
    </>
  );
};

export default GameDetailsPage;

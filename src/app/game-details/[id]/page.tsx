import { FaExternalLinkAlt } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
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
import android from "../../../assets/icons/android.png";
import apple from "../../../assets/icons/apple.png";
import windows from "../../../assets/icons/windows.png";
import linux from "../../../assets/icons/linux.png";

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

  const platformIconMap: { [key: string]: StaticImageData } = {
    PC: windows,
    Android: android,
    Linux: linux,
    Mac: apple,
  };

  return (
    <>
      <div className=" mt-16 lg:mt-0">
        <Image
          className="object-cover"
          src={findGame?.thumbnail}
          alt="Thumbnail"
          width={1000}
          height={1000}
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

            {/* ------------------------------------\\ Grid Content Layout \\------------------------------------ */}
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
                  <UserActivities session={session} />
                </div>
              </div>

              {/* ------------------------------------\\ Right Side Content \\------------------------------------ */}
              <div className="col-span-2">
                <div className=" p-5 border border-card rounded-xl">
                  <div className=" text-primary flex items-center gap-3">
                    <p className=" uppercase text-sm text-primary">
                      Game Posted By
                    </p>
                    <p className=" font-bold -mt-0.5">
                      {findGame?.userId?.name}
                    </p>
                  </div>
                  <div className="mt-8 space-y-8">
                    <div className=" flex items-center justify-between">
                      <div>
                        <p className=" uppercase text-sm text-primary">Price</p>
                        <h3 className=" font-medium text-xl uppercase text-secondary">
                          ${findGame?.price}
                        </h3>
                      </div>
                      <div>
                        <Button className="flex items-center gap-1 bg-secondary hover:bg-green-700 hover:cursor-pointer text-primary rounded-full">
                          Buy Now <FiArrowUpRight />
                        </Button>
                      </div>
                    </div>

                    {/* ----------- Up & Down Vot button -------------- */}
                    <div className="flex items-center justify-center bg-[#124116] hover:bg-green-900 text-primary rounded-full py-2 w-4/12">
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
                <div className="mt-5 p-3 border border-card rounded-md bg-card">
                  <p className=" uppercase font-semibold text-foreground">
                    Categories
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    {findGame?.categories?.map(
                      (category: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2">
                          <p className="text-sm text-foreground font-medium">
                            "{category}",
                          </p>
                        </div>
                      )
                    )}
                  </div>

                  <div>
                    <p className="mt-6 uppercase font-semibold text-foreground">
                      Platform:
                    </p>

                    <div className="mt-1 flex gap-2 items-center">
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

                {/* ------------------------------------\\ Social Links \\------------------------------------ */}
                <div>
                  <p className="mt-6 uppercase font-semibold text-foreground">
                    Links
                  </p>
                  <div className="mt-2 space-y-2">
                    {findGame?.socialLinks.map((link, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between rounded-md bg-[#111111]"
                      >
                        <div className=" flex">
                          <div className=" flex items-center gap-2">
                            {/* <div className="text-xl text-[#000000] p-3 bg-foreground/60 rounded-l-md">
                              {link.icon}
                            </div> */}
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
                              className=" text-primary/80"
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
          <div className=" mt-20 w-full lg:w-11/12 mx-auto">
            <RelatedGames />
          </div>
        </PTContainer>
      </div>
    </>
  );
};

export default GameDetailsPage;

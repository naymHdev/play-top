"use client";

import PTContainer from "@/components/ui/PTContainer";
import PTSectionName from "@/components/ui/PTSectionName";
import { TUpcomingGames } from "@/types/upcomingRelease";
import sectionBg from "../../../assets/images/upcoming-bg.png";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import ucBG from "../../../assets/images/ucb.png";
import ucGame from "../../../assets/images/ucg1.png";

const upcomingGames: TUpcomingGames[] = [
  {
    _id: "01",
    title: "The Talos Principle: Reawakened",
    uc_bg: ucBG,
    uc_game_image: ucGame,
    price: 8.99,
  },
];

// To repeat the same data 5 times (for example)
const upcomingGamesData = Array.from({ length: 10 }, (_, index) => ({
  ...upcomingGames[0],
  _id: `${index + 1}`,
}));

const UpcomingRelease = () => {
  return (
    <>
      <div className="relative mt-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={sectionBg}
            alt="Section Bg"
            layout="fill"
            objectFit="cover"
            className="opacity-60"
          />
        </div>

        <PTContainer>
          {/* Content Section */}
          <div className="relative z-10 mt-20">
            <PTSectionName title="Upcoming Games" />
          </div>

          {/* --------------------- Carousel Section --------------------- */}
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {upcomingGamesData?.map((ucr, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/1 md:basis-1/3 lg:basis-1/5"
                >
                  <div className="p-1">
                    <Card className=" border-none bg-transparent shadow-none">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center justify-center">
                          <Image
                            src={ucr.uc_bg}
                            alt="The Talos Principle: Reawakened"
                            className="rounded-lg"
                          />
                          <Image
                            src={ucr.uc_game_image}
                            alt="The Talos Principle: Reawakened"
                            className="rounded-lg -mt-16"
                          />
                          <div className=" text-center mt-6">
                            <h2 className=" text-primary font-semibold text-lg leading-6">
                              {ucr.title}
                            </h2>
                            <p className=" text-secondary font-semibold text-xl mt-2">
                              ${ucr.price}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className=" mt-20" />
            <CarouselNext className=" mt-20" />
          </Carousel>
        </PTContainer>
      </div>
    </>
  );
};

export default UpcomingRelease;

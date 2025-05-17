"use client";

import PTContainer from "@/components/ui/PTContainer";
import PTSectionName from "@/components/ui/PTSectionName";
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
import { TGame } from "@/types/games";

const UpcomingRelease = ({ upcomingGames }: { upcomingGames: TGame[] }) => {
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
              {upcomingGames?.map((ucr, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/1 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="p-1">
                    <Card className=" border-none bg-transparent shadow-none">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center justify-center">
                          <Image
                            src={ucBG}
                            alt="The Talos Principle: Reawakened"
                            className="rounded-lg"
                          />
                          <Image
                            src={ucr?.image[1]}
                            alt="The Talos Principle: Reawakened"
                            width={200}
                            height={100}
                            className="rounded-lg -mt-16"
                          />
                          <div className=" text-center mt-6">
                            <h2 className=" text-primary font-semibold text-lg leading-6">
                              {ucr?.title}
                            </h2>
                            <p className=" text-secondary font-semibold text-xl mt-2">
                              ${ucr?.price}
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

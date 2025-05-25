"use client";

import PTContainer from "@/components/ui/PTContainer";
import PTSectionName from "@/components/ui/PTSectionName";
import sectionBg from "../../../assets/images/up-sec-vector.png";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { TGame } from "@/types/games";

const backgroundColors = [
  "bg-blue-800",
  "bg-yellow-800",
  "bg-red-800",
  "bg-rose-800",
  "bg-sky-900",
];

const UpcomingRelease = ({ upcomingGames }: { upcomingGames: TGame[] }) => {
  return (
    <>
      <section className=" mt-10">
        <div>
          <Image
            src={sectionBg}
            alt="Section Background"
            className="object-center object-cover"
            priority
          />
        </div>
      </section>

      <div className="relative bg-[#171717]">
        <PTContainer>
          <div>
            <PTSectionName title="Upcoming Games" />
          </div>

          {/* Carousel Section */}
          <div className="relative z-10">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full overflow-visible"
              aria-label="Upcoming games carousel"
            >
              <CarouselContent className="flex gap-6">
                {upcomingGames?.map((ucr, index) => {
                  const bgColor =
                    backgroundColors[index % backgroundColors.length];
                  return (
                    <CarouselItem
                      key={ucr.id ?? index}
                      className="relative flex-shrink-0 basis-full md:basis-1/2 lg:basis-1/6"
                      role="group"
                      aria-roledescription="slide"
                      aria-label={ucr.title}
                    >
                      {/* Colored block behind image */}
                      <div
                        className={`absolute top-6 left-1/2 -translate-x-1/2 h-40 w-44 rounded-md opacity-70 -z-10`}
                      />

                      <div className="p-1">
                        <Card className="border-none bg-transparent shadow-none">
                          <CardContent className="p-6 flex flex-col items-center">
                            <div
                              className={`${bgColor} h-[130px] w-[250px] rounded-lg`}
                            ></div>
                            {ucr.image && ucr.image.length > 1 ? (
                              <Image
                                src={ucr.image[1]}
                                alt={ucr.title as string}
                                width={200}
                                height={100}
                                className="rounded-lg -mt-[90px] shadow-lg"
                              />
                            ) : (
                              <div className="w-[200px] h-[100px] bg-gray-300 rounded-lg -mt-[80px]" />
                            )}
                            <div className="text-center mt-6">
                              <h2 className="text-primary font-semibold text-lg leading-6">
                                {ucr.title}
                              </h2>
                              <p className="text-secondary font-semibold text-xl mt-2">
                                ${ucr.price}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>

              <CarouselPrevious
                className="absolute top-1/2 -left-10 -translate-y-1/2 rounded-full border border-white p-3 hover:bg-white hover:text-black transition z-20"
                aria-label="Previous slide"
              >
                ←
              </CarouselPrevious>

              <CarouselNext
                className="absolute top-1/2 -right-10 -translate-y-1/2 rounded-full border border-white p-3 hover:bg-white hover:text-black transition z-20"
                aria-label="Next slide"
              >
                →
              </CarouselNext>
            </Carousel>
          </div>
        </PTContainer>
      </div>
    </>
  );
};

export default UpcomingRelease;

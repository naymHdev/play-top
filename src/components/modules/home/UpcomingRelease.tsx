import PTContainer from "@/components/ui/PTContainer";
import PTSectionName from "@/components/ui/PTSectionName";
import theTalos from "../../../assets/images/game-release.png";
import { TUpcomingGames } from "@/types/upcomingRelease";
import PTUpcommingGameCard from "@/components/ui/PTUpcommingGameCard";
import sectionBg from "../../../assets/images/upcoming-bg.png";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import PTButton from "@/components/ui/PTButton";

const upcomingGames: TUpcomingGames[] = [
  {
    _id: "01",
    title: "The Talos Principle: Reawakened",
    image: theTalos,
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
            <PTSectionName
              title="Upcoming Release"
              description="Donec ac posuere tellus. Nunc sem ipsum, cursus quis erat feugiat, cursus dictum enim."
            />

            <div className="mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {upcomingGamesData.map((upcomming) => (
                  <PTUpcommingGameCard
                    key={upcomming._id}
                    upcomming={upcomming}
                  />
                ))}
              </div>
            </div>
            <div className=" flex items-center justify-center ">
              <PTButton
                className=" px-[70px] py-[12px] bg-secondary"
                label="See All Games "
                icon={<MdArrowForwardIos className=" size-4 mt-1" />}
              />
            </div>
          </div>
        </PTContainer>
      </div>
    </>
  );
};

export default UpcomingRelease;

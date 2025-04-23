import { TUpcomingGames } from "@/types/upcomingRelease";
import Image from "next/image";
import Link from "next/link";

const PTUpcommingGameCard = ({ upcomming }: { upcomming: TUpcomingGames }) => {
  return (
    <>
      <Link href={`/${upcomming._id}`}>
        <div className="hover:scale-105 transition-all duration-300 hover:bg-[#0F2611] p-6 rounded-2xl flex flex-col items-center">
          {/* Image */}
          <div className="w-full flex justify-center">
            <Image
              src={upcomming.image}
              alt={upcomming.title}
              width={450}
              height={450}
              className="object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="text-center mt-4">
            <h3 className="text-primary font-semibold text-lg">
              {upcomming.title}
            </h3>
            <p className="text-secondary font-semibold text-xl mt-2">
              ${upcomming.price}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PTUpcommingGameCard;

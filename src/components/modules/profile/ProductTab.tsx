import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { repeatedGamesData } from "../home/DailyTopGames";
import MyGameCard from "./MyGameCard";

const GamesTabs = () => {
  return (
    <div className="mt-12">
      <Tabs defaultValue="submitted" className="  mx-auto">
        <TabsList className=" flex items-center justify-start">
          <TabsTrigger className=" border-b-3" value="submitted">
            Games Submitted
          </TabsTrigger>
          <TabsTrigger value="upvoted">Games Upvoted</TabsTrigger>
        </TabsList>
        <div className=" border-b-3 border-card w-[99%] mx-auto -mt-[14px] -z-10 rounded-full"></div>
        <TabsContent value="submitted">
          {/* Content for Games Submitted */}
          <div className="">
            {repeatedGamesData?.map((game) => (
              <MyGameCard key={game._id} games={game} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="upvoted">
          {/* Content for Games Upvoted */}
          <div className="p-4">
            <p className="text-gray-700 dark:text-gray-300">
              Here you'll find the games you've upvoted. This section allows you
              to easily access and revisit games you've supported.
            </p>
            {/* Add a list or grid of upvoted games here */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GamesTabs;

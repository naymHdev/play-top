import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import MyGameCard from "./MyGameCard";
import { TGame } from "@/types/games";
import { ThumbsUp } from "lucide-react";

const GamesTabs = ({ myGames }: { myGames: TGame[] }) => {
  // console.log("myGames", myGames);

  const upvote = myGames?.filter(
    (game: TGame) => (game?.totalUpvote as number) > 0
  );
  // console.log("upvote", upvote);

  return (
    <div className="mt-12">
      <Tabs defaultValue="submitted" className="  mx-auto">
        <TabsList className=" flex items-center justify-start">
          <TabsTrigger className=" border-b-3" value="submitted">
            Games Submitted ({myGames?.length})
          </TabsTrigger>
          <TabsTrigger value="upvoted">
            Games Upvoted ({upvote?.length})
          </TabsTrigger>
        </TabsList>
        <div className=" border-b-3 border-card w-[99%] mx-auto -mt-[14px] -z-10 rounded-full"></div>
        <TabsContent value="submitted">
          {/* Content for Games Submitted */}

          {myGames && myGames.length > 0 ? (
            <div className="">
              {myGames?.map((game, idx: number) => (
                <MyGameCard key={`${idx + 1}`} games={game} />
              ))}
            </div>
          ) : (
            <>
              <div className="text-center py-12">
                <ThumbsUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-muted-foreground mb-2">
                  No upvoted games
                </h3>
                <p className="text-sm text-muted-foreground">
                  Click the button above to see some upvoted games!
                </p>
              </div>
            </>
          )}
        </TabsContent>
        <TabsContent value="upvoted">
          {/* Content for Games Upvoted */}
          {upvote && upvote.length > 0 ? (
            <>
              <div className="">
                {upvote?.map((game, idx: number) => (
                  <MyGameCard key={`${idx + 1}`} games={game} />
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="text-center py-12">
                <ThumbsUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-muted-foreground mb-2">
                  No upvoted games
                </h3>
                <p className="text-sm text-muted-foreground">
                  Click the button above to see some upvoted games!
                </p>
              </div>
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GamesTabs;

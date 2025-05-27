import { TGame } from "@/types/games";
import LatestBlogs from "./LatestBlogs";

type DailyTopGamesProps = {
  blogs: TGame[];
};
const Section4 = async ({ blogs }: DailyTopGamesProps) => {
  const AllBlogs = await blogs;

//   console.log("blogs", AllBlogs?.data?.allBlogs);

  return (
    <>
      <div>
        <LatestBlogs blogs={AllBlogs?.data?.allBlogs} />
      </div>
    </>
  );
};

export default Section4;

import PTContainer from "@/components/ui/PTContainer";
import { getAllBlogs } from "@/services/blogs";
import { TBlogs } from "@/types/blog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleUserRound } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Newsletter from "@/components/Newsletter";
import BlogDetails from "@/components/modules/blogs/BlogDetails";
import BlogTable from "@/components/modules/blogs/BlogTable";
import LatestBlogs from "@/components/modules/home/LatestBlogs";
import parse from "html-react-parser";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data: blogs } = await getAllBlogs(1);
  // console.log("blogs", blogs?.allBlogs);

  const blogDetails = blogs?.allBlogs?.find((blog: TBlogs) => blog.id === id);
  const { author, title, description, blogImage, createdAt, altTag, rewards } =
    blogDetails || {};
  console.log("blogDetails", blogDetails);

  const formattedDate = moment(createdAt).format("MMMM Do, YYYY");

  return (
    <>
      <div
        style={{
          background: "linear-gradient(180deg, #171717 0%, #000000 100%)",
        }}
      >
        <PTContainer>
          <div className="my-14">
            {/* ------------- Blog Header Details ------------- */}
            <div className="mt-20 lg:mt-0">
              <h1 className=" text-3xl md:text-5xl font-bold leading-8 md:leading-14 text-white">
                {title}
              </h1>
              <div className="mt-6 flex items-center gap-2">
                <div>
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>
                      <CircleUserRound />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <h3 className=" text-white font-semibold text-[16px] leading-normal">
                    {author}
                  </h3>
                  <p className=" font-medium text-sm leading-5 text-white mt-1">
                    {formattedDate}
                  </p>
                </div>
              </div>
              <p className=" text-white text-lg lg:text-[22px] font-normal leading-normal lg:leading-8 mt-4 lg:mt-8">
                {title}
              </p>
              {/* Description (HTML parsed) */}
              {/* <article className="prose prose-invert max-w-none mb-10">
                {description ? (
                  parse(description)
                ) : (
                  <p>No description available.</p>
                )}
              </article> */}
            </div>

            {/* ------------- Blog Layout Details ------------- */}
            <div className="border-t border-b border-card mt-10 grid grid-cols-7">
              {/* ------------- Blog Details ------------- */}
              <div className=" col-span-full lg:col-span-5 border-r border-card pt-2 lg:pt-6 px-2 lg:px-10">
                <div className=" w-full h-fit">
                  <Image
                    src={blogImage}
                    alt={altTag}
                    width={1000}
                    height={800}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </div>

                <div className="mt-6">
                  {/* Description (HTML parsed) */}
                  <article className="prose prose-invert text-white max-w-none mb-10">
                    {description ? (
                      parse(description)
                    ) : (
                      <p>No description available.</p>
                    )}
                  </article>
                </div>
                {rewards?.length > 0 && <BlogTable rewards={rewards} />}
                <BlogDetails />
              </div>

              {/* ------------- Newsletter Details ------------- */}
              <div className=" col-span-full lg:col-span-2 border-l border-card pt-2 lg:pt-6 px-2 lg:px-10">
                <Newsletter />
              </div>
            </div>
          </div>
        </PTContainer>
        {/* ------------- All Blogs Section ------------- */}
        <div className=" mb-10">
          <LatestBlogs blogs={blogs?.allBlogs} />
        </div>
      </div>
    </>
  );
};

export default BlogDetailsPage;

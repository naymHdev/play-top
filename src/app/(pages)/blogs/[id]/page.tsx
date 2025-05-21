import PTContainer from "@/components/ui/PTContainer";
import { getAllBlogs } from "@/services/blogs";
import { TBlogs } from "@/types/blog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleUserRound } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Newsletter from "@/components/Newsletter";
import BlogDetails from "@/components/modules/blogs/BlogDetails";
import PTBlogCard from "@/components/ui/core/PTBlogCard";
import PTSectionName from "@/components/ui/PTSectionName";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const { data: blogs } = await getAllBlogs(1);
  // console.log("blogs", blogs?.allBlogs);

  const blogDetails = blogs?.allBlogs?.find((blog: TBlogs) => blog.id === id);
  //   console.log("blogDetails", blogDetails);
  const { author, title, description, blogImage, createdAt, blogId } =
    blogDetails || {};
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
            <div className="">
              <h1 className=" text-5xl font-bold leading-14 text-white">
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
              <p className=" text-white text-[22px] font-normal leading-8 mt-8">
                {description}
              </p>
            </div>

            {/* ------------- Blog Layout Details ------------- */}
            <div className="border-t border-b border-card mt-10 grid grid-cols-7">
              {/* ------------- Blog Details ------------- */}
              <div className=" col-span-full lg:col-span-5 border-r border-card pt-6 px-10">
                <div className=" w-full h-fit">
                  <Image
                    src={blogImage}
                    alt={title}
                    width={1000}
                    height={800}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </div>

                <div className="">
                  <p className=" text-white text-xl font-normal leading-8 mt-8">
                    {description}
                  </p>
                </div>
                <BlogDetails />
              </div>

              {/* ------------- Newsletter Details ------------- */}
              <div className=" col-span-full lg:col-span-2 border-l border-card pt-6 px-10">
                <Newsletter />
              </div>
            </div>

            {/* ------------- All Blogs Section ------------- */}
            <div className="mt-20">
              <PTSectionName
                title="All Blogs"
                description="Explore the latest articles, tips, and insights from our blog."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
              {blogs?.allBlogs
                ?.slice()
                .reverse()
                .map((blog: TBlogs) => (
                  <PTBlogCard key={blog.id} blog={blog} />
                ))}
            </div>
          </div>
        </PTContainer>
      </div>
    </>
  );
};

export default BlogDetailsPage;

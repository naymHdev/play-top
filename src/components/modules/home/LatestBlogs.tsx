"use client";

import PTBlogCard from "@/components/ui/core/PTBlogCard";
import PTButton from "@/components/ui/PTButton";
import PTContainer from "@/components/ui/PTContainer";
import PTSectionName from "@/components/ui/PTSectionName";
import { TBlogs } from "@/types/blog";
import { FaArrowRight } from "react-icons/fa6";

const LatestBlogs = ({ blogs }: { blogs: TBlogs[] }) => {
  //   console.log("blogs", blogs);

  return (
    <>
      <PTContainer>
        <div className=" relative mt-24">
          <div className="  flex flex-col items-center justify-center mb-10">
            <PTSectionName title="Latest Blogs & Articles" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {blogs?.splice(1, 3).map((blog: TBlogs) => (
              <PTBlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <div className="flex items-end justify-end mt-10">
            <PTButton
              className="py-2 px-5 bg-card rounded-sm"
              label={"Show More"}
              icon={<FaArrowRight />}
            />
          </div>
        </div>
      </PTContainer>
    </>
  );
};

export default LatestBlogs;

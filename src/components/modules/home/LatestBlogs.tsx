"use client";

import PTBlogCard from "@/components/ui/core/PTBlogCard";
import PTButton from "@/components/ui/PTButton";
import PTContainer from "@/components/ui/PTContainer";
import PTSectionName from "@/components/ui/PTSectionName";
import { TBlogs } from "@/types/blog";
import { useState } from "react";
import { FaArrowRight, FaArrowUp } from "react-icons/fa6";

const INITIAL_COUNT = 3;
const LOAD_MORE_COUNT = 3;

const LatestBlogs = ({ blogs }: { blogs: TBlogs[] }) => {
  // Reverse first, then slice
  const reversedBlogs = [...blogs].reverse();
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const isShowingAll = visibleCount >= blogs.length;

  const visibleBlogs = reversedBlogs.slice(0, visibleCount);

  const handleToggle = () => {
    setVisibleCount((prev) =>
      isShowingAll
        ? INITIAL_COUNT
        : Math.min(prev + LOAD_MORE_COUNT, blogs.length)
    );
  };

  const shouldShowButton = blogs.length > INITIAL_COUNT;

  return (
    <PTContainer>
      <section className="mt-24 relative">
        <div className="flex flex-col items-center mb-10">
          <PTSectionName title="Latest Blogs & Articles" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleBlogs.slice(0, visibleCount).map((blog) => (
            <PTBlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {shouldShowButton && (
          <div className="flex justify-end mt-10">
            <PTButton
              onClick={handleToggle}
              className="py-2 px-6 bg-card rounded-md transition hover:bg-gray-700"
              label={isShowingAll ? "Show Less" : "Show More"}
              icon={isShowingAll ? <FaArrowUp /> : <FaArrowRight />}
              aria-label={isShowingAll ? "Show fewer blogs" : "Show more blogs"}
            />
          </div>
        )}
      </section>
    </PTContainer>
  );
};

export default LatestBlogs;

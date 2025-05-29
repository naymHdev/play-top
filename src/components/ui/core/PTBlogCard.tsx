"use client";

import { TBlogs } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const PTBlogCard = ({ blog }: { blog: TBlogs }) => {
  // console.log("blog", blog);
  const dateString = new Date(blog.createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Link href={`/blogs/${blog?._id}`}>
        <div className="flex flex-col overflow-hidden w-full">
          <div className="rounded-lg w-full">
            <Image
              src={blog.blogImage}
              alt="Blog Title"
              width={400}
              height={200}
              className="rounded-lg object-center w-full"
            />
          </div>

          {/* Content */}
          <div className="mt-8 flex flex-col flex-grow">
            <h3 className="text-white font-semibold text-lg mb-2 line-clamp-1">
              {blog.title}
            </h3>
            <p className="text-gray-400 text-sm">{dateString}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PTBlogCard;

"use server";

export const getAllBlogs = async (page: number) => {
  try {
    const res = await fetch(
      `https://gaming-showcase-backend.onrender.com/api/v1/blog/getAllBlog?page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          tags: ["Blogs"],
        },
        cache: "no-store",
      }
    );

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error("getAllBlogs Error:", error);
    return {
      success: false,
      message: "Internal server error",
      error: error?.message || error,
    };
  }
};

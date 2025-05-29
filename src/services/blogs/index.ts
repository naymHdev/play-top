"use server";

export const getAllBlogs = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blog/getAllBlog`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 300,
        },
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

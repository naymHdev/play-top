"use server";

import { CommentActionProps } from "@/types/comment";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// ------------ post comments --------------
export const comments = async (commentsData: any) => {
  const token = (await cookies()).get("accessToken")?.value || "";
  // console.log("token", token);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/game/comment`, {
      method: "POST",
      body: JSON.stringify(commentsData),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    revalidateTag("COMMENT");
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const upvoteComment = async (upvoted: CommentActionProps) => {
  const token = (await cookies()).get("accessToken")?.value || "";
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/game/upvote-comment`,
      {
        method: "POST",
        body: JSON.stringify(upvoted),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    revalidateTag("COMMENT");
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

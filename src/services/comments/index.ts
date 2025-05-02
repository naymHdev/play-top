"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// ------------ post comments --------------
export const comments = async (commentsData: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/game/comment`, {
      method: "POST",
      body: JSON.stringify(commentsData),
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value || "",
        "Content-Type": "application/json",
      },
    });
    revalidateTag("COMMENT");
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

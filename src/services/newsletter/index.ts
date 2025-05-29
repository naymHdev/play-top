"use server";

import { cookies } from "next/headers";

type NewsletterFormData = {
  data: { email: string };
};

export const postNewsLetter = async (userEmail: NewsletterFormData) => {
  const token = (await cookies()).get("accessToken")?.value || "";
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/newsletter/add-mail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userEmail),
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return { error: error.message || "Something went wrong." };
  }
};

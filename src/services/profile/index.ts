"use server";

import { cookies } from "next/headers";

export const updateProfile = async (profileData: FormData) => {
  const token = (await cookies()).get("accessToken")?.value || "";
  console.log("token", token);
  try {
    const res = await fetch(
      `https://gaming-showcase-backend.onrender.com/api/v1/user/update_profile`,
      {
        method: "PATCH",
        body: profileData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error("Update Profile Error:", error);
    return {
      success: false,
      message: "Internal server error",
      error: error?.message || error,
    };
  }
};

export const deleteMyGame = async (gameId: string) => {
  const token = (await cookies()).get("accessToken")?.value || "";
  console.log("token", token);
  try {
    const res = await fetch(
      `https://gaming-showcase-backend.onrender.com/api/v1/user/delete_game/${gameId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error("Delete Game Error:", error);
    return {
      success: false,
      message: "Internal server error",
      error: error?.message || error,
    };
  }
};

"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const updateProfile = async (profileData: FormData) => {
  const token = (await cookies()).get("accessToken")?.value || "";
  console.log("token", token);
  try {
    const res = await fetch(`${process.env.BASE_URL}/user/update_profile`, {
      method: "PATCH",
      body: profileData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const data = await res.json();
    revalidateTag("PROFILE");
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

export const deleteMyGame = async (deleteData: {
  data: { gameId: string | undefined };
}) => {
  // console.log("deleteData", deleteData);

  const token = (await cookies()).get("accessToken")?.value || "";
  // console.log("token", token);
  try {
    const res = await fetch(`${process.env.BASE_URL}/user/delete-game`, {
      method: "DELETE",
      body: JSON.stringify(deleteData),
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    revalidateTag("GAME");
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

export const updateMyGame = async (updateGame: FormData) => {
  const token = (await cookies()).get("accessToken")?.value || "";
  // console.log("token", token);
  try {
    const res = await fetch(`${process.env.BASE_URL}/game/update_game`, {
      method: "PATCH",
      body: updateGame,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    revalidateTag("GAME");
    return data;
  } catch (error: any) {
    console.error("Update Game Error:", error);
    return {
      success: false,
      message: "Internal server error",
      error: error?.message || error,
    };
  }
};

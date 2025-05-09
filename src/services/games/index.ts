"use server";

import { cookies } from "next/headers";

// ------------ all games --------------
export const allGames = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/game/getAllGame`,
      {
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value || "",
          "Content-Type": "application/json",
        },
        next: {
          tags: ["GAME"],
        },
        cache: "no-store",
      }
    );
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// ------------ top game of the day --------------
export const topGamesDay = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/game/top-game/day`,
      {
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value || "",
          "Content-Type": "application/json",
        },
        next: {
          tags: ["GAME"],
        },
        cache: "no-store",
      }
    );
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

//------------ top game of the week --------------
export const topGamesWeek = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/game/top-game/week`,
      {
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value || "",
          "Content-Type": "application/json",
        },
        next: {
          tags: ["GAME"],
        },
        cache: "no-store",
      }
    );
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

// ------------ add game --------------
export const addGame = async (data: FormData) => {
  const token = (await cookies()).get("accessToken")?.value || "";
  // console.log("token", token);

  try {
    const res = await fetch(
      `https://gaming-showcase-backend.onrender.com/api/v1/game/upload_game`,
      {
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
        revalidateTag("GAME");
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// ------------ all games --------------
export const allGames = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/game/getAllGame`,
      {
        method: "GET",
        headers: {
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

export const gameSearch = async (query?: {
  [key: string]: string | string[] | undefined;
}) => {
  const params = new URLSearchParams();

  if (query?.searchTerm) {
    params.append("searchTerm", query?.searchTerm.toString());
  }
  try {
    const res = await fetch(
      `https://gaming-showcase-backend.onrender.com/api/v1/game/search-game?${params.toString()}`,
      {
        next: {
          tags: ["GAME"],
        },
      }
    );
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const upvoteGame = async (gameId: string) => {
  const token = (await cookies()).get("accessToken")?.value || "";
  // console.log("token", gameId);
  try {
    const res = await fetch(
      `https://gaming-showcase-backend.onrender.com/api/v1/game/upvote-game`,
      {
        body: JSON.stringify(gameId),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    revalidateTag("GAME");
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

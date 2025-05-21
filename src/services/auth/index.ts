"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { TUpdatePassword } from "@/types/auth";
import { AuthPayload } from "@/types/user";

export const socialRegister = async (payload: AuthPayload) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    revalidateTag("USER");
    const result = await res.json();
    // console.log("result socialRegister", result);
    if (result.success) {
      (await cookies()).set("accessToken", result.data.accessToken);
      (await cookies()).set("refreshToken", result.data.accessToken);
    }
    return result;
  } catch (error: any) {
    console.log("error", error);
  }
};

export const signUp = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    revalidateTag("USER");
    const result = await res.json();

    if (result.success) {
      (await cookies()).set("accessToken", result.data.accessToken);
      (await cookies()).set("refreshToken", result.data.refreshToken);
    }

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const signInUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await res.json();

    if (result.success) {
      (await cookies()).set("accessToken", result.data.accessToken);
      (await cookies()).set("refreshToken", result.data.refreshToken);
    }

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const myProfile = async () => {
  try {
    const res = await fetch(
      `https://gaming-showcase-backend.onrender.com/api/v1/user/user-profile`,
      {
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value || "",
        },
      }
    );
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  let decodedData = null;

  if (accessToken) {
    decodedData = await jwtDecode(accessToken);
    return decodedData;
  } else {
    return null;
  }
};

export const logout = async () => {
  (await cookies()).delete("accessToken");
};

// -------- All User --------
export const allUser = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/find_all_users`,
      {
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value || "",
        },
      }
    );
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// ---------- update user profile ----------
export const updateUserProfile = async (
  profileData: FormData,
  userId: string
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/update_profile/${userId}`,
      {
        method: "PATCH",
        body: profileData,
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value || "",
        },
      }
    );
    revalidateTag("USER");
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const updatePassword = async (updateData: TUpdatePassword) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/update-password`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value || "",
        },
        body: JSON.stringify(updateData),
      }
    );

    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

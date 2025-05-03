"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

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
export const updateUserProfile = async (profileData: FormData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/update_profile`,
      {
        method: "PATCH",
        body: profileData,
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value || "",
        },
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to update profile");
    }
    revalidateTag("USER");
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const updatePassword = async (updateData: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/update-password`,
      {
        method: "PATCH",
        body: JSON.stringify(updateData),
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

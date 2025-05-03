"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChangeEvent, useRef, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PTButton from "@/components/ui/PTButton";
import { FaCamera } from "react-icons/fa6";
import PasswordChange from "./PasswordChange";
import DeleteAccount from "./DeleteAccount";
import Link from "next/link";
import { updateUserProfile } from "@/services/auth";
import { profileUpdateSchema } from "@/types/user";
import { useUser } from "@/contexts/UserContext";

type ProfileUpdateFormData = z.infer<typeof profileUpdateSchema>;

const ProfileUpdateForm = ({ userInfo }: { userInfo: any }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // -------- get current user -------- //
  const { user } = useUser();
  const currentUser = userInfo.find((itm: any) => itm.id === user?.id);
  // console.log("currentUser", currentUser);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleOverlayClick = () => {
    fileInputRef.current?.click();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileUpdateFormData>({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: {
      name: currentUser?.name,
      userId: currentUser?.userId,
      bio: `Competitive gamer. Strategy is my weapon, precision is my game. From FPS to open-world, I conquer pixels like a warzone. 🎯
💻 PC Master Race | 🎧 Always online | 🏆 Grinding for greatness Born to frag, built to win. I don’t play games — I dominate them. 🕹️
Apex in the lobby. Legend in the making. #NoMercy`,
      steamAccount: "Stream profile link",
      xAccount: "X profile link",
      linkedinAccount: "Linkedin profile link",
      redditAccount: "Reddit profile link",
      instagramAccount: "Instagram profile link",
    },
  });

  const onSubmit = async (data: ProfileUpdateFormData) => {
    const formData = new FormData();

    formData.append("name", data?.name || "");
    formData.append("userId", data.userId || "");
    formData.append("bio", data.bio || "");
    formData.append("steamAccount", data.steamAccount || "");
    formData.append("xAccount", data.xAccount || "");
    formData.append("linkedinAccount", data.linkedinAccount || "");
    formData.append("redditAccount", data.redditAccount || "");
    formData.append("instagramAccount", data.instagramAccount || "");

    if (fileInputRef.current?.files?.[0]) {
      formData.append("photo", fileInputRef.current.files[0]);
    }

    console.log("formData", formData);

    try {
      const res = await updateUserProfile(formData);
      console.log("Profile updated", res);
    } catch (error: any) {
      console.log("Profile update error:", error);
    }
  };

  return (
    <div className=" -mt-[190px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 max-w-3xl mx-auto mt-10"
      >
        <div className="flex items-center justify-center">
          <div className="relative flex items-center justify-center w-[200px] h-[200px]">
            {/* Profile Image */}
            <Avatar className="w-full h-full">
              <AvatarImage
                src={selectedImage || "https://github.com/shadcn.png"}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            {/* Hidden Input for Upload */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              className="hidden"
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center hover:cursor-pointer"
              onClick={handleOverlayClick}
            >
              <FaCamera className="text-white text-3xl" />
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="name">Name Title</Label>
          <Input
            className="mt-3 bg-card border-none py-6 px-4"
            type="text"
            id="name"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">This field is required</p>
          )}
        </div>

        <div>
          <Label htmlFor="userId">User Id</Label>
          <Input
            type="text"
            id="userId"
            {...register("userId")}
            className="text-gray-400 mt-3 bg-card border-none py-6 px-4"
          />
          {errors.userId && (
            <p className="text-red-500 text-xs mt-1">This field is required</p>
          )}
        </div>

        <div>
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            {...register("bio")}
            className=" mt-3 bg-card border-none py-6 px-4"
          />
          {errors.bio && (
            <p className="text-red-500 text-xs mt-1">This field is required</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="steamAccount">Steam account of the game</Label>
            <div className="relative">
              <div className="">
                <Input
                  type="text"
                  id="steamAccount"
                  {...register("steamAccount")}
                  className="px-2 mt-3 bg-[#111111] border-none py-6"
                />
              </div>
            </div>
            {errors.steamAccount && (
              <p className="text-red-500 text-xs mt-1">Invalid Steam account</p>
            )}
          </div>

          <div>
            <Label htmlFor="xAccount">X account of the game</Label>
            <div className="relative">
              <div className="">
                <Input
                  type="text"
                  id="xAccount"
                  {...register("xAccount")}
                  className="px-2 mt-3 bg-[#111111] border-none py-6"
                />
              </div>
            </div>
            {errors.xAccount && (
              <p className="text-red-500 text-xs mt-1">Invalid X account</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="linkedinAccount">
              LinkedIn account of the game
            </Label>
            <div className="relative">
              <div className="">
                <Input
                  type="text"
                  id="linkedinAccount"
                  {...register("linkedinAccount")}
                  className="px-2 mt-3 bg-[#111111] border-none py-6"
                />
              </div>
            </div>
            {errors.linkedinAccount && (
              <p className="text-red-500 text-xs mt-1">
                Invalid LinkedIn account
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="redditAccount">Reddit account of the game</Label>
            <div className="relative">
              <div className="">
                <Input
                  type="text"
                  id="redditAccount"
                  {...register("redditAccount")}
                  className="px-2 mt-3 bg-[#111111] border-none py-6"
                />
              </div>
            </div>
            {errors.redditAccount && (
              <p className="text-red-500 text-xs mt-1">
                Invalid Reddit account
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="instagramAccount">
              Instagram account of the game
            </Label>
            <div className="relative">
              <div className="">
                <Input
                  type="text"
                  id="instagramAccount"
                  {...register("instagramAccount")}
                  className="px-2 mt-3 bg-[#111111] border-none py-6"
                />
              </div>
            </div>
            {errors.instagramAccount && (
              <p className="text-red-500 text-xs mt-1">
                Invalid Instagram account
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Link href={"/profile"}>
            <PTButton
              className="border border-card rounded-full px-8 py-3"
              label="Cancel"
            />
          </Link>
          <PTButton
            type="submit"
            className=" border-none bg-secondary rounded-full px-8 py-3"
            label="Save Change"
          />
        </div>
      </form>
      <div className="flex items-center gap-4 justify-end max-w-3xl mx-auto mt-10">
        <PasswordChange />
        <DeleteAccount />
      </div>
    </div>
  );
};

export default ProfileUpdateForm;

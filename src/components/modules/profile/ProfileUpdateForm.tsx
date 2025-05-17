"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ChangeEvent, useEffect, useRef, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PTButton from "@/components/ui/PTButton";
import { FaCamera } from "react-icons/fa6";
import PasswordChange from "./PasswordChange";
import DeleteAccount from "./DeleteAccount";
import Link from "next/link";

interface LinkItem {
  name: string;
  link: string;
}

const ProfileUpdateForm = ({ userInfo }: { userInfo: any }) => {
  const [formData, setFormData] = useState({
    userId: "68251e4fe842d33780cd1a7f",
    name: "Xinagop5980 Updated",
    userName: "XinagopUpdated",
    bio: "This is my updated bio, telling a bit about me.",
    links: [
      { name: "GitHub", link: "https://github.com/Xinagop5980" },
      { name: "LinkedIn", link: "https://www.linkedin.com/in/xinagop5980" },
    ] as LinkItem[],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLinkChange = (
    index: number,
    field: keyof LinkItem,
    value: string
  ) => {
    const updatedLinks = [...formData.links];
    updatedLinks[index][field] = value;
    setFormData((prev) => ({ ...prev, links: updatedLinks }));
  };

  const handleAddLink = () => {
    setFormData((prev) => ({
      ...prev,
      links: [...prev.links, { name: "", link: "" }],
    }));
  };

  const handleRemoveLink = (index: number) => {
    const updatedLinks = formData.links.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, links: updatedLinks }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("✅ Final JSON Payload:", JSON.stringify(formData, null, 2));
    // Make API call here if needed
  };

  return (
    <div className=" -mt-[190px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 max-w-3xl mx-auto mt-10"
      >
        <div className="flex items-center justify-center">
          <div className="relative flex items-center justify-center w-[200px] h-[200px]">
            <Avatar className="w-full h-full">
              <AvatarImage
                src={selectedImage || "https://github.com/shadcn.png"}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              className="hidden"
            />
            <div
              className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center hover:cursor-pointer"
              onClick={handleOverlayClick}
            >
              <FaCamera className="text-white text-3xl" />
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="name">Name</Label>
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
            <Input
              type="text"
              id="steamAccount"
              {...register("steamAccount")}
              className="px-2 mt-3 bg-[#111111] border-none py-6"
            />
            {errors.steamAccount && (
              <p className="text-red-500 text-xs mt-1">Invalid Steam account</p>
            )}
          </div>

          <div>
            <Label htmlFor="xAccount">X account of the game</Label>
            <Input
              type="text"
              id="xAccount"
              {...register("xAccount")}
              className="px-2 mt-3 bg-[#111111] border-none py-6"
            />
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
            <Input
              type="text"
              id="linkedinAccount"
              {...register("linkedinAccount")}
              className="px-2 mt-3 bg-[#111111] border-none py-6"
            />
            {errors.linkedinAccount && (
              <p className="text-red-500 text-xs mt-1">
                Invalid LinkedIn account
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="redditAccount">Reddit account of the game</Label>
            <Input
              type="text"
              id="redditAccount"
              {...register("redditAccount")}
              className="px-2 mt-3 bg-[#111111] border-none py-6"
            />
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
            <Input
              type="text"
              id="instagramAccount"
              {...register("instagramAccount")}
              className="px-2 mt-3 bg-[#111111] border-none py-6"
            />
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

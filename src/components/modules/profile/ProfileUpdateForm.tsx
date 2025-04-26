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

const profileUpdateSchema = z.object({
  nameTitle: z.string().optional(),
  userId: z.string().optional(),
  bio: z.string().optional(),
  steamAccount: z.string().optional(),
  xAccount: z.string().optional(),
  linkedinAccount: z.string().optional(),
  redditAccount: z.string().optional(),
  instagramAccount: z.string().optional(),
});

type ProfileUpdateFormData = z.infer<typeof profileUpdateSchema>;

const ProfileUpdateForm = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileUpdateFormData>({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: {
      nameTitle: "Jackson Roy",
      userId: "@jacksonroy.gammer",
      bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum tellus, volutpat in eros ac, rhoncus vehicula nibh. Proin quis dui dui. Nullam laoreet facilisis tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam nibh sem, molestie non ex eu, consequat facilisis lacus. Ut sollicitudin dictum elit, ac hendrerit tortor aliquam sit amet. Suspendisse ultrices turpis vel ligula mollis pulvinar. Donec blandit eros nulla, quis lacinia lectus ullamcorper sit amet. In hac habitasse platea dictumst. Cras vel accumsan odio, ac elementum lectus. Curabitur libero augue, rhoncus ac elit vitae, feugiat suscipit erat. Sed dictum ipsum non felis cursus, quis mattis sapien congue.`,
      steamAccount: "@game",
      xAccount: "@game",
      linkedinAccount: "@game",
      redditAccount: "@game",
      instagramAccount: "@game",
    },
  });

  const [bioText, setBioText] = useState<string>(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum tellus, volutpat in eros ac, rhoncus vehicula nibh. Proin quis dui dui. Nullam laoreet facilisis tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam nibh sem, molestie non ex eu, consequat facilisis lacus. Ut sollicitudin dictum elit, ac hendrerit tortor aliquam sit amet. Suspendisse ultrices turpis vel ligula mollis pulvinar. Donec blandit eros nulla, quis lacinia lectus ullamcorper sit amet. In hac habitasse platea dictumst. Cras vel accumsan odio, ac elementum lectus. Curabitur libero augue, rhoncus ac elit vitae, feugiat suscipit erat. Sed dictum ipsum non felis cursus, quis mattis sapien congue.`
  );

  const onSubmit = (data: ProfileUpdateFormData) => {
    console.log("Form data submitted:", data);
    // Handle your form submission logic here
  };

  const handleBioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBioText(event.target.value);
  };

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
          <Label htmlFor="nameTitle">Name Title</Label>
          <Input
            className="mt-3 bg-card border-none py-6 px-4"
            type="text"
            id="nameTitle"
            {...register("nameTitle")}
          />
          {errors.nameTitle && (
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
            value={bioText}
            onChange={handleBioChange}
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
              <div className="absolute bg-card inset-y-0 flex items-center rounded-l-md left-0 pointer-events-none px-3">
                steam.com/
              </div>
              <div className="">
                <Input
                  type="text"
                  id="steamAccount"
                  placeholder="@game"
                  {...register("steamAccount")}
                  className="pl-[110px] pr-2 mt-3 bg-[#111111] border-none py-6"
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
              <div className="absolute bg-card inset-y-0 flex items-center rounded-l-md left-0 pointer-events-none px-3">
                x.com/
              </div>
              <div className="">
                <Input
                  type="text"
                  id="steamAccount"
                  {...register("steamAccount")}
                  className="pl-[75px] pr-2 mt-3 bg-[#111111] border-none py-6"
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
              <div className="absolute bg-card inset-y-0 flex items-center rounded-l-md left-0 pointer-events-none px-3">
                linkedin.com/
              </div>
              <div className="">
                <Input
                  type="text"
                  id="steamAccount"
                  {...register("steamAccount")}
                  className="pl-[125px] pr-2 mt-3 bg-[#111111] border-none py-6"
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
              <div className="absolute bg-card inset-y-0 flex items-center rounded-l-md left-0 pointer-events-none px-3">
                reddit.com/
              </div>
              <div className="">
                <Input
                  type="text"
                  id="steamAccount"
                  {...register("steamAccount")}
                  className="pl-[110px] pr-2 mt-3 bg-[#111111] border-none py-6"
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
              <div className="absolute bg-card inset-y-0 flex items-center rounded-l-md left-0 pointer-events-none px-3">
                instagram.com/
              </div>
              <div className="">
                <Input
                  type="text"
                  id="steamAccount"
                  {...register("steamAccount")}
                  className="pl-[140px] pr-2 mt-3 bg-[#111111] border-none py-6"
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
          <PTButton
            className="border border-card rounded-full px-8 py-3"
            label="Cancel"
          />
          <PTButton
            type="submit"
            className=" border-none bg-secondary rounded-full px-8 py-3"
            label="Save Change"
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileUpdateForm;

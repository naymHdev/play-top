"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { StepIndicator } from "./Stepper";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import PTButton from "@/components/ui/PTButton";
import { MdOutlineCloudUpload } from "react-icons/md";
import Description from "./Description";

// Steps for timeline
const steps = [
  "Add Title",
  "Description",
  "Social Links for the Game",
  "Upload file",
];

// Zod Schema
const formSchema = z.object({
  gameTitle: z.string().min(1, "Title is required"),
  steamAccount: z.string().optional(),
  linkedinAccount: z.string().optional(),
  redditAccount: z.string().optional(),
  instagramAccount: z.string().optional(),
  xAccount: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function AddGameForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const watchedGameTitle = watch("gameTitle");

  useEffect(() => {
    if (sectionRefs.current[currentStep]) {
      sectionRefs.current[currentStep]?.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === 0 && watchedGameTitle?.trim().length > 0) {
      setTimeout(() => setCurrentStep(1), 500);
    }
  }, [watchedGameTitle]);

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    console.log("Description Content:", editorState);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full lg:max-w-4xl mx-auto text-white"
    >
      {/* Timeline */}
      <div className="w-20 flex flex-col items-center py-10 sticky top-0">
        {steps.map((_, index) => (
          <StepIndicator
            key={index}
            stepIndex={index}
            currentStep={currentStep}
          />
        ))}
      </div>

      {/* Form Sections */}
      <div className="flex-1 space-y-14 lg:p-10 py-6 lg:py-0">
        <div>
          <h2 className=" text-5xl font-bold leading-14 text-primary">
            Add a new game
          </h2>
          <p className=" text-lg font-normal leading-7 mt-2">
            Donec ac posuere tellus. Nunc sem ipsum, cursus quis erat feugiat,
            cursus dictum enim. 
          </p>
        </div>

        {steps.map((step, index) => (
          <section key={index} ref={(el) => (sectionRefs.current[index] = el)}>
            <h2 className="text-3xl font-bold mb-4">{step}</h2>

            {/* --- Step 1: Game Title & Category --- */}
            {index === 0 && (
              <div>
                <p className="text-sm text-gray-400 mb-4">
                  Save on the Sakura Storm Collection, Koumei Visions Bundle and
                  more from April 9-23.
                </p>
                <label className="block text-lg font-semibold text-primary/80">
                  Game Title
                </label>
                <input
                  type="text"
                  maxLength={40}
                  placeholder="Enter game title"
                  {...register("gameTitle")}
                  className="w-full mt-1 py-3 px-2 rounded-md border-none bg-card"
                />
                {errors.gameTitle && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.gameTitle.message}
                  </p>
                )}

                <label className="block mt-4 text-lg font-semibold text-primary/80">
                  Select Categories
                </label>
                <select className="w-full mt-2 p-2 py-3 px-2 rounded-md border-none bg-card">
                  <option>Select a category from the list</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            )}

            {/* --- Step 2: Description --- */}
            {index === 1 && (
              <div>
                <p className="text-sm text-gray-400 mb-4">
                  Save on the Sakura Storm Collection, Koumei Visions Bundle and
                  more from April 9-23.
                </p>
                <label className="block text-lg font-semibold text-primary/80">
                  Description of the game
                </label>
                <Description />
              </div>
            )}

            {/* --- Step 3: Social Links --- */}
            {index === 2 && (
              <div>
                <p className="text-sm text-gray-400 mb-4">
                  At least 1 link is required*
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {/* Steam */}
                  <div>
                    <Label htmlFor="steamAccount" className="text-primary/80">
                      Steam account of the game
                    </Label>
                    <div className="relative">
                      <div className="absolute bg-card inset-y-0 flex items-center rounded-l-md left-0 pointer-events-none px-3">
                        steam.com/
                      </div>
                      <Input
                        type="text"
                        id="steamAccount"
                        placeholder="steam.com/"
                        {...register("steamAccount")}
                        className="pl-[110px] pr-2 mt-3 bg-[#111111] border-none py-6"
                      />
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <Label
                      htmlFor="linkedinAccount"
                      className="text-primary/80"
                    >
                      LinkedIn account of the game
                    </Label>
                    <div className="relative">
                      <div className="absolute bg-card inset-y-0 flex items-center rounded-l-md left-0 pointer-events-none px-3">
                        linkedin.com/
                      </div>
                      <Input
                        type="text"
                        id="linkedinAccount"
                        placeholder="linkedin.com/"
                        {...register("linkedinAccount")}
                        className="pl-[122px] pr-2 mt-3 bg-[#111111] border-none py-6"
                      />
                    </div>
                  </div>

                  {/* Reddit */}
                  <div>
                    <Label htmlFor="redditAccount">
                      Reddit account of the game
                    </Label>
                    <div className="relative">
                      <div className="absolute bg-card inset-y-0 flex items-center rounded-l-md left-0 pointer-events-none px-3">
                        reddit.com/
                      </div>
                      <Input
                        type="text"
                        id="redditAccount"
                        placeholder="@reddit.com/"
                        {...register("redditAccount")}
                        className="pl-[110px] pr-2 mt-3 bg-[#111111] border-none py-6"
                      />
                    </div>
                  </div>

                  {/* Instagram */}
                  <div>
                    <Label htmlFor="instagramAccount">
                      Instagram account of the game
                    </Label>
                    <div className="relative">
                      <div className="absolute bg-card inset-y-0 flex items-center rounded-l-md left-0 pointer-events-none px-3">
                        instagram.com/
                      </div>
                      <Input
                        type="text"
                        id="instagramAccount"
                        placeholder="instagram.com/"
                        {...register("instagramAccount")}
                        className="pl-[138px] pr-2 mt-3 bg-[#111111] border-none py-6"
                      />
                    </div>
                  </div>

                  {/* X */}
                  <div>
                    <Label htmlFor="xAccount">X account of the game</Label>
                    <div className="relative">
                      <div className="absolute bg-card inset-y-0 flex items-center rounded-l-md left-0 pointer-events-none px-3">
                        x.com/
                      </div>
                      <Input
                        type="text"
                        id="xAccount"
                        placeholder="x.com/"
                        {...register("xAccount")}
                        className="pl-[75px] pr-2 mt-3 bg-[#111111] border-none py-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* --- Step 4: File Upload --- */}
            {index === 3 && (
              <div>
                <p className="text-sm text-gray-400 mb-4">
                  Save on the Sakura Storm Collection, Koumei Visions Bundle and
                  more from April 9-23.
                </p>

                {/* Thumbnail Upload */}
                <div>
                  <label className="block text-lg font-semibold text-primary/80">
                    Upload thumbnail
                  </label>
                  <p className="mt-1 text-sm font-normal text-foreground">
                    Keep in mind that the first file you upload will appear in
                    the cover preview.
                  </p>
                  <div className="relative border border-dashed border-foreground mt-4 bg-card rounded-lg py-4 px-4 flex flex-col items-center justify-center text-center cursor-pointer">
                    <input
                      id="picture"
                      type="file"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <MdOutlineCloudUpload className="text-secondary text-5xl mb-4" />
                    <div className="space-y-1">
                      <p className="text-primary font-medium">
                        Drag your file(s) here or{" "}
                        <label
                          htmlFor="picture"
                          className="text-secondary underline cursor-pointer"
                        >
                          browse
                        </label>
                      </p>
                      <p className="text-sm text-foreground">
                        .jpg, .jpeg, .png, .avi — Max size: 50MB — Max files: 1
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cover Upload */}
                <div className="mt-8">
                  <label className="block text-lg font-semibold text-primary/80">
                    Upload cover image
                  </label>
                  <p className="mt-1 text-sm font-normal text-foreground">
                    Keep in mind that the first file you upload will appear in
                    the cover preview.
                  </p>
                  <div className="relative border border-dashed border-foreground mt-4 bg-card rounded-lg py-4 px-4 flex flex-col items-center justify-center text-center cursor-pointer">
                    <input
                      id="cover"
                      type="file"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <MdOutlineCloudUpload className="text-secondary text-5xl mb-4" />
                    <div className="space-y-1">
                      <p className="text-primary font-medium">
                        Drag your file(s) here or{" "}
                        <label
                          htmlFor="cover"
                          className="text-secondary underline cursor-pointer"
                        >
                          browse
                        </label>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        ))}

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <div>
            <PTButton
              label="Cancel"
              className="border border-card text-primary bg-background px-3 lg:px-6 py-2"
            />
          </div>
          <div className=" flex items-center gap-2 lg:gap-4">
            <PTButton
              label="Save as Draft"
              className=" border-none text-primary bg-foreground px-2 lg:px-6 py-2"
            />
            <PTButton
              type="submit"
              label="Submit Game"
              className=" text-primary border-none bg-secondary px-2 lg:px-6 py-2"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

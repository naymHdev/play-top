"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { StepIndicator } from "./Stepper";
import PTButton from "@/components/ui/PTButton";
import Description from "./Description";
import LinkInputs from "./LinkInputs";
import UploadSection from "./UploadSection";

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
                  At least 1 social link is required*
                </p>
                <LinkInputs register={register} />
              </div>
            )}

            {/* --- Step 4: File Upload --- */}
            {index === 3 && (
              <div>
                <p className="text-sm text-gray-400 mb-4">
                  Save on the Sakura Storm Collection, Koumei Visions Bundle and
                  more from April 9-23.
                </p>
                <UploadSection />
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

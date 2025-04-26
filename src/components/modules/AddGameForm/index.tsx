"use client";

import { useEffect, useRef, useState } from "react";
import { StepIndicator } from "./Stepper";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import PTButton from "@/components/ui/PTButton";
import { MdOutlineCloudUpload } from "react-icons/md";

const steps = [
  "Add Title",
  "Description",
  "Social Links for the Game",
  "Upload file",
];

export default function AddGameForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [gameTitle, setGameTitle] = useState("");
  const [description, setDescription] = useState("");

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (sectionRefs.current[currentStep]) {
      sectionRefs.current[currentStep]?.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === 0 && gameTitle.trim().length > 0) {
      setTimeout(() => setCurrentStep(1), 500);
    }
  }, [gameTitle]);

  useEffect(() => {
    if (currentStep === 1 && description.trim().length > 0) {
      setTimeout(() => setCurrentStep(2), 500);
    }
  }, [description]);

  return (
    <div className="flex max-w-4xl mx-auto text-white">
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

      {/* Form */}
      <div className="flex-1 space-y-14 p-10">
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

            {/* ---------------- Game Title & Category ---------------- */}
            {index === 0 && (
              <div>
                <p className="text-sm text-gray-400 mb-4">
                  Save on the Sakura Storm Collection, Koumei Visions Bundle and
                  more from April 9-23.
                </p>
                <label className="block text-lg font-semibold">
                  Game Title
                </label>
                <input
                  type="text"
                  maxLength={40}
                  placeholder="Enter game title"
                  value={gameTitle}
                  onChange={(e) => setGameTitle(e.target.value)}
                  className="w-full mt-1 py-3 px-2 rounded-md border-none bg-card"
                />

                <label className="block mt-4 text-lg font-semibold">
                  Select Categories
                </label>
                <select className="w-full mt-2 p-2 py-3 px-2 rounded-md border-none bg-card">
                  <option>Select a category from the list</option>
                </select>
              </div>
            )}

            {/* ---------------- Game Details ---------------- */}
            {index === 1 && (
              <div>
                <p className="text-sm text-gray-400 mb-4">
                  Save on the Sakura Storm Collection, Koumei Visions Bundle and
                  more from April 9-23.
                </p>
                <label className="block text-lg font-semibold">
                  Description of the game
                </label>
                <textarea
                  rows={6}
                  placeholder="Add game description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full mt-2 py-3 px-2 rounded-md border-none bg-card"
                />
              </div>
            )}

            {/* ---------------- Social Links Upload---------------- */}
            {index === 2 && (
              <div>
                <p className="text-sm text-gray-400 mb-4">
                  Atleast 1 link is required*
                </p>
                <div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="steamAccount">
                        Steam account of the game
                      </Label>
                      <div className="relative">
                        <div className="absolute bg-card inset-y-0 flex items-center rounded-l-md left-0 pointer-events-none px-3">
                          steam.com/
                        </div>
                        <div className="">
                          <Input
                            type="text"
                            id="steamAccount"
                            // {...register("steamAccount")}
                            className="pl-[110px] pr-2 mt-3 bg-[#111111] border-none py-6"
                          />
                        </div>
                      </div>
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
                            // {...register("steamAccount")}
                            className="pl-[75px] pr-2 mt-3 bg-[#111111] border-none py-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- File Uploading Systems---------------- */}
            {index === 3 && (
              <div>
                <p className="text-sm text-gray-400 mb-4">
                  Save on the Sakura Storm Collection, Koumei Visions Bundle and
                  more from April 9-23.
                </p>
                <div>
                  <label className="block text-lg font-semibold">
                    Upload thumbnail
                  </label>
                  <p className=" mt-1 text-sm font-normal text-foreground">
                    Keep in mind that the first file you upload will appear in
                    the cover preview. We recommend the size 930x560 with aspect
                    ratio 4:3. Not sure what to
                    <span className=" underline px-1">upload</span>?
                  </p>
                  <div className="relative border border-dashed border-card mt-4 bg-card rounded-lg py-4 px-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-muted transition">
                    {/* Invisible file input over the whole area */}
                    <input
                      id="picture"
                      type="file"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />

                    {/* Upload icon */}
                    <MdOutlineCloudUpload className="text-secondary text-5xl mb-4" />

                    {/* Upload text */}
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
                        You can upload the following formats:
                      </p>
                      <p className="text-sm text-foreground">
                        .jpg, .jpeg, .png, .avi — Max size: 50MB — Max files: 1
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        ))}
        <div className="flex items-center justify-between">
          <div>
            <PTButton
              label="Cancel"
              className="border border-card text-primary bg-background px-6 py-2"
            />
          </div>
          <div className=" flex items-center gap-4">
            <PTButton
              label="Save as Draft"
              className=" border-none text-primary bg-foreground px-6 py-2"
            />
            <PTButton
              label="Submit Game"
              className=" text-primary border-none bg-secondary px-6 py-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { z } from "zod";
import { StepIndicator } from "./Stepper";
import PTButton from "@/components/ui/PTButton";
import Description from "./Description";
import LinkInputs from "./LinkInputs";
import UploadSection from "./UploadSection";
import { steps } from "@/constants/gameForm";
import { EditorState } from "draft-js";
import NMImageUploader from "@/components/ui/core/PTImageUploader";
import ImagePreviewer from "@/components/ui/core/PTImageUploader/ImagePreviewer";
import { formSchema } from "@/types/uploadGame";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox";
import { addGame } from "@/services/games";
import { TUserProps } from "@/types/user";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const items = [
  {
    id: "Android",
    label: "Android",
  },
  {
    id: "Apple",
    label: "Apple",
  },
  {
    id: "Mac",
    label: "Mac",
  },
  {
    id: "Windows",
    label: "Windows",
  },
  {
    id: "Linux",
    label: "Linux",
  },
] as const;

type FormData = z.infer<typeof formSchema>;

export default function AddGameForm({
  session,
}: {
  session: TUserProps | null;
}) {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const [isThumbnail, setIsThumbnail] = useState<File | undefined>(undefined);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const gameDescription = editorState.getCurrentContent().getPlainText();

  const methods = useForm<FormData>({
    // resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      socialLinks: [
        { name: "Game Website", link: "https://store.steampowered.com" },
        { name: "X", link: "https://x.com/realdonaldtrump" },
      ],
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = methods;

  const watchedGameTitle = watch("title");
  const gameStatus = watch("gameStatus");
  const upcomingDate = watch("upcomingDate");
  const selectedPlatforms = watch("platform") || [];

  // Toggle platform
  const togglePlatform = (id: string) => {
    const current = watch("platform") || [];
    if (current.includes(id)) {
      setValue(
        "platform",
        current.filter((item) => item !== id)
      );
    } else {
      setValue("platform", [...current, id]);
    }
  };

  // Auto-scroll to the current section
  useEffect(() => {
    const section = sectionRefs.current[currentStep];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentStep]);

  // Move to next step if game title is filled
  useEffect(() => {
    if (currentStep === 0 && watchedGameTitle?.trim()) {
      const timeout = setTimeout(() => setCurrentStep(1), 500);
      return () => clearTimeout(timeout);
    }
  }, [watchedGameTitle, currentStep]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // console.log("Core Data:", data);
    setIsLoading(true);

    const gameFormData = {
      userId: session?.user?.email,
      title: data.title,
      description: gameDescription,
      categories: data.categories,
      platform: data.platform,
      price: parseFloat(data.price),
      socialLinks: data.socialLinks,
      upcomingDate: data.upcomingDate,
    };
    // console.log("gameFormData:", gameFormData);
    // console.log("isThumbnail:", isThumbnail);

    const formData = new FormData();
    formData.append("data", JSON.stringify(gameFormData));
    formData.append("thumbnail", isThumbnail as File);

    for (const file of imageFiles) {
      formData.append("image", file);
    }

    try {
      setIsLoading(true);
      const res = await addGame(formData);
      // console.log("Game added response from API:", res);

      if (res?.success) {
        toast.success(res.message);
        router.push("/");
        setIsLoading(false);
      } else {
        toast.error(res.message);
        setIsLoading(false);
      }
    } catch (err: any) {
      console.error(err);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full lg:max-w-3xl mx-auto text-white py-10">
        {/* Timeline */}
        <div className="w-20 flex flex-col items-center py-10 sticky top-0 h-full">
          {steps.map((_, index) => (
            <StepIndicator
              key={index}
              stepIndex={index}
              currentStep={currentStep}
            />
          ))}
        </div>

        {/* Form Content */}
        <div className="flex-1 space-y-14 lg:p-10 py-6 lg:py-0">
          {/* Header */}
          <div>
            <h2 className="text-5xl font-bold text-primary leading-tight">
              Add a New Game
            </h2>
            <p className="text-lg font-normal mt-2 leading-7">
              Donec ac posuere tellus. Nunc sem ipsum, cursus quis erat feugiat,
              cursus dictum enim.
            </p>
          </div>

          {/* Steps */}
          {steps.map((step, index) => (
            <section
              key={index}
              ref={(el) => {
                sectionRefs.current[index] = el as HTMLDivElement | null;
              }}
            >
              <h2 className="text-3xl font-bold mb-4">{step}</h2>

              {index === 0 && (
                <div>
                  {/* Game Title Input */}
                  <label className="block text-lg font-semibold text-primary/80">
                    Game Title
                    <span className=" text-gray-400 font-normal leading-normal px-1">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    maxLength={40}
                    placeholder="Enter game title"
                    {...register("title")}
                    className="w-full mt-1 py-3 px-2 rounded-md border-none bg-card text-white"
                  />
                  {errors.title && (
                    <p className="text-gray-200 text-sm mt-1">
                      {errors.title.message}
                    </p>
                  )}

                  {/* Category Input */}
                  <label className="block mt-4 text-lg font-semibold text-primary/80">
                    Mention categories with a comma
                    <span className=" text-gray-400 font-normal leading-normal px-1">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Action, Adventure, Strategy"
                    onChange={(e) => {
                      const value = e.target.value;
                      const array = value
                        .split(",")
                        .map((cat) => cat.trim())
                        .filter((cat) => cat.length > 0);
                      setValue("categories", array);
                    }}
                    className="w-full mt-2 py-3 px-3 rounded-md border-none bg-card placeholder:text-muted-foreground text-white"
                  />

                  {errors.categories && (
                    <p className="text-gray-200 text-sm mt-1">
                      {errors.categories.message}
                    </p>
                  )}
                  {/* Price */}
                  <div className="space-y-2">
                    <label
                      className="block mt-4 text-lg font-semibold text-primary/80"
                      htmlFor="price"
                    >
                      Price <span className=" text-sm">(USD)</span>
                      <span className=" text-gray-400 font-normal leading-normal px-1">
                        *
                      </span>
                    </label>
                    <input
                      className="w-full mt-2 py-3 px-3 rounded-md border-none bg-card text-white placeholder:text-muted-foreground"
                      id="price"
                      placeholder="Enter price"
                      {...register("price")}
                    />
                    {errors.price && (
                      <p className="text-sm text-gray-200">
                        {errors.price.message}
                      </p>
                    )}
                  </div>

                  {/* Status */}
                  <div className="space-y-2">
                    <Label className="block mt-4 text-lg font-semibold text-primary/80">
                      Status
                      <span className=" text-gray-400 font-normal leading-normal px-1">
                        *
                      </span>
                    </Label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="active"
                          {...register("gameStatus")}
                        />
                        Active
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="upcoming"
                          {...register("gameStatus")}
                        />
                        Upcoming
                      </label>
                    </div>
                    {errors.gameStatus && (
                      <p className="text-sm text-gray-200">
                        {errors.gameStatus.message}
                      </p>
                    )}
                  </div>

                  {/* Conditional Calendar */}
                  {gameStatus === "upcoming" && (
                    <div className="space-y-2">
                      <Label className="block mt-4 text-lg font-semibold text-primary/80">
                        Publish Date
                        <span className=" text-gray-400 font-normal leading-normal px-1">
                          *
                        </span>
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal bg-card border-none",
                              !upcomingDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {upcomingDate
                              ? format(upcomingDate, "PPP")
                              : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 border-none rounded-md bg-card">
                          <Calendar
                            className="w-full rounded-md border-none bg-card text-foreground placeholder:text-muted-foreground"
                            mode="single"
                            selected={upcomingDate}
                            onSelect={(date) => {
                              setValue("upcomingDate", date, {
                                shouldValidate: true,
                              });
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      {errors.upcomingDate && (
                        <p className="text-sm text-gray-200">
                          {errors.upcomingDate.message}
                        </p>
                      )}
                    </div>
                  )}

                  {/* ---------------- Add Multiple Checkbox For Select Platform ---------------- */}
                  <div>
                    <label
                      className="block mt-4 text-lg font-semibold text-primary/80"
                      htmlFor="price"
                    >
                      Platforms
                      <span className=" text-gray-400 font-normal leading-normal px-1">
                        *
                      </span>
                    </label>
                    <div className="flex flex-wrap gap-4 my-4">
                      {items.map((platform) => (
                        <div
                          key={platform.id}
                          className="flex items-center gap-2"
                        >
                          <Checkbox
                            id={platform.id}
                            checked={selectedPlatforms.includes(platform.id)}
                            onCheckedChange={() => togglePlatform(platform.id)}
                            className="data-[state=checked]:text-blue-700"
                          />
                          <Label
                            className=" text-gray-200"
                            htmlFor={platform.id}
                          >
                            {platform.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {index === 1 && (
                <div>
                  <label className="block text-lg font-semibold text-primary/80">
                    Description of the Game
                    <span className=" text-gray-400 font-normal leading-normal px-1">
                      *
                    </span>
                  </label>
                  <Description
                    editorState={editorState}
                    setEditorState={setEditorState}
                  />
                </div>
              )}

              {index === 2 && (
                <div>
                  <h2 className="block  text-lg font-semibold text-primary/80">
                    Social Links for the Game
                  </h2>
                  <p className="text-sm text-gray-400 mb-4 mt-2">
                    At least 1 social link is required*
                  </p>
                  {/* <LinkInputs watch={watch} setValue={setValue} register={register} /> */}
                  <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <LinkInputs />
                    </form>
                  </FormProvider>
                </div>
              )}

              {index === 3 && (
                <div>
                  <UploadSection setIsThumbnail={setIsThumbnail} />
                  {/* Gallery Upload (Multiple Images) */}

                  <div className="mt-8">
                    <div>
                      <label className="block text-lg font-semibold text-primary/80">
                        Upload Photos of game and gameplay (up to 5 pictures)
                        <span className=" text-gray-400 font-normal leading-normal px-1">
                          *
                        </span>
                      </label>
                      <p className="mt-1 text-sm font-normal text-foreground">
                        Keep in mind that the first file you upload will appear
                        in the cover preview. We recommend the size 1920x340
                        with aspect ratio 4:3. Not sure what to upload?
                      </p>
                    </div>
                    <div className="flex gap-4 mt-5">
                      <NMImageUploader
                        setImageFiles={setImageFiles}
                        setImagePreview={setImagePreview}
                        label="Upload Image"
                        className="w-fit mt-0"
                      />
                      <ImagePreviewer
                        className="flex flex-wrap gap-4"
                        setImageFiles={setImageFiles}
                        imagePreview={imagePreview}
                        setImagePreview={setImagePreview}
                      />
                    </div>
                  </div>
                </div>
              )}
            </section>
          ))}
          {/* Footer Buttons */}
          <div className="flex items-center justify-between">
            <PTButton
              label="Cancel"
              className="border border-card text-primary bg-background px-3 lg:px-6 py-2 hover:cursor-pointer"
            />

            <div className="flex items-center gap-2 lg:gap-4">
              <PTButton
                label="Save as Draft"
                className="border-none text-primary bg-foreground px-2 lg:px-6 py-2"
              />
              <PTButton
                type="submit"
                label={`${isLoading ? "Submitting..." : "Submit Game"}`}
                className="text-primary border-none bg-secondary px-2 lg:px-6 py-2"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";

import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import * as z from "zod";
import { TGame } from "@/types/games";
import { formSchema } from "@/types/updateGame";
import PTButton from "@/components/ui/PTButton";
import { updateMyGame } from "@/services/profile";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PLATFORMS = ["Android", "Apple", "Windows", "Linux", "Mac"];
type FormValues = z.infer<typeof formSchema>;

const UpdateGameForm = ({ game }: { game: TGame }) => {
  // console.log("game", game);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: game.title,
      description: game.description,
      platform: game.platform,
      price: game.price,
      gameStatus: game.gameStatus,
      upcomingDate: game.upcomingDate ? new Date(game.upcomingDate) : undefined,
    },
  });

  const gameStatus = watch("gameStatus");
  const upcomingDate = watch("upcomingDate");

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // console.log("Form submitted:", data);
    setLoading(true);

    const updatedData = {
      gameId: game.id,
      userId: game?.userId?.id as string,
      title: data.title,
      description: data.description,
      platform: data.platform,
      price: data.price,
      gameStatus: data.gameStatus,
      upcomingDate: data.upcomingDate,
    };

    // console.log("Updated Data:", updatedData);

    const formData = new FormData();
    formData.append("data", JSON.stringify(updatedData));

    try {
      setLoading(true);
      const res = await updateMyGame(formData);
      // console.log("Update response:", res);

      if (res.success) {
        toast.success("Game updated successfully!");
        router.push("/profile");
        setLoading(false);
      } else {
        toast.error("Failed to update game.");
      }
    } catch (error) {
      console.error("Error updating game:", error);
      toast.error("Error updating game.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 w-full lg:max-w-3xl mx-auto"
        >
          <div>
            <h2 className="text-5xl font-bold text-primary leading-tight">
              Edit Game Details
            </h2>
            <p className="text-lg font-normal mt-2 leading-7 text-muted-foreground">
              Update your game's information below. Make changes to the title,
              description, release status, pricing, and more to keep everything
              up to date.
            </p>
          </div>

          <div>
            <Label className="block text-lg font-semibold text-primary/80">
              Title
            </Label>
            <Input
              {...register("title")}
              className="w-full mt-1 py-6 px-2 rounded-md border-none bg-card"
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div>
            <Label className="block text-lg font-semibold text-primary/80">
              Description
            </Label>
            <Input
              {...register("description")}
              className="w-full mt-1 py-6 px-2 rounded-md border-none bg-card"
            />
            {errors.description && (
              <p className="text-sm text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          <div>
            <Label className="block text-lg font-semibold text-primary/80">
              Price
            </Label>
            <Input
              type="number"
              step="0.01"
              {...register("price", { valueAsNumber: true })}
              className="w-full mt-1 py-6 px-2 rounded-md border-none bg-card"
            />
            {errors.price && (
              <p className="text-sm text-red-500">{errors.price.message}</p>
            )}
          </div>

          {/* Platform (Checkboxes) */}
          <div>
            <label className="block text-sm font-medium mb-1">Platform</label>
            <div className="flex flex-wrap gap-4">
              {PLATFORMS.map((platform) => (
                <label key={platform} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={platform}
                    {...register("platform")}
                    defaultChecked={game.platform.includes(platform)}
                  />
                  <span>{platform}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <Label className="block text-lg font-semibold text-primary/80">
              Game Status
            </Label>
            <select
              {...register("gameStatus")}
              className="w-full mt-2 py-3 px-2 rounded-md border-none bg-card"
            >
              <option value="active">Active</option>
              <option value="upcoming">Upcoming</option>
            </select>
            {errors.gameStatus && (
              <p className="text-sm text-red-500">
                {errors.gameStatus.message}
              </p>
            )}
          </div>

          {/* Conditional Calendar */}
          {gameStatus === "upcoming" && (
            <div className="space-y-2">
              <Label className="block mt-4 text-lg font-semibold text-primary/80">
                Publish Date
                <span className="text-gray-200 font-medium px-1">*</span>
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
                    {upcomingDate ? format(upcomingDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-3 text-white border-none rounded-md bg-card">
                  <Calendar
                    mode="single"
                    selected={upcomingDate}
                    onSelect={(date) =>
                      setValue("upcomingDate", date, { shouldValidate: true })
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {errors.upcomingDate && (
                <p className="text-sm text-red-500">
                  {errors.upcomingDate.message}
                </p>
              )}
            </div>
          )}

          <PTButton
            type="submit"
            label={loading ? "Updating..." : "Update Game"}
            className="text-primary border-none bg-secondary px-2 lg:px-6 py-2"
          />
        </form>
      </div>
    </>
  );
};

export default UpdateGameForm;

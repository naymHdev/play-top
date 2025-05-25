"use client";

import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { comments } from "@/services/comments";
import { TUserProps } from "@/types/user";
import { TGame } from "@/types/games";
import toast from "react-hot-toast";

type FormData = {
  comment: string;
};
type UserCommentsProps = {
  session: TUserProps | null;
  gameDetails: TGame | null;
};

const UserCommentBox = ({ session, gameDetails }: UserCommentsProps) => {
  // console.log("session", session?.user?.email);
  // console.log("gameDetails", gameDetails);

  const MIN_COMMENT_LENGTH = 10;
  const MAX_COMMENT_LENGTH = 500;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    formState: { isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (!session?.user) return;

    const commentLength = data.comment.trim().length;

    if (commentLength < MIN_COMMENT_LENGTH) {
      toast.error(`Comment must be at least ${MIN_COMMENT_LENGTH} characters.`);
      return;
    }

    if (commentLength > MAX_COMMENT_LENGTH) {
      toast.error(`Comment must not exceed ${MAX_COMMENT_LENGTH} characters.`);
      return;
    }

    const commentData = {
      data: {
        comment: data.comment,
        gameId: gameDetails?.id,
      },
    };
    // console.log("Comment Data:", commentData);

    try {
      const res = await comments(commentData);
      // console.log("Server Response:", res);
      if (res?.success) {
        toast.success("Comment submitted successfully!");
      } else {
        toast.error("Failed to submit comment.");
      }
      reset();
    } catch (error: any) {
      console.log("Error submitting comment:", error);
    }
  };

  return (
    <div className="w-full mx-auto rounded-lg border border-card">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <Textarea
          {...register("comment", {
            required: true,
            minLength: MIN_COMMENT_LENGTH,
            maxLength: MAX_COMMENT_LENGTH,
          })}
          placeholder="What do you think?..."
          className=" resize-none rounded-lg border-none bg-background shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-white"
        />
        {errors.comment && (
          <p className="text-sm text-red-500 px-2">{errors.comment.message}</p>
        )}

        <div className="flex justify-end m-2">
          <Button
            type="submit"
            disabled={!session?.user || isSubmitting}
            className="rounded-full px-5 py-1.5 text-sm bg-card text-primary hover:bg-card border-card hover:text-white hover:cursor-pointer"
            variant="outline"
          >
            {session?.user?.email ? "Submit" : "Login to comment"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserCommentBox;

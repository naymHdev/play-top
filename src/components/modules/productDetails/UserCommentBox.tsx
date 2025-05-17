"use client";

import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { comments } from "@/services/comments";
import { useUser } from "@/contexts/UserContext";
import { TUserProps } from "@/types/user";

type FormData = {
  comment: string;
};

const UserCommentBox = ({ session }: { session: TUserProps | null }) => {
  // console.log("session", session?.user?.email);
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (!user) return;

    const commentData = {
      comment: data.comment,
      gameId: user?.id,
    };

    try {
      const res = await comments(commentData);
      console.log("Server Response:", res);
      reset();
    } catch (error: any) {
      console.log("Error submitting comment:", error);
    }
  };

  return (
    <div className="w-full mx-auto rounded-lg border border-card">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <Textarea
          {...register("comment", { required: true })}
          placeholder="What do you think?..."
          className=" resize-none rounded-lg border-none bg-background text-foreground shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />

        <div className="flex justify-end m-2">
          <Button
            type="submit"
            disabled={!user || isSubmitting}
            className="rounded-full px-5 py-1.5 text-sm bg-card text-primary hover:bg-card border-card hover:text-white hover:cursor-pointer"
            variant="outline"
          >
            {user && session?.user?.email ? "Submit" : "Login to comment"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserCommentBox;

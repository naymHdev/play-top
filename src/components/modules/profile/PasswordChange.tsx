"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { logout, updatePassword } from "@/services/auth";
import { useUser } from "@/contexts/UserContext";
import { useForm } from "react-hook-form";
import { TUpdatePassword } from "@/types/auth";
import { useRouter } from "next/navigation";

type FormData = {
  password: string;
  newPassword: string;
};

const PasswordChange = () => {
  const { user } = useUser();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: { password: string; newPassword: string }) => {
    if (!user?.id) return toast.error("User ID missing");

    const passwordData: TUpdatePassword = {
      data: {
        userId: user.id,
        password: data.password,
        newPassword: data.newPassword,
      },
    };

    try {
      const res = await updatePassword(passwordData);
      // console.log("res", res);

      if (res?.success) {
        toast.success("Password updated successfully!");
        reset();
        await logout();
        router.push("/sign-in");
      } else {
        toast.error(res?.message || "Failed to update password.");
      }
    } catch (error: any) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-primary/70 bg-secondary hover:bg-green-700 rounded-full py-5">
          Change Password
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-none bg-card text-primary">
        <DialogHeader>
          <DialogTitle>Change Password</DialogTitle>
          <DialogDescription className="text-foreground">
            Update your account password. Enter your current password and set a
            new one.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Old Password
            </Label>
            <Input
              id="password"
              type="text"
              {...register("password", {
                required: "Old password is required",
              })}
              className="col-span-3 px-2 border border-foreground text-primary"
              placeholder="Enter old password"
            />
            {errors.password && (
              <p className="col-span-4 text-red-500 text-sm mt-1 ml-[33%]">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="newPassword" className="text-right">
              New Password
            </Label>
            <Input
              id="newPassword"
              type="text"
              {...register("newPassword", {
                required: "New password is required",
              })}
              className="col-span-3 px-2 border border-foreground text-primary"
              placeholder="Enter new password"
            />
            {errors.newPassword && (
              <p className="col-span-4 text-red-500 text-sm mt-1 ml-[33%]">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          <DialogFooter>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-secondary text-primary"
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PasswordChange;

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
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type FormData = {
  password: string;
  newPassword: string;
};

const PasswordChange = () => {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
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
          {/* Old Password */}
          <div className="relative space-y-2">
            <Label htmlFor="password" className="text-right">
              Old Password
            </Label>
            <Input
              id="password"
              type={showOld ? "text" : "password"}
              {...register("password", {
                required: "Old password is required",
              })}
              className="w-full px-2 pr-10 border border-foreground text-primary"
              placeholder="Enter old password"
            />
            <div
              className="absolute right-3 top-[30px] cursor-pointer text-muted-foreground"
              onClick={() => setShowOld(!showOld)}
            >
              {showOld ? <EyeOff /> : <Eye />}
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* New Password */}
          <div className="relative space-y-2 mt-4">
            <Label htmlFor="newPassword" className="text-right">
              New Password
            </Label>
            <Input
              id="newPassword"
              type={showNew ? "text" : "password"}
              {...register("newPassword", {
                required: "New password is required",
              })}
              className="w-full px-2 pr-10 border border-foreground text-primary"
              placeholder="Enter new password"
            />
            <div
              className="absolute right-3 top-[30px] cursor-pointer text-muted-foreground"
              onClick={() => setShowNew(!showNew)}
            >
              {showNew ? <EyeOff /> : <Eye />}
            </div>
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-1">
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

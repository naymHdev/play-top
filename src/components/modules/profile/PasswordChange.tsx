"use client";

import { use, useState } from "react";
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
import { updatePassword } from "@/services/auth";
import { useUser } from "@/contexts/UserContext";

const PasswordChange = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useUser();
  console.log("user", user);

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const passwordData = {
        userId: user?.id,
        password: oldPassword,
        newPassword,
      };
      console.log("passwordData", passwordData);

      const res = await updatePassword(passwordData);
      console.log(res);
    } catch (error: any) {
      console.log(error);
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
          <DialogDescription className=" text-foreground">
            Update your account password. Enter your current password and set a
            new one.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="oldPassword" className="text-right">
              Old Password
            </Label>
            <Input
              id="oldPassword"
              type="text"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="col-span-3 px-2 border border-foreground text-primary"
              placeholder="Enter old password"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="newPassword" className="text-right">
              New Password
            </Label>
            <Input
              id="newPassword"
              type="text"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="col-span-3 px-2 border border-foreground text-primary"
              placeholder="Enter new password"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="confirmPassword" className="text-right">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="text"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="col-span-3 px-2 border border-foreground text-primary"
              placeholder="Confirm new password"
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={handleChangePassword}
            disabled={loading}
            className="w-full bg-secondary text-primary"
          >
            {loading ? "Changing..." : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PasswordChange;

import { useState } from "react";
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
import { toast } from "react-hot-toast";

const DeleteAccount = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDeleteAccount = async () => {
    if (!password) {
      toast.error("Please enter your password to confirm.");
      return;
    }

    try {
      setLoading(true);

      // Replace with your actual delete account API
      const response = await fetch("/api/delete-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Account deleted successfully.");
        // Optionally redirect the user after deletion
        window.location.href = "/goodbye";
      } else {
        toast.error(data.message || "Failed to delete account.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-primary bg-red-600 hover:bg-red-700 rounded-full py-5">
          Delete Account
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-none bg-card text-primary">
        <DialogHeader>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogDescription>
            This action is permanent and cannot be undone. Please confirm your
            password to proceed.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="col-span-3 px-2 border border-foreground text-primary"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={handleDeleteAccount}
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700"
          >
            {loading ? "Deleting..." : "Confirm Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAccount;

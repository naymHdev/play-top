"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import SocialAuth from "@/components/modules/auth/SocialAuth";
import toast from "react-hot-toast";
import logo from "../../../assets/images/google.png";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { signInUser } from "@/services/auth";

// Define the schema for the form using Zod
const signInSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

const SignInPage = () => {
  // Initialize the form using useForm
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  });

  // Function to handle form submission
  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    try {
      // window.location.href = '/dashboard'; // Example: Redirect to dashboard
      const res = await signInUser(values);
      if (res.success) {
        toast.success(res.message || "Sign in successful!");
        window.location.href = "/profile"; // ✅ redirect to profile page
      } else {
        toast.error(res.message || "Sign in failed.");
      }
    } catch (error) {
      console.error("Sign in failed:", error);
      toast.error(
        "Sign in failed. Please check your credentials and try again."
      );
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-screen relative",
        "p-4 sm:p-8" // Responsive padding
      )}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.3)_0%,_rgba(0,0,0,1)_60%)]  transition-all duration-1000" />
      <Link className=" z-10" href={"/"}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 py-8 hover:cursor-pointer text-center md:text-left">
          <Image src={logo} width={50} height={50} alt="Web logo" />
          <h3 className="text-2xl font-bold text-primary leading-snug">
            Web Title
          </h3>
        </div>
      </Link>

      <div
        className={cn(
          "w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl shadow-2xl",
          "p-6 sm:p-8", // Responsive padding
          "space-y-6"
        )}
      >
        <h1
          className={cn(
            "text-3xl sm:text-4xl font-bold text-center text-primary/80",
            "mb-4 sm:mb-6"
          )}
        >
          Welcome Back
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-6" // Responsive spacing
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      "text-white/90 block mb-2 sm:mb-3",
                      "text-sm sm:text-base"
                    )}
                  >
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      type="email"
                      className={cn(
                        "shadow-inner shadow-black/20 text-primary",
                        "py-2.5 sm:py-3 px-2",
                        "text-sm sm:text-base"
                      )}
                    />
                  </FormControl>
                  <FormMessage
                    className={cn(
                      "text-red-400 mt-1.5 sm:mt-2",
                      "text-xs sm:text-sm"
                    )}
                  />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                const [showPassword, setShowPassword] = useState(false);

                return (
                  <FormItem>
                    <FormLabel
                      className={cn(
                        "text-white/90 block mb-2 sm:mb-3",
                        "text-sm sm:text-base"
                      )}
                    >
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className={cn(
                            "bg-black/20 text-white w-full",
                            "shadow-inner shadow-black/20",
                            "py-2.5 sm:py-3 px-2 pr-10", // leave space for eye icon
                            "text-sm sm:text-base"
                          )}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-white"
                          tabIndex={-1}
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage
                      className={cn(
                        "text-red-400 mt-1.5 sm:mt-2",
                        "text-xs sm:text-sm"
                      )}
                    />
                  </FormItem>
                );
              }}
            />
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className={cn(
                "w-full bg-secondary",
                "text-white font-semibold py-2.5 sm:py-3.5",
                "rounded-full hover:bg-secondary/80",
                "transition-all duration-300 shadow-lg hover:shadow-xl",
                "text-base sm:text-lg",
                form.formState.isSubmitting && "opacity-60 cursor-not-allowed"
              )}
            >
              {form.formState.isSubmitting ? "Submitting..." : "Sign In"}
            </Button>
          </form>
        </Form>
        <SocialAuth />
        <div
          className={cn(
            "text-center text-gray-400",
            "text-sm sm:text-base",
            "mt-4 sm:mt-6"
          )}
        >
          Don't have an account?{" "}
          <a
            href="/sign-up"
            className={cn(
              "text-green-300 hover:text-green-200 font-semibold",
              "transition-colors duration-200"
            )}
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

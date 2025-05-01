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

// Define the schema for the form using Zod
const signInSchema = z.object({
  name: z.string({
    required_error: "Enter your valid name",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

// Animation variants for the form container
const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const SignUpPage = () => {
  // Initialize the form using useForm
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    console.log("Signing in with:", values);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Sign in successful! (Simulated)");
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
        "p-4 sm:p-8"
      )}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.3)_0%,_rgba(0,0,0,1)_60%)] z-0 transition-all duration-1000" />
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
          "relative z-10 w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl shadow-2xl",
          " p-6 sm:p-8",
          "space-y-6"
        )}
      >
        <h1
          className={cn(
            "text-3xl sm:text-4xl font-bold text-center text-primary/80",
            "mb-4 sm:mb-6"
          )}
        >
          Create your account
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      "text-white/90 block mb-2 sm:mb-3",
                      "text-sm sm:text-base"
                    )}
                  >
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      type="text"
                      className={cn(
                        "shadow-inner shadow-black/20",
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
                        "shadow-inner shadow-black/20",
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
              render={({ field }) => (
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
                    <Input
                      placeholder="Enter your password"
                      {...field}
                      type="password"
                      className={cn(
                        "bg-black/20 text-white ",
                        "shadow-inner shadow-black/20",
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
            <Button
              type="submit"
              className={cn(
                "w-full bg-secondary",
                "text-white font-semibold py-2.5 sm:py-3.5",
                "rounded-full hover:bg-secondary/80",
                "transition-all duration-300 shadow-lg hover:shadow-xl",
                "text-base sm:text-lg"
              )}
            >
              Sign In
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
          Already have an account?
          <a
            href="/sign-in"
            className={cn(
              "text-green-300 hover:text-green-200 font-semibold px-1",
              "transition-colors duration-200"
            )}
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

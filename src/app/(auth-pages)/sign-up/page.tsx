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

// Define the schema for the form using Zod
const signInSchema = z.object({
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
      alert("Sign in successful! (Simulated)");
    } catch (error) {
      console.error("Sign in failed:", error);
      alert("Sign in failed. Please check your credentials and try again.");
    }
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center min-h-screen ",
        "p-4 sm:p-8"
      )}
    >
      <div
        className={cn(
          "w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl shadow-2xl",
          "border border-white/10 p-6 sm:p-8",
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
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;

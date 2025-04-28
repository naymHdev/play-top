"use client";

import { useForm } from "react-hook-form";
import PTContainer from "./ui/PTContainer";
import { TfiEmail } from "react-icons/tfi";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MdOutlineArrowOutward } from "react-icons/md";

// Define the types for the form fields
type NewsletterFormData = {
  email: string;
};

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>();

  const onSubmit = (data: NewsletterFormData) => {
    console.log("Subscribed email:", data.email);
    reset(); // Reset form after submission
  };

  return (
    <div className="mt-16 bg-secondary py-10">
      <PTContainer>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Icon and Text */}
          <div className="flex gap-4 text-left">
            <TfiEmail className="text-black" size={55} />
            <div>
              <h2 className="text-black text-3xl font-bold">Newsletters</h2>
              <p className="text-black opacity-80 text-lg">
                Join Business Name newsletter for latest <br /> news and
                updates!!!
              </p>
            </div>
          </div>

          {/* Right: Input and Button */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex sm:flex-row items-center gap-2 lg:gap-4 w-full md:w-auto"
          >
            <div className="w-full">
              <Input
                type="email"
                placeholder="Enter Email Address"
                className="w-full text-lg px-2 sm:w-[550px] h-[52px] bg-white text-black border-black"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="bg-black text-white hover:bg-gray-800 hover:cursor-pointer gap-2 lg:w-[248px] h-[52px]"
            >
              Subscribe <MdOutlineArrowOutward size={18} />
            </Button>
          </form>
        </div>
      </PTContainer>
    </div>
  );
};

export default Newsletter;

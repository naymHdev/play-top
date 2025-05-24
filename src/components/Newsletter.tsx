"use client";

import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { postNewsLetter } from "@/services/newsletter";
import toast from "react-hot-toast";
import ev from "../assets/icons/email-Vector.png";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import nbg from "../assets/images/news-masking.png";

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

  const onSubmit = async (data: NewsletterFormData) => {
    reset();

    const userEmail = {
      data: {
        email: data.email,
      },
    };
    // console.log("Subscribed email:", userEmail);
    try {
      const res = await postNewsLetter(userEmail);
      // console.log(res);
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      // console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="relative bg-[#171717] rounded-2xl px-8 py-10 overflow-hidden">
        {/* Background Image */}
        <Image
          src={nbg}
          alt="Newsletter Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay to darken background if needed */}
        <div className="absolute inset-0 bg-black opacity-50 z-0" />

        {/* Content Section */}
        <div className="relative z-10">
          {/* Top: Icon and Text */}
          <div className="flex flex-col items-start space-y-5">
            <div className="flex items-center space-x-2">
              <Image src={ev} alt="Email Icon" />
              <p className="font-semibold uppercase text-white leading-5">
                subscribe our newsletter
              </p>
            </div>
            <h1 className="text-[32px] font-extrabold leading-[42px] text-white uppercase">
              Never miss an update.
            </h1>
            <p className="font-normal text-[18px] leading-[26px] text-white">
              Subscribe for latest game news.
            </p>
          </div>

          {/* Bottom: Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
            <div className="w-full rounded-full">
              <Input
                type="email"
                placeholder="Enter Email Address"
                className="rounded-full py-6 px-4 bg-card border border-neutral-700 focus:bg-transparent"
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
              className="bg-transparent w-full rounded-full border border-white mt-5 py-6 font-bold leading- uppercase hover:bg-transparent hover:cursor-pointer"
            >
              Subscribe <GoArrowRight className="text-white text-7xl size-5" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newsletter;

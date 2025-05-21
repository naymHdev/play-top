"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import email from "../../../assets/icons/email-Vector.png";
import Image from "next/image";

export default function EmailSubscribeCard() {
  return (
    <div className="mt-16 bg-[#424242] text-white p-6 md:p-10 lg:p-14 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Left Text Content */}
      <div>
        <h2 className="text-4xl font-bold mb-4 text-white">Get Rewarded!!!</h2>
        <p className="text-gray-300 text-lg leading-7 font-normal">
          Drop your email for a shot at Steam Giftcards, Roblox Gift Cards and
          New Game Updates.
        </p>
      </div>

      {/* Form Section */}
      <form className="flex flex-col gap-4 w-full">
        <div className="relative w-full">
          <Image
            src={email}
            alt="Email"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 placeholder:text-gray-100"
            width={24}
            height={24}
          />
          <Input
            type="email"
            placeholder="Enter your email"
            className="pl-9 bg-[#3A3A3A] border-none focus:border-none py-6 w-full placeholder:text-gray-100"
          />
        </div>
        <Button
          type="submit"
          className="bg-black hover:bg-gray-900 text-white w-6/12 lg:w-4/12 py-6"
        >
          Submit <ArrowRight />
        </Button>
      </form>
    </div>
  );
}

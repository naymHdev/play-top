"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaFacebook, FaRegUser, FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import authIcon from "@/assets/images/kitty-auth.png";
import Image from "next/image";
import { signIn } from "next-auth/react";

const AuthModal = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-[140px] h-[48px] bg-card font-medium text-primary rounded-full flex items-center gap-2 hover:bg-card hover:cursor-pointer">
            <FaRegUser /> Sign In
          </Button>
        </DialogTrigger>
        <DialogContent className="[&>button]:hidden bg-white border-none backdrop-blur-md py-10 top-80">
          <div className=" flex flex-col items-center justify-center gap-4 text-center">
            <Image
              src={authIcon}
              alt="Auth Icon"
              className=" h-auto object-cover"
            />
            <h2 className="font-bold text-xl text-gray-800">
              Sign up on Own Game
            </h2>
            <p className=" text-gray-600 font-normal text-lg">
              Join our community of friendly folks discovering and sharing the
              latest products in tech.
            </p>
            <button
              onClick={() =>
                signIn("google", {
                  callbackUrl: "http://localhost:3000",
                })
              }
              className="flex items-center gap-2 border text-black rounded-sm px-10 py-3 hover:cursor-pointer"
            >
              <FcGoogle className=" size-5" /> Sign in with Google
            </button>
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() =>
                  signIn("twitter", {
                    callbackUrl: "http://localhost:3000",
                  })
                }
                className=" border rounded-sm px-5 py-3 hover:cursor-pointer"
              >
                <FaXTwitter className=" text-black size-5" />
              </button>
              <button
                onClick={() =>
                  signIn("facebook", {
                    callbackUrl: "http://localhost:3000",
                  })
                }
                className=" border rounded-sm px-5 py-3 hover:cursor-pointer"
              >
                <FaFacebook className=" text-sky-700 size-5" />
              </button>
            </div>
            <p className=" text-gray-600 font-normal text-sm">
              We'll never post to any of your accounts without your permission.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthModal;

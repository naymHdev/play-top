"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaFacebook, FaRegUser, FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import authIcon from "@/assets/logo/header-logo.png";
import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";

const AuthModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="[&>button]:hidden bg-card border-none backdrop-blur-md py-10 top-80">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <Image
              src={authIcon}
              alt="Auth Icon"
              className="h-auto object-cover"
              width={200}
              height={200}
            />
            {/* <h2 className="font-bold text-xl text-gray-200">
              Sign up on Own Game
            </h2> */}
            <p className="text-gray-200 font-normal text-lg mb-2">
              Sign up to upvote, submit games, chance to win Steam gift cards
              and for new game updates.
            </p>
            <button
              onClick={() =>
                signIn("google", {
                  callbackUrl: "https://gamehunt.org",
                })
              }
              className="flex items-center gap-2 border border-gray-600 text-gray-200 rounded-sm px-10 py-3 hover:cursor-pointer hover:border-gray-400"
            >
              <FcGoogle className="size-5" /> Sign in with Google
            </button>
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() =>
                  signIn("twitter", {
                    callbackUrl: "https://gamehunt.org",
                  })
                }
                className="border border-gray-600 rounded-sm px-5 py-3 hover:cursor-pointer hover:border-gray-400"
              >
                <FaXTwitter className="text-gray-200 size-5" />
              </button>
              <button
                onClick={() =>
                  signIn("facebook", {
                    callbackUrl: "https://gamehunt.org",
                  })
                }
                className="border border-gray-600 rounded-sm px-5 py-3 hover:cursor-pointer hover:border-gray-400"
              >
                <FaFacebook className="text-sky-400 size-5" />
              </button>
            </div>
            <p className="text-gray-400 font-normal text-sm">
              We'll never post to any of your accounts without your permission.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthModal;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { FaPlus, FaRegCircleUser, FaRegUser } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { TUserProps } from "@/types/user";
import { useUser } from "@/contexts/UserContext";
import { logout } from "@/services/auth";
import { signOut } from "next-auth/react";

const MobileNavbar = ({ session }: { session: TUserProps | null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setIsLoading } = useUser();
  const router = useRouter();
  const toggleNavbar = () => setIsOpen((prev) => !prev);

  const handleLogout = async () => {
    await logout();
    await signOut({ callbackUrl: "/" });
    setIsLoading(true);

    router.push("/");
  };

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold">
          Logo
        </Link>

        <button
          onClick={toggleNavbar}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          className="text-2xl focus:outline-none hover:cursor-pointer lg:hidden"
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {/* Mobile Slide Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-black shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={toggleNavbar}
              aria-label="Close Menu"
              className="text-2xl focus:outline-none hover:cursor-pointer"
            >
              <AiOutlineClose />
            </button>
          </div>

          <nav className="flex flex-col items-center p-6 gap-6">
            {/* User Actions */}
            {(user && user.role === "USER") || session?.user?.email ? (
              <div className="flex items-center justify-end gap-4 w-full mt-4">
                {/* Avatar */}
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="cursor-pointer">
                        <Avatar>
                          <AvatarImage src={`${session?.user?.image}`} />
                          <AvatarFallback>
                            <FaRegCircleUser />
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      sideOffset={8}
                      className="border-none bg-card text-primary"
                    >
                      <DropdownMenuItem asChild>
                        <Link className=" hover:cursor-pointer" href="/profile">
                          Profile
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={handleLogout}
                        className="hover:text-red-600 hover:cursor-pointer"
                      >
                        Log out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                {/* Notification */}
                <div className="relative">
                  <div className="flex items-center justify-center rounded-full bg-card p-3">
                    <IoNotificationsOutline
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
                </div>
              </div>
            ) : (
              <Link href="/sign-in" className="w-full mt-4">
                <Button className="w-full h-12 rounded-full bg-card text-primary font-medium flex items-center justify-center gap-2 hover:bg-card">
                  <FaRegUser /> Sign In
                </Button>
              </Link>
            )}
            {/* Search */}
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search"
                className="w-full pl-4 pr-10 py-6 rounded-full bg-card text-primary border-none"
              />
              <FiSearch
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-primary opacity-70"
              />
            </div>

            {/* Submit Game Button */}
            <Link href="/submit-product" className="w-full">
              <Button className="w-full h-12 rounded-full bg-secondary text-primary font-medium flex items-center justify-center gap-2">
                Submit Game
                <FaPlus />
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MobileNavbar;

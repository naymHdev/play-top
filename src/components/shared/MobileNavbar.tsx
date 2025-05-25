"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { FaPlus, FaRegCircleUser } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { useUser } from "@/contexts/UserContext";
import { logout } from "@/services/auth";
import { signOut } from "next-auth/react";

import AuthModal from "../modules/auth/AuthModal";
import { Button } from "../ui/button";
import { TUserProps } from "@/types/user";
import { useRouter } from "next/navigation";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Searchbar from "./Searchbar";
import { Search } from "lucide-react";
import logo from "../../assets/logo/header-logo.png";
import Image from "next/image";

interface MobileNavbarProps {
  session: TUserProps | null;
}

const AvatarDropdown: React.FC<{
  session: TUserProps | null;
  onLogout: () => Promise<void>;
}> = ({ session, onLogout }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button
        aria-label="User menu"
        className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1"
      >
        <Avatar className="w-8 h-8">
          <AvatarImage
            src={session?.user?.image ?? undefined}
            alt="User avatar"
          />
          <AvatarFallback>
            <FaRegCircleUser />
          </AvatarFallback>
        </Avatar>
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="end"
      sideOffset={8}
      className="bg-card text-primary border-none min-w-[140px]"
    >
      <DropdownMenuItem asChild>
        <Link href="/profile" className="block w-full py-1 px-2">
          Profile
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem
        onClick={onLogout}
        className="text-red-600 hover:text-red-700 cursor-pointer py-1 px-2"
      >
        Log out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const MobileNavbar: React.FC<MobileNavbarProps> = ({ session }) => {
  const { user, setIsLoading } = useUser();

  const router = useRouter();

  const handleLogout = useCallback(async () => {
    await logout();
    await signOut({ callbackUrl: "/" });
    setIsLoading(true);
    router.push("/");
  }, [router, setIsLoading]);

  const isLoggedIn = Boolean(
    (user && user.role === "USER") || session?.user?.email
  );

  return (
    <>
      <header className="bg-black text-white fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div>
            <Link href={"/"}>
              <Image src={logo} alt="logo" width={110} height={110} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Button */}
            <Dialog>
              <DialogTrigger>
                <Search className=" size-5 text-primary" />
              </DialogTrigger>
              <DialogContent className="[&>button]:hidden border-none shadow-none bg-transparent absolute top-24">
                <Searchbar />
              </DialogContent>
            </Dialog>

            {isLoggedIn ? (
              <>
                <button
                  type="button"
                  aria-label="Notifications"
                  className="relative p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary transition"
                >
                  <IoNotificationsOutline size={20} className="text-primary" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-green-500 ring-1 ring-black" />
                </button>
                <AvatarDropdown session={session} onLogout={handleLogout} />
              </>
            ) : (
              <AuthModal />
            )}

            <Link href="/submit-product" className="flex-shrink-0">
              <Button className="h-8 px-3 rounded-full bg-secondary text-primary font-medium flex items-center justify-center gap-1 text-sm">
                Submit <FaPlus size={14} />
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default MobileNavbar;

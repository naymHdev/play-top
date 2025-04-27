"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import PTContainer from "../ui/PTContainer";
import {
  FaPlus,
  FaRegUser,
  FaHome, // Added Home icon
} from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt4 } from "react-icons/hi"; // Hamburger Menu icon
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";

// Renamed to MobileNavbar for clarity
const MobileNavbar = () => {
  const activeUser = false;

  // You might need state for modals/drawers triggered by icons
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* --- Top Bar --- */}
      <div className="py-3 sticky top-0 left-0 right-0 bg-background border-b z-40">
        {" "}
        {/* Sticky top bar */}
        <PTContainer>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div>
              <Link href={"/"}>
                {/* Consider using a smaller logo/icon on mobile */}
                <h1 className="text-2xl font-bold text-primary">Logo</h1>
              </Link>
            </div>

            {/* Right side Icons (e.g., Search, Menu) */}
            <div className="flex items-center gap-2">
              {/* Search Icon - Could trigger a modal or navigate to a search page */}
              <Button
                variant="ghost"
                size="icon"
                className="text-primary"
                onClick={() => {
                  /* Open Search Modal or Navigate */
                }}
              >
                <FiSearch size={20} />
              </Button>
              {/* Hamburger Menu Icon - Could trigger a sidebar/drawer */}
              <Button
                variant="ghost"
                size="icon"
                className="text-primary"
                onClick={() => {
                  /* Open Menu Drawer */
                }}
              >
                <HiOutlineMenuAlt4 size={22} />
              </Button>
            </div>
          </div>
        </PTContainer>
      </div>

      {/* --- Bottom Navigation Bar --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t py-2 px-4 z-50">
        <div className="flex items-center justify-around">
          {/* Home Link */}
          <Link href="/">
            <Button
              variant="ghost"
              className="flex flex-col items-center h-auto text-primary p-1"
            >
              <FaHome size={22} />
              <span className="text-xs mt-1">Home</span>
            </Button>
          </Link>

          {/* Search Link (Example: linking to a dedicated search page) */}
          <Link href="/search">
            <Button
              variant="ghost"
              className="flex flex-col items-center h-auto text-primary p-1"
            >
              <FiSearch size={22} />
              <span className="text-xs mt-1">Search</span>
            </Button>
          </Link>

          {/* Submit Game Link */}
          <Link href="/submit-product">
            <Button
              variant="ghost"
              className="flex flex-col items-center h-auto text-primary p-1"
            >
              <FaPlus size={22} />
              <span className="text-xs mt-1">Submit</span>
            </Button>
          </Link>

          {/* Conditional Rendering: Notifications or Sign In */}
          {activeUser ? (
            <>
              {/* Notifications Link (Example: linking to a notifications page) */}
              <Link href="/notifications">
                <Button
                  variant="ghost"
                  className="relative flex flex-col items-center h-auto text-primary p-1"
                >
                  <IoNotificationsOutline size={24} />
                  {/* Green Dot - Consider if notifications are unread */}
                  <span className="absolute top-0 right-1 block h-2 w-2 rounded-full bg-green-500 ring-1 ring-background" />
                  <span className="text-xs mt-1">Alerts</span>
                </Button>
              </Link>

              {/* Profile Link (Example: linking to a profile page) */}
              <Link href="/profile">
                <Button
                  variant="ghost"
                  className="flex flex-col items-center h-auto text-primary p-1"
                >
                  {/* Using Avatar directly might be too large, consider an icon or smaller avatar */}
                  <Avatar className="w-6 h-6 mb-0.5">
                    {/* Smaller Avatar */}
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="User Avatar"
                    />
                    <AvatarFallback className="text-xs">
                      <FaRegCircleUser size={20} />
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-xs mt-1">Profile</span>
                </Button>
              </Link>
            </>
          ) : (
            // Sign In Link
            <Link href="/sign-in">
              <Button
                variant="ghost"
                className="flex flex-col items-center h-auto text-primary p-1"
              >
                <FaRegUser size={20} />
                <span className="text-xs mt-1">Sign In</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;

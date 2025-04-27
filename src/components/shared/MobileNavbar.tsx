"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Logo
        </Link>
        <button
          onClick={toggleNavbar}
          className="text-2xl focus:outline-none lg:hidden hover:cursor-pointer"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {/* Mobile Menu (Slide-in) */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-black shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={toggleNavbar}
              className="text-2xl focus:outline-non hover:cursor-pointer"
              aria-label="Close Menu"
            >
              <AiOutlineClose />
            </button>
          </div>
          <nav className="flex flex-col items-start p-4">
            <Link href="/" className="block py-2 text-lg hover:text-gray-300">
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-lg hover:text-gray-300"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block py-2 text-lg hover:text-gray-300"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-lg hover:text-gray-300"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Desktop Menu (Hidden on mobile) */}
        <nav className="hidden lg:flex space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-300">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default MobileNavbar;

"use client";

import PTContainer from "../ui/PTContainer";
import {
  FaArrowRight,
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaY,
  FaYoutube,
} from "react-icons/fa6";
import Link from "next/link";
import { Input } from "../ui/input";
import PTButton from "../ui/PTButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="mt-10 bg-primary text-black">
        <PTContainer>
          <div className="mt-16 grid grid-cols-7 gap-8 lg:gap-56 ">
            {/* ------------------ Logo ---------------- */}
            <div className="  col-span-full md:col-span-2">
              <h2 className="text-4xl font-bold">Logo</h2>
              <p className="leading-normal mt-6">
                To advertise your game or for outreach article, reach us at
                <strong className="px-1">email@gmail.com</strong>
              </p>
              <div className=" mt-6 flex gap-4 text-primary">
                <a href="#">
                  <FaXTwitter size={30} />
                </a>
                <a href="#">
                  <FaDiscord size={30} />
                </a>
              </div>
            </div>

            {/* ------------------ Subscribe ---------------- */}
            <div className=" col-span-full md:col-span-3 md:mt-8">
              <h2 className=" text-5xl font-bold leading-8">Get Rewarded!!!</h2>
              <div className="mt-10 flex items-center gap-3">
                <div>
                  <Input
                    className=" rounded-full py-4 px-4 border-card bg-transparent w-full md:w-[250px]"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <PTButton
                    className=" bg-secondary text-white py-2 px-10 rounded-full font-semibold"
                    label="Submit"
                    icon={<FaArrowRight />}
                  />
                </div>
              </div>
            </div>

            {/* ------------------  Socials  ---------------- */}
            <div className=" col-span-full md:col-span-2">
              <div className="flex gap-4">
                <div>
                  <ul className="flex flex-col gap-5 mt-3 md:mt-6">
                    <li className=" flex items-center gap-2 font-normal text-[20px] leading-5">
                      <FaXTwitter />
                      Twitter
                    </li>
                    <li className=" flex items-center gap-2 font-normal text-[20px] leading-5">
                      <FaLinkedin />
                      LinkedIn
                    </li>
                    <li className=" flex items-center gap-2 font-normal text-[20px] leading-5">
                      <FaYoutube />
                      YouTube
                    </li>
                    <li className=" flex items-center gap-2 font-normal text-[20px] leading-5">
                      <FaInstagram />
                      Instagram
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col gap-2 mt-3 md:mt-6">
                    <Link
                      href={"/terms-of-service"}
                      className="font-medium hover:underline"
                    >
                      Terms Of Service
                    </Link>
                    <Link href="#" className="font-medium hover:underline">
                      Privacy Policy
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-40 my-10">
            <div className="text-sm font-medium text-end">
              © {currentYear} Business Name. All Rights Reserved.
            </div>
          </div>
        </PTContainer>
      </div>
    </>
  );
};

export default Footer;

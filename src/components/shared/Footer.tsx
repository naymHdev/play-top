"use client";

import PTContainer from "../ui/PTContainer";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { Separator } from "../ui/separator";
import Newsletter from "../Newsletter";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Newsletter />
      <PTContainer>
        <div className=" mt-16 grid grid-cols-3 gap-56">
          <div className="  col-span-full md:col-span-1">
            <h2 className=" text-primary text-4xl font-bold">Logo</h2>
            <p className=" text-foreground leading-normal mt-6">
              This is your platform to showcase your work, grow a community, and
              find your next favorite game. Submit a link or host it
              here—whatever works for you. Indie spirit meets seamless sharing,
              with discovery at its heart.
            </p>
            <div className=" mt-6 flex gap-4 text-primary">
              <FaXTwitter size={30} />
              <FaDiscord size={30} />
            </div>
          </div>
          <div className=" col-span-full md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div>
                <h2 className=" text-primary text-lg font-semibold">Links</h2>
                <ul className="flex flex-col gap-3 mt-6">
                  <li className=" text-foreground font-medium">Home</li>
                  <li className=" text-foreground font-medium">About Us</li>
                  <li className=" text-foreground font-medium">Products</li>
                  <li className=" text-foreground font-medium">Contact</li>
                </ul>
              </div>
              <div>
                <h2 className=" text-primary text-lg font-semibold">Links</h2>
                <ul className="flex flex-col gap-3 mt-6">
                  <li className=" text-foreground font-medium">News</li>
                  <li className=" text-foreground font-medium">Forums</li>
                  <li className=" text-foreground font-medium">Advertise</li>
                </ul>
              </div>
              <div>
                <h2 className=" text-primary text-lg font-semibold">Links</h2>
                <ul className="flex flex-col gap-3 mt-6">
                  <li className=" text-foreground font-medium">
                    Terms Of Service
                  </li>
                  <li className=" text-foreground font-medium">
                    Privacy Policy
                  </li>
                  <li className=" text-foreground font-medium">
                    Do not sell my info
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=" my-5">
          <Separator className="my-6 opacity-30" />
          <div className=" text-foreground text-sm font-medium text-center">
            © {currentYear} Business Name. All Rights Reserved.
          </div>
        </div>
      </PTContainer>
    </>
  );
};

export default Footer;

"use client";

import PTContainer from "../ui/PTContainer";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { Separator } from "../ui/separator";
import Newsletter from "../Newsletter";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const path = usePathname();
  const currentYear = new Date().getFullYear();

  const shouldShowNewsletter = ![
    "/submit-product",
    "/sign-up",
    "/sign-in",
  ].includes(path);

  return (
    <>
      {shouldShowNewsletter && <Newsletter />}

      <PTContainer>
        <div className=" mt-16 grid grid-cols-3 gap-8 lg:gap-56 ">
          <div className="  col-span-full md:col-span-1">
            <h2 className=" text-primary text-4xl font-bold">Logo</h2>
            <p className=" text-foreground leading-normal mt-6">
              This is your platform to showcase your work, grow a community, and
              find your next favorite game. Submit a link or host it
              here—whatever works for you. Indie spirit meets seamless sharing,
              with discovery at its heart.
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
          <div className=" col-span-full md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
              <div>
                <h2 className=" text-primary text-lg font-semibold">Links</h2>
                <ul className="flex flex-col gap-3 mt-3 md:mt-6">
                  <Link
                    href={"/"}
                    className=" text-foreground font-medium hover:underline hover:text-primary"
                  >
                    Home
                  </Link>
                  <li className=" text-foreground font-medium hover:underline hover:text-primary">
                    About Us
                  </li>
                  <li className=" text-foreground font-medium hover:underline hover:text-primary">
                    Products
                  </li>
                  <li className=" text-foreground font-medium hover:underline hover:text-primary">
                    Contact
                  </li>
                </ul>
              </div>
              <div>
                <h2 className=" text-primary text-lg font-semibold">Links</h2>
                <ul className="flex flex-col gap-3 mt-3 md:mt-6">
                  <li className=" text-foreground font-medium hover:underline hover:text-primary">
                    News
                  </li>
                  <li className=" text-foreground font-medium hover:underline hover:text-primary">
                    Forums
                  </li>
                  <li className=" text-foreground font-medium hover:underline hover:text-primary">
                    Advertise
                  </li>
                </ul>
              </div>
              <div>
                <h2 className=" text-primary text-lg font-semibold">Links</h2>
                <ul className="flex flex-col gap-3 mt-3 md:mt-6">
                  <Link href={'/terms-of-service'} className=" text-foreground font-medium hover:underline hover:text-primary">
                    Terms Of Service
                  </Link>
                  <Link href={'/privacy-policy'} className=" text-foreground font-medium hover:underline hover:text-primary">
                    Privacy Policy
                  </Link>
                  <li className=" text-foreground font-medium hover:underline hover:text-primary">
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

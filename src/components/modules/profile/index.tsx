"use client";

import { FaExternalLinkAlt } from "react-icons/fa";
import {
  FaInstagram,
  FaReddit,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import ProductTab from "./ProductTab";

const ProfileDetails = () => {
  return (
    <>
      <div className=" mt-24 grid-cols-1 grid lg:grid-cols-6 gap-8">
        {/* ----------- User Bio ----------- */}
        <div className=" col-span-4">
          <h4 className=" text-foreground font-semibold uppercase text-sm">
            BIO
          </h4>
          <p className=" font-normal text-primary/90 text-lg leading-7 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ipsum tellus, volutpat in eros ac, rhoncus vehicula nibh. Proin quis
            dui dui. Nullam laoreet facilisis tempus. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Aliquam nibh sem, molestie non ex eu, consequat facilisis lacus. Ut
            sollicitudin dictum elit, ac hendrerit tortor aliquam sit amet.
            Suspendisse ultrices turpis vel ligula mollis pulvinar. Donec
            blandit eros nulla, quis lacinia lectus ullamcorper sit amet. In hac
            habitasse platea dictumst. Cras vel accumsan odio, ac elementum
            lectus. Curabitur libero augue, rhoncus ac elit vitae, feugiat
            suscipit erat. Sed dictum ipsum non felis cursus, quis mattis sapien
            congue.
          </p>
        </div>

        {/* ----------- User Links ----------- */}
        <div className=" col-span-2">
          <h4 className=" text-foreground font-semibold uppercase text-sm">
            Links
          </h4>
          <div className="mt-2 space-y-2">
            <div className="flex items-center justify-between rounded-md bg-[#111111]">
              <div className=" flex">
                <div className=" flex items-center gap-2">
                  <div className="text-xl p-3 bg-[#202020] rounded-l-md">
                    <FaReddit />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    Reddit
                  </p>
                </div>
              </div>
              <div className=" px-3">
                <a target="_blank" rel="noopener noreferrer" href="#">
                  <FaExternalLinkAlt size={16} className=" text-primary/80" />
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-md bg-[#111111]">
              <div className=" flex">
                <div className=" flex items-center gap-2">
                  <div className="text-xl p-3 bg-[#202020] rounded-l-md">
                    <FaInstagram />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    Instagram
                  </p>
                </div>
              </div>
              <div className=" px-3">
                <a target="_blank" rel="noopener noreferrer" href="#">
                  <FaExternalLinkAlt size={16} className=" text-primary/80" />
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-md bg-[#111111]">
              <div className=" flex">
                <div className=" flex items-center gap-2">
                  <div className="text-xl  p-3 bg-[#202020] rounded-l-md">
                    <FaXTwitter />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    Twitter
                  </p>
                </div>
              </div>
              <div className=" px-3">
                <a target="_blank" rel="noopener noreferrer" href="#">
                  <FaExternalLinkAlt size={16} className=" text-primary/80" />
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-md bg-[#111111]">
              <div className=" flex">
                <div className=" flex items-center gap-2">
                  <div className="text-xl p-3 bg-[#202020] rounded-l-md">
                    <FaYoutube />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    Youtube
                  </p>
                </div>
              </div>
              <div className=" px-3">
                <a target="_blank" rel="noopener noreferrer" href="#">
                  <FaExternalLinkAlt size={16} className=" text-primary/80" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------- User Games ----------- */}
      <ProductTab />
    </>
  );
};

export default ProfileDetails;

"use client";

import PTContainer from "../ui/PTContainer";
import {
  FaArrowRight,
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Link from "next/link";
import { Input } from "../ui/input";
import PTButton from "../ui/PTButton";
import Image from "next/image";
import email from "../../assets/icons/email-black.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { postNewsLetter } from "@/services/newsletter";
import { ReactNode, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BiSolidErrorCircle } from "react-icons/bi";

type Inputs = {
  email: string;
  exampleRequired: string;
};

const Footer = () => {
  const [message, setMessage] = useState<ReactNode>("");
  const currentYear = new Date().getFullYear();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const email = data.email;
    console.log(email);

    try {
      const res = await postNewsLetter({ data: { email } });

      if (res.success) {
        setMessage(
          <>
            <FaCheckCircle className="text-green-600 w-6 h-6 inline mr-2" />
            {res.message}
          </>
        );
      } else {
        setMessage(
          <>
            <BiSolidErrorCircle className="text-red-600 w-6 h-6 inline" />
            {res.message}
          </>
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className=" bg-primary text-black">
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-10 flex items-center gap-3">
                  <div className="relative w-full">
                    <Image
                      src={email}
                      alt="Email"
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                      width={24}
                      height={24}
                    />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="pl-9 py-6 w-full placeholder:text-gray-700 border border-card rounded-full shadow-none"
                      {...register("email")}
                    />
                    {errors.email && (
                      <span className=" text-red-600">
                        Email must be required.
                      </span>
                    )}
                  </div>
                  <div>
                    <PTButton
                      type="submit"
                      className=" bg-secondary text-white py-3 px-10 rounded-full font-semibold"
                      label="Submit"
                      icon={<FaArrowRight />}
                    />
                  </div>
                </div>
              </form>
              <p className=" text-black text-center mt-6">{message}</p>
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

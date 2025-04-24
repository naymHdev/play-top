import { StaticImageData } from "next/image";
import { ReactElement } from "react";

type TSocialLinks = {
  icon: ReactElement;
  name: string;
  link: string;
};

export type TGame = {
  _id: string;
  author: string;
  title: string  | undefined;
  subTitle?: string;
  description: string;
  image: string | StaticImageData;
  thumbnail?: string | StaticImageData | undefined;
  categories: string[];
  platform: string[] | StaticImageData[];
  price: number;
  socialLinks: TSocialLinks[];
};

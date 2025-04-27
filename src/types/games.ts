import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
import { ReactElement } from "react";

type TSocialLinks = {
  icon: ReactElement;
  name: string;
  link: string;
};

export type TImages = string | StaticImport | undefined;

export type TGame = {
  _id: string;
  author: string;
  title: string | undefined;
  subTitle?: string;
  description: string;
  image: TImages[];
  thumbnail?: string | StaticImport;
  categories: string[];
  platform: StaticImageData[];
  price: number;
  socialLinks: TSocialLinks[];
};

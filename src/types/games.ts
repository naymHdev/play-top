import { ReactElement } from "react";

type TSocialLinks = {
  icon: ReactElement;
  name: string;
  link: string;
};

export type TImages = string | undefined;

export type TGame = {
  userId?: { email: string };
  _id: string;
  id?: string;
  author: string;
  title: string | undefined;
  subTitle?: string;
  description: string;
  image: string[] | undefined;
  thumbnail?: string;
  categories: string[];
  platform: string[];
  price: number;
  socialLinks: TSocialLinks[];
  gameStatus: "upcoming" | "released";
};

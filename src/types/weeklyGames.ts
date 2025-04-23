import { StaticImageData } from "next/image";

export type TWeeklyGames = {
  _id: string;
  title: string;
  image: string | StaticImageData;
  categories: string[];
  platform: string[] | StaticImageData[];
  price: number;
};

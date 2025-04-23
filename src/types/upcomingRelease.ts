import { StaticImageData } from "next/image";

export type TUpcomingGames = {
  _id: string;
  title: string;
  image: string | StaticImageData;
  price: number;
};

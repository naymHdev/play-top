import { StaticImageData } from "next/image";

export type TUpcomingGames = {
  _id: string;
  title: string;
  uc_bg?: string | StaticImageData;
  uc_game_image?: string | StaticImageData;
  price: number;
};

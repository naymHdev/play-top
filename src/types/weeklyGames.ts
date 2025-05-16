export type TWeeklyGames = {
  _id: string;
  title: string;
  image: string;
  thumbnail: string | undefined;
  categories: string[];
  platform: string[];
  price: number;
  socialLinks: {
    name: string;
    link: string;
  }[];
};

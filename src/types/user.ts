import { z } from "zod";

export type AuthPayload = {
  data: {
    sub: string | null | undefined;
    name: string | null | undefined;
    email: string | null | undefined;
    image?: string | null | undefined;
  };
};

export type TUserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

export interface IUser {
  id?: string;
  name?: string;
  email: string;
  password: string;
  role: string;
  bio?: string;
  links?: string[];
  photo?: string;
  approvedUpdate: boolean;
  uploadedGame?: string[];
  isDeleted?: boolean;
}

export const profileUpdateSchema = z.object({
  name: z.string().optional(),
  userId: z.string().optional(),
  bio: z.string().optional(),
  photo: z.string().optional(),
  steamAccount: z.string().optional(),
  xAccount: z.string().optional(),
  linkedinAccount: z.string().optional(),
  redditAccount: z.string().optional(),
  instagramAccount: z.string().optional(),
});

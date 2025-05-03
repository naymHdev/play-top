import { z } from "zod";

export const socialLinkSchema = z.object({
  platform: z
    .enum(["steam", "linkedin", "reddit", "instagram", "x", "website"])
    .optional(),
  url: z.string().url("Invalid URL").optional(),
});

export const formSchema = z
  .object({
    gameTitle: z.string().min(1, "Title is required"),
    gameCategory: z.string({ required_error: "Category must be required" }),
    price: z.number().min(1, "Price is required"),
    steamAccount: z.string().optional(),
    linkedinAccount: z.string().optional(),
    redditAccount: z.string().optional(),
    instagramAccount: z.string().optional(),
    xAccount: z.string().optional(),
    socialLinks: z
      .array(socialLinkSchema)
      .min(1, "At least one social link is required")
      .optional(),
    status: z.enum(["active", "upcoming"], {
      required_error: "Status is required",
    }),
    publishDate: z.date().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.status === "upcoming" && !data.publishDate) {
      ctx.addIssue({
        path: ["publishDate"],
        code: z.ZodIssueCode.custom,
        message: "Publish date is required for upcoming games",
      });
    }
  });

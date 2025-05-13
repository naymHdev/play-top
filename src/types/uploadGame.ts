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
    platforms: z.array(z.string()).min(1, "At least one platform is required"),
    price: z.string().min(1, "Price is required"),
    steamAccount: z.string().url("Invalid URL").optional(),
    linkedinAccount: z.string().url("Invalid URL").optional(),
    redditAccount: z.string().url("Invalid URL").optional(),
    instagramAccount: z.string().url("Invalid URL").optional(),
    xAccount: z.string().url("Invalid URL").optional(),
    socialLinks: z
      .array(
        z.object({
          platform: z.string().nonempty("Platform is required"),
          url: z.string().url("Must be a valid URL"),
        })
      )
      .optional(),

    status: z.enum(["active", "upcoming"], {
      required_error: "Status is required",
    }),
    publishDate: z.date().optional(),
  })
  .superRefine((data, ctx) => {
    const allUrls = [
      data.steamAccount,
      data.linkedinAccount,
      data.redditAccount,
      data.instagramAccount,
      data.xAccount,
      ...(data.socialLinks?.map((l) => l.url) || []),
    ].filter((url) => !!url);

    if (allUrls.length === 0) {
      ctx.addIssue({
        path: ["steamAccount"],
        code: z.ZodIssueCode.custom,
        message: "At least one valid social link is required",
      });
    }

    if (data.status === "upcoming" && !data.publishDate) {
      ctx.addIssue({
        path: ["publishDate"],
        code: z.ZodIssueCode.custom,
        message: "Publish date is required for upcoming games",
      });
    }
  });

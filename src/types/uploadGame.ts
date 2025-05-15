import { z } from "zod";

export const SocialLinksSchema = z.object({
  name: z.string().min(1, "Social link name is required"),
  link: z.string().url("Must be a valid URL"),
});

export const formSchema = z
  .object({
    title: z.string().min(1, "Title is required"),
    subTitle: z
      .string()
      .max(200, "Subtitle cannot exceed 200 characters")
      .optional(),
    categories: z
      .array(z.string().min(1, "Category cannot be empty"))
      .min(1, "At least one category is required"),
    platform: z.array(z.string()).min(1, "At least one platform is required"),
    price: z.string().min(1, "Price is required"),
    socialLinks: z
      .array(
        z.object({
          name: z.string().nonempty("Platform is required"),
          link: z.string().url("Must be a valid URL"),
        })
      )
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

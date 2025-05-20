import { z } from "zod";

export const formSchema = z
  .object({
    title: z.string().min(1, "Title is required").optional(),
    description: z.string().min(1, "Description is required").optional(),
    platform: z
      .array(z.string())
      .min(1, "Select at least one platform")
      .optional(),
    price: z.number().min(1, "Price must be a positive number").optional(),
    gameStatus: z
      .enum(["active", "upcoming"], {
        required_error: "Status is required",
      })
      .optional(),
    upcomingDate: z.date().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.gameStatus === "upcoming" && !data.upcomingDate) {
      ctx.addIssue({
        path: ["upcomingDate"],
        code: z.ZodIssueCode.custom,
        message: "Publish date is required for upcoming games",
      });
    }
  });

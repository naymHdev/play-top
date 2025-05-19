"use client";

import {
  useForm,
  SubmitHandler,
  useFieldArray,
  FieldValues,
} from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PTButton from "@/components/ui/PTButton";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { updateProfile } from "@/services/profile";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type LinkItem = {
  name: string;
  link: string;
};

type FormValues = {
  userId: string;
  name: string;
  userName: string;
  bio: string;
  links: LinkItem[];
};

const ProfileUpdateForm = () => {
  const [imageFiles, setImageFiles] = useState<File | undefined>(undefined);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const router = useRouter();

  // Function to handle file upload
  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    setImageFiles(file);
  };
  // console.log("imageFiles", imageFiles);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      userId: "682ad95e4e8b478885041709",
      name: "Mr. Tomas",
      userName: "@tomas.s42",
      bio: "This is my updated bio, telling a bit about me.",
      links: [
        { name: "GitHub", link: "https://github.com/Xinagop5980" },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/xinagop5980" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "links",
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log("✅ Final JSON Payload:", JSON.stringify(data, null, 2));

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("photo", imageFiles as File);

    try {
      const res = await updateProfile(formData);
      // console.log("Response from API:", res);
      if (res.success) {
        toast.success(res.message);
        router.push("/profile");
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-3xl mx-auto -mt-40"
    >
      <div className="w-44 h-44 mx-auto relative  mt-4 bg-card rounded-full flex flex-col items-center justify-center text-center cursor-pointer">
        <input
          id="thumbnail"
          type="file"
          accept="image/jpeg,image/jpg,image/png"
          onChange={handleThumbnailChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />

        {imagePreview ? (
          <Avatar className="w-44 h-44">
            <AvatarImage src={imagePreview} alt="Avatar Preview" />
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>
        ) : (
          <>
            <MdOutlineCloudUpload className="text-white text-5xl mb-4 mt-6" />
          </>
        )}
      </div>

      <div>
        <Label htmlFor="userId">User ID</Label>
        <Input
          {...register("userId", { required: true })}
          className="mt-3 bg-card border-none py-6 px-4"
        />
        {errors.userId && (
          <p className="text-red-500 text-xs mt-1">This field is required</p>
        )}
      </div>

      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          {...register("name", { required: true })}
          className="mt-3 bg-card border-none py-6 px-4"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">This field is required</p>
        )}
      </div>

      <div>
        <Label htmlFor="userName">Username</Label>
        <Input
          {...register("userName", { required: true })}
          className="mt-3 bg-card border-none py-6 px-4"
        />
        {errors.userName && (
          <p className="text-red-500 text-xs mt-1">This field is required</p>
        )}
      </div>

      <div>
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          {...register("bio", { required: true })}
          className="mt-3 bg-card border-none py-6 px-4"
        />
        {errors.bio && (
          <p className="text-red-500 text-xs mt-1">This field is required</p>
        )}
      </div>

      {/* Dynamic Links Field */}
      <div>
        <Label>Links</Label>
        {fields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-2 gap-4 mt-4">
            <Input
              placeholder="Link name (e.g. GitHub)"
              {...register(`links.${index}.name`, { required: true })}
              className="bg-card border-none py-6 px-4"
            />
            <Input
              placeholder="https://example.com"
              {...register(`links.${index}.link`, { required: true })}
              className="bg-card border-none py-6 px-4"
            />
            <div className="col-span-2 text-right">
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-500 text-sm underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={() => append({ name: "", link: "" })}
          className="text-sm text-blue-500 underline mt-2"
        >
          + Add Link
        </button>
      </div>

      <div className="flex items-center justify-between mt-6">
        <Link href={"/profile"}>
          <PTButton label="Cancel" className="border rounded-full px-8 py-3" />
        </Link>
        <PTButton
          type="submit"
          label="Save Change"
          className="bg-secondary border-none rounded-full px-8 py-3"
        />
      </div>
    </form>
  );
};

export default ProfileUpdateForm;

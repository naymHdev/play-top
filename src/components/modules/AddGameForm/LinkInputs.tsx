import { Plus, X } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";

export default function LinkInputs() {
  const { control, register } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "socialLinks",
  });

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="flex gap-4">
          <input
            type="text"
            placeholder="name"
            {...register(`socialLinks.${index}.name`)}
            className="mt-1 py-3 px-3 rounded-md border-none bg-card"
          />
          <input
            type="url"
            placeholder="https://example.com"
            {...register(`socialLinks.${index}.url`)}
            className="w-full mt-1 py-3 px-2 rounded-md border-none bg-card"
          />
          <button type="button" onClick={() => remove(index)}>
            <X className=" text-red-800 size-7 hover:cursor-pointer" />
          </button>
        </div>
      ))}
      <button
        className=" flex items-center gap-1 bg-card rounded-md px-4 py-2 font-medium leading-6 text-primary hover:cursor-pointer"
        type="button"
        onClick={() => append({ name: "", link: "" })}
      >
        <Plus className="size-7" /> Add Link
      </button>
    </div>
  );
}

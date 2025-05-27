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
        <div
          key={field.id}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <input
            type="text"
            placeholder="name"
            {...register(`socialLinks.${index}.name`)}
            className="w-full sm:w-40 mt-1 py-3 px-3 rounded-md border-none bg-card"
          />
          <input
            type="url"
            placeholder="https://example.com"
            {...register(`socialLinks.${index}.link`)}
            className="w-full sm:flex-1 mt-1 py-3 px-2 rounded-md border-none bg-card"
          />
          <button
            type="button"
            onClick={() => remove(index)}
            className="mt-1 sm:mt-0"
            aria-label="Remove link"
          >
            <X className="text-red-600/50 w-6 h-6 hover:cursor-pointer" />
          </button>
        </div>
      ))}
      <button
        className="flex items-center gap-1 bg-card rounded-md px-4 py-2 font-medium leading-6 text-primary hover:cursor-pointer"
        type="button"
        onClick={() => append({ name: "", link: "" })}
      >
        <Plus className="w-7 h-7" /> Add Link
      </button>
    </div>
  );
}

import { useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";

type TUploadFileProps = {
  setIsThumbnail: any;
  setIsCover: any;
};

export default function UploadSection({
  setIsThumbnail,
}: TUploadFileProps) {
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    setIsThumbnail(file);
    // console.log("file", file);
  };

  return (
    <div className="space-y-8">
      {/* Thumbnail Upload */}
      <div>
        <label className="block text-lg font-semibold text-primary/80">
          Upload thumbnail
          <span className="text-red-600 font-medium px-1">*</span>
        </label>

        <p className="mt-1 text-sm font-normal text-foreground">
          Keep in mind that the first file you upload will appear in the cover
          preview.
        </p>

        <p className="mt-1 text-sm font-medium text-muted-foreground">
          Recommended size:{" "}
          <span className="text-primary font-semibold">1920×345 px</span> &nbsp;
          | &nbsp; Max file size:{" "}
          <span className="text-primary font-semibold">1.00 MB</span>
        </p>

        <div className="relative border border-dashed border-foreground mt-4 bg-card rounded-lg py-4 px-4 flex flex-col items-center justify-center text-center cursor-pointer">
          <input
            id="thumbnail"
            type="file"
            accept="image/jpeg,image/jpg,image/png"
            onChange={handleThumbnailChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />

          {thumbnailPreview ? (
            <img
              src={thumbnailPreview}
              alt="Thumbnail Preview"
              className="w-full h-48 object-cover rounded-lg"
            />
          ) : (
            <>
              <MdOutlineCloudUpload className="text-secondary text-5xl mb-4" />
              <div className="space-y-1">
                <p className="text-primary font-medium">
                  Drag your file here or{" "}
                  <label
                    htmlFor="thumbnail"
                    className="text-secondary underline cursor-pointer"
                  >
                    browse
                  </label>
                </p>
                <p className="text-sm text-foreground">
                  .jpg, .jpeg, .png — Max size: <strong>1.00 MB</strong> —
                  Dimension: <strong>1920×345 px</strong>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

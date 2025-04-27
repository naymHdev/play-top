import { useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";

export default function UploadSection() {
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {/* Thumbnail Upload */}
      <div>
        <label className="block text-lg font-semibold text-primary/80">
          Upload thumbnail
        </label>
        <p className="mt-1 text-sm font-normal text-foreground">
          Keep in mind that the first file you upload will appear in the cover
          preview.
        </p>
        <div className="relative border border-dashed border-foreground mt-4 bg-card rounded-lg py-4 px-4 flex flex-col items-center justify-center text-center cursor-pointer">
          <input
            id="picture"
            type="file"
            accept="image/*"
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
                  Drag your file(s) here or{" "}
                  <label
                    htmlFor="picture"
                    className="text-secondary underline cursor-pointer"
                  >
                    browse
                  </label>
                </p>
                <p className="text-sm text-foreground">
                  .jpg, .jpeg, .png, .avi — Max size: 50MB — Max files: 1
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Cover Upload */}
      <div className="mt-8">
        <label className="block text-lg font-semibold text-primary/80">
          Upload cover image
        </label>
        <p className="mt-1 text-sm font-normal text-foreground">
          Keep in mind that the first file you upload will appear in the cover
          preview.
        </p>
        <div className="relative border border-dashed border-foreground mt-4 bg-card rounded-lg py-4 px-4 flex flex-col items-center justify-center text-center cursor-pointer">
          <input
            id="cover"
            type="file"
            accept="image/*"
            onChange={handleCoverChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          {coverPreview ? (
            <img
              src={coverPreview}
              alt="Cover Preview"
              className="w-full h-48 object-cover rounded-lg"
            />
          ) : (
            <>
              <MdOutlineCloudUpload className="text-secondary text-5xl mb-4" />
              <div className="space-y-1">
                <p className="text-primary font-medium">
                  Drag your file(s) here or{" "}
                  <label
                    htmlFor="cover"
                    className="text-secondary underline cursor-pointer"
                  >
                    browse
                  </label>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";

export default function UploadSection() {
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);

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

  const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const files = e.target.files;
    if (files) {
      const selectedFiles = Array.from(files).slice(0, 5); // Max 5 files
      const previews = selectedFiles.map((file) => {
        return URL.createObjectURL(file);
      });
      setGalleryPreviews(previews);
    }
  };

  return (
    <div className="space-y-8">
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
            id="thumbnail"
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
                  Drag your file here or{" "}
                  <label
                    htmlFor="thumbnail"
                    className="text-secondary underline cursor-pointer"
                  >
                    browse
                  </label>
                </p>
                <p className="text-sm text-foreground">
                  .jpg, .jpeg, .png — Max size: 50MB — Max files: 1
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Cover Upload */}
      <div>
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
                  Drag your file here or
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

      {/* Gallery Upload (Multiple Images) */}
      <div>
        <label className="block text-lg font-semibold text-primary/80">
          Upload media (up to 5 pictures)
        </label>
        <p className="mt-1 text-sm font-normal text-foreground">
          Keep in mind that the first file you upload will appear in the cover
          preview. We recommend the size 1920x340 with aspect ratio 4:3. Not
          sure what to upload?
        </p>
        <div className="relative border border-dashed border-foreground mt-4 bg-card rounded-lg py-6 px-4 flex flex-col items-center justify-center text-center cursor-pointer">
          <input
            id="gallery"
            type="file"
            accept="image/*"
            multiple
            onChange={handleGalleryChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          {galleryPreviews.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {galleryPreviews.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Gallery Preview ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
              ))}
            </div>
          ) : (
            <>
              <MdOutlineCloudUpload className="text-secondary text-5xl mb-4" />
              <div className="space-y-1">
                <p className="text-primary font-medium">
                  Drag your files here or
                  <label
                    htmlFor="gallery"
                    className="text-secondary underline cursor-pointer"
                  >
                    browse
                  </label>
                </p>
                <p className="text-sm text-foreground">
                  .jpg, .jpeg, .png — Max size: 50MB each — Max files: 5
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

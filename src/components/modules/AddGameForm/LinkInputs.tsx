import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const LinkInputs = ({ register }: { register: any }) => {
  const [extraLinks, setExtraLinks] = useState<string[]>([]);

  const handleAddMore = () => {
    setExtraLinks((prev) => [...prev, ""]);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {/* Predefined inputs */}
        <div>
          <Label htmlFor="steamAccount" className="text-primary/80">
            Where to buy the game
            <span className=" text-red-600 font-medium">(Mandatory)</span>
          </Label>
          <div className="relative">
            <Input
              type="text"
              id="steamAccount"
              placeholder="Game website link"
              {...register("steamAccount")}
              className="px-2 mt-3 bg-[#111111] border-none py-6"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="steamProfile" className="text-primary/80">
            Steam account of the game
          </Label>
          <div className="relative">
            <Input
              type="text"
              id="steamProfile"
              placeholder="Steam profile link"
              {...register("steamProfile")}
              className="px-2 mt-3 bg-[#111111] border-none py-6"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="linkedinAccount" className="text-primary/80">
            LinkedIn account of the game
          </Label>
          <div className="relative">
            <Input
              type="text"
              id="linkedinAccount"
              placeholder="LinkedIn profile link"
              {...register("linkedinAccount")}
              className="px-2 mt-3 bg-[#111111] border-none py-6"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="redditAccount">Reddit account of the game</Label>
          <div className="relative">
            <Input
              type="text"
              id="redditAccount"
              placeholder="Reddit profile link"
              {...register("redditAccount")}
              className="px-2 mt-3 bg-[#111111] border-none py-6"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="instagramAccount">
            Instagram account of the game
          </Label>
          <div className="relative">
            <Input
              type="text"
              id="instagramAccount"
              placeholder="Instagram profile link"
              {...register("instagramAccount")}
              className="px-2 mt-3 bg-[#111111] border-none py-6"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="xAccount">X account of the game</Label>
          <div className="relative">
            <Input
              type="text"
              id="xAccount"
              placeholder="X profile link"
              {...register("xAccount")}
              className="px-2 mt-3 bg-[#111111] border-none py-6"
            />
          </div>
        </div>

        {/* Dynamic Inputs */}
        {extraLinks.map((_, index) => (
          <div key={index} className="col-span-1">
            <Label htmlFor={`extraLink-${index}`}>
              Additional Link {index + 1}
            </Label>
            <div className="relative">
              <Input
                type="text"
                id={`extraLink-${index}`}
                placeholder="Enter additional link"
                {...register(`extraLinks.${index}`)}
                className="px-2 mt-3 bg-[#111111] border-none py-6"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Add More Button */}
      <button
        type="button"
        onClick={handleAddMore}
        className="mt-4 px-4 py-2 bg-card hover:bg-card/80 text-white rounded-md"
      >
        + Add More
      </button>
    </div>
  );
};

export default LinkInputs;

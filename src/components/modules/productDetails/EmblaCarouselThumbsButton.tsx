import Image, { StaticImageData } from "next/image";
import React from "react";

type PropType = {
  selected: boolean;
  index: number;
  imageUrl: StaticImageData;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, imageUrl, onClick } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <div onClick={onClick} className="embla-thumbs__slide__number">
        <Image
          src={imageUrl}
          alt={`Thumbnail ${index + 1}`}
          className="embla-thumbs__slide__img"
        />
      </div>
    </div>
  );
};

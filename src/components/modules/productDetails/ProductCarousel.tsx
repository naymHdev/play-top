"use client";

import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";
import Image, { StaticImageData } from "next/image";

type PropType = {
  slides: StaticImageData[] | undefined;
  options?: EmblaOptionsType;
};

const ProductCarousel: React.FC<PropType> = (props) => {
  // console.log(props.slides);
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);
  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaMainRef}>
          <div className="embla__container">
            {slides.slice(2).map((img, idx) => (
              <div className="embla__slide" key={idx}>
                <div className="relative w-full aspect-[6/4]">
                  <Image
                    src={img}
                    alt="image"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="embla-thumbs">
          <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
            <div className="embla-thumbs__container">
              {slides.slice(2).map((img, idx) => (
                <Thumb
                  key={idx}
                  onClick={() => onThumbClick(idx)}
                  selected={idx === selectedIndex}
                  index={idx}
                  imageUrl={img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCarousel;

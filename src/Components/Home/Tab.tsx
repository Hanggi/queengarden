import React, { useState } from "react";
import Image from "next/image";
import r1 from "../../../public/img/r1.webp";
import r2 from "../../../public/img/r2.webp";
import r3 from "../../../public/img/r3.webp";
import r4 from "../../../public/img/r4.webp";
import r5 from "../../../public/img/r5.webp";
import r11 from "../../../public/img/r11.png";
import r22 from "../../../public/img/r22.png";
import r33 from "../../../public/img/r33.png";
import r44 from "../../../public/img/r44.png";
import r55 from "../../../public/img/r55.png";

const Tab = () => {
  // Initially set to r11 as the default full-size image to be displayed
  const [selectedImage, setSelectedImage] = useState(r11);

  // Mapping of thumbnail images to their corresponding full-size images
  const imageMap = {
    [r1.src]: r11,
    [r2.src]: r22,
    [r3.src]: r33,
    [r4.src]: r44,
    [r5.src]: r55,
  };

  const handleClick = (thumbnailSrc: any) => {
    const fullSizeImage = imageMap[thumbnailSrc];
    if (fullSizeImage) {
      setSelectedImage(fullSizeImage);
    }
  };

  return (
    <>
      <div className="w-full mx-auto">
        <div className="bg-transparent p-2 rounded-t-lg">
          <div className="grid w-full grid-rows-[100px,auto]">
            <div className="rounded-md bg-opacity-50 backdrop-filter backdrop-blur-md z-10 grid h-[100px] grid-cols-5 bg-[#FFD600]">
              {[r1, r2, r3, r4, r5].map((thumbnail, index) => (
                <div
                  className="px-2 lg:px-4 w-full"
                  key={index}
                  onClick={() => handleClick(thumbnail.src)}
                >
                  <Image alt={`r${index + 1}`} className="" src={thumbnail} />
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 lg:pt-10 xl:pt-14 3xl:pt-16 w-full">
            {/* IMAGE WHICH IS ACTIVE */}
            <Image
              alt="selected-image"
              className="w-full object-contain"
              src={selectedImage}
            />
            <form className="w-full relative">
              <input
                className="flex py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 h-[48px] w-full flex-none rounded-[28px] border-[2px] border-black bg-[#FFD600] px-[20px] text-[16px] font-normal leading-[16px] outline-none placeholder:text-[16px] placeholder:font-normal placeholder:text-black focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 active:outline-none active:ring-0 4xl:h-[56px] 4xl:rounded-[28px] 4xl:text-[18px] 4xl:leading-[18px] 4xl:placeholder:text-[18px] 5xl:h-[64px]"
                placeholder="Chat..."
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab;

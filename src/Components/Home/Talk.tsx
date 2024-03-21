import React from "react";
import Image from "next/image";
import Tab from "./Tab";
const Talk = () => {
  return (
    <>
      <div className="section overflow-hidden">
        <div className="flex w-full items-center justify-center bg-[#FFD600] px-[50px] pb-[128px] pt-[60px] 4xl:px-[100px] 4xl:pb-[100px] 4xl:pt-[50px] 5xl:pt-[100px]">
          <div className="grid lg:grid-cols-[46%,auto] gap-[88px] 4xl:gap-[120px] 5xl:gap-[150px]">
            {/* _________ tabs __________ */}
            <div className="flex flex-col w-full ">
              <Tab />
            </div>
            {/* _________ image  ____________ */}
            <div className="flex flex-col items-center justify-center">
              <Image
                alt="friend"
                width="2721"
                height="1986"
                className="w-full object-cover"
                src="/img/talk.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Talk;

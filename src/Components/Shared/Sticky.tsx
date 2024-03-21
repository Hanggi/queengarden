import React from "react";
import Image from "next/image";
import Link from "next/link";
const Sticky = () => {
  return (
    <>
      <div className="lg:sticky bottom-0 left-0 z-50 lg:h-[88px] w-full flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-center bg-black lg:bg-black/80 px-[20px] 4xl:h-[112px] 4xl:px-[30px] py-10 lg:py-0">
        <div className="flex">
          <Image
            alt="now"
            width="20"
            height="48"
            className="object-contain"
            src="/img/progress.webp"
          />
          <div className="ml-[10px] flex flex-col justify-center 4xl:ml-[20px]">
            <span className="text-[21px] lg:text-[18px] font-semibold text-white 4xl:text-[24px]">
              Mint
            </span>
            <span className="text-base  lg:text-[14px] font-semibold text-white 4xl:text-[18px]">
              Feb 1, 8 PM - Feb 3, 8 PM (UTC+8)
            </span>
          </div>
        </div>
        <div className="lg:ml-[30px] flex 4xl:ml-[50px] 5xl:ml-[100px] text-white">
          <Image
            alt="next"
            width="20"
            height="48"
            className="object-contain"
            src="/img/progress.webp"
          />
          <div className="ml-[10px] flex flex-col justify-center 4xl:ml-[20px]">
            <span className="text-[21px] lg:text-[18px] font-semibold 4xl:text-[24px]">
              Raffle and Airdrop
            </span>
            <span className="text-base lg:text-[14px] font-semibold 4xl:text-[18px]">
              Feb 3, 8 PM - Feb 4, 8 PM (UTC+8)
            </span>
          </div>
        </div>
        <div className="lg:ml-[30px] flex 4xl:ml-[50px] 5xl:ml-[100px] text-[#FFD600]">
          <Image
            alt="next"
            width="20"
            height="48"
            className="object-contain"
            src="/img/goldprogress.webp"
          />
          <div className="ml-[10px] flex flex-col justify-center 4xl:ml-[20px]">
            <span className="text-[21px] lg:text-[18px] font-semibold 4xl:text-[24px]">
              Refund
            </span>
            <span className="text-base lg:text-[14px] font-semibold 4xl:text-[18px]">
              Start on Feb 4, 8 PM (UTC+8)
            </span>
          </div>
        </div>
        <div className="ml-auto hidden lg:flex">
          <Link href="/mint">
            <div className="hover-btn-shadow ml-[20px] flex h-[64px] w-[200px] flex-col items-center justify-center rounded-[12px] border-2 border-black bg-[#FFD600] pl-[5px] shadow-[4px_4px_0px_rgba(0,0,0,1)] 4xl:ml-[30px] 4xl:h-[72px] 4xl:w-[260px]">
              <span className="text-[21px] font-semibold leading-[21px] text-black 4xl:text-[24px] 4xl:leading-[24px]">
                Mint
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sticky;

import { useTranslation } from "next-i18next";

import Image from "next/image";
import Link from "next/link";

import React from "react";

const Sticky = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <div
        className={
          "absolute bottom-0 left-0 right-0 " +
          "lg:h-[88px] w-full flex flex-col gap-10 lg:gap-0 lg:flex-row lg:items-center " +
          "bg-black/80 lg:bg-black/80 px-[20px] 4xl:h-[112px] 4xl:px-[30px] py-10 lg:py-0"
        }
      >
        <div className="flex">
          <Image
            alt="now"
            className="object-contain"
            height="48"
            src="/img/progress.webp"
            width="20"
          />
          <div className="ml-[10px] flex flex-col justify-center 4xl:ml-[20px]">
            <span className="text-[21px] lg:text-[18px] font-semibold text-white 4xl:text-[24px]">
              {t("Allowlist")}
            </span>
            <span className="text-base  lg:text-[14px] font-semibold text-white 4xl:text-[18px]">
              March 31, 8 PM - April 1, 8 PM (UTC+9)
            </span>
          </div>
        </div>
        <div className="lg:ml-[30px] flex 4xl:ml-[50px] 5xl:ml-[100px] text-white">
          <Image
            alt="next"
            className="object-contain"
            height="48"
            src="/img/progress.webp"
            width="20"
          />
          <div className="ml-[10px] flex flex-col justify-center 4xl:ml-[20px]">
            <span className="text-[21px] lg:text-[18px] font-semibold 4xl:text-[24px]">
              {t("p2")}
            </span>
            <span className="text-base lg:text-[14px] font-semibold 4xl:text-[18px]">
              April 1, 9 PM (UTC+9) - April 2, 9 PM (UTC+9)
            </span>
          </div>
        </div>

        <div className="ml-auto hidden lg:flex">
          <Link href="/mint">
            <div className="hover-btn-shadow ml-[20px] flex h-[64px] w-[200px] flex-col items-center justify-center rounded-[12px] border-2 border-black bg-[#FFD600] pl-[5px] shadow-[4px_4px_0px_rgba(0,0,0,1)] 4xl:ml-[30px] 4xl:h-[72px] 4xl:w-[260px]">
              <span className="text-[21px] font-semibold leading-[21px] text-black 4xl:text-[24px] 4xl:leading-[24px]">
                {t("mint")}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sticky;

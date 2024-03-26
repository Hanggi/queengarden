import { useTranslation } from "next-i18next";

import Image from "next/image";
import Link from "next/link";

import React from "react";

const Hero = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 top-0 left-0 bottom-0 right-0">
          <Image
            alt="home"
            className="object-cover"
            fill
            src="/img/homebg.png"
          />
        </div>
        <div className="absolute bottom-[15%] z-10 flex lg:hidden w-full flex-col px-[15px]">
          <Link href="/Mintpage">
            <div className="hover-btn-shadow mt-[20px] flex h-[56px] w-full items-center justify-center rounded-[12px] border-2 border-black bg-[#FFD600] shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <span className="text-[21px] font-semibold text-black">
                {t("mint")}
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 top-0 left-0 bottom-0 right-0">
          <Image
            src="/img/homebg.png"
            alt="home"
            className="object-cover"
            layout="fill"
          />
        </div>
        <div className="absolute bottom-[15%] z-10 flex lg:hidden w-full flex-col px-[15px]">
          <Link href="/Mint">
            <div className="hover-btn-shadow mt-[20px] flex h-[56px] w-full items-center justify-center rounded-[12px] border-2 border-black bg-[#FFD600] shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <span className="text-[21px] font-semibold text-black">
                {t("mint")}
              </span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;

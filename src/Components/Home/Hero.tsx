import React from "react";
import Image from "next/image";
import Header from "../Shared/Header";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 top-0 left-0 bottom-0 right-0">
          <Image src="/img/homebg.webp" alt="home" className="" layout="fill" />
        </div>

        <div className="absolute bottom-[108px] right-[20px] w-[200px] h-[250px] 4xl:bottom-[140px] 4xl:right-[30px] rounded-[16px] border-2 border-black bg-[rgba(219,53,57,1)] pl-[5px] ">
          <Image
            alt="card back"
            width="90"
            height="119"
            loading="lazy"
            className="absolute top-[23px] left-[29px]"
            src="/img/card-back.webp"
          />
          <Image
            alt="card front"
            loading="lazy"
            width="106"
            height="128"
            className="absolute top-[46px] right-[25px]"
            src="/img/card-front.webp"
          />
          <Image
            alt="icon1"
            loading="lazy"
            width="122"
            height="130"
            className="absolute top-[-12px] left-[-26px]"
            src="/img/form_icon1.webp"
          />
          <Image
            alt="icon2"
            loading="lazy"
            width="117"
            height="130"
            className="absolute top-[-12px] right-[-28px]"
            src="/img/form_icon2.webp"
          ></Image>
          <div>
            <Link href="/">
              <div className="absolute left-0 right-0 m-auto bottom-[20px] w-[160px] h-[40px] rounded-[8px] bg-white text-[16px] font-semibold leading-[40px] text-center">
                Lottery Draw
              </div>
            </Link>
          </div>
        </div>
        <div className="hover-btn-shadow absolute bottom-[108px] left-[20px] flex h-[64px] w-[160px] items-center justify-center rounded-[16px] border-2 border-black bg-white pl-[5px] shadow-[4px_4px_0px_rgba(0,0,0,1)] 4xl:bottom-[140px] 4xl:left-[30px] 4xl:h-[80px] 4xl:w-[200px]">
          <Image
            alt="play"
            width="64"
            height="64"
            className="mt-[5px] h-[48px] w-[48px] 4xl:h-[64px] 4xl:w-[64px]"
            src="/img/home_play_mv.webp"
          />
          <span className="ml-[10px] text-[16px] font-semibold leading-[20px] text-black 4xl:ml-[16px] 4xl:text-[18px] 4xl:leading-[24px]">
            NOBODY NFT MV
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;

import Image from "next/image";
import Link from "next/link";

import React from "react";

const Hero = () => {
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
        {/* small screen button */}
        <div className="lg:hidden absolute bottom-[15%] z-10 flex w-full flex-col px-[15px]">
          <Link href="/mint">
            <div className="hover-btn-shadow mt-[20px] flex h-[56px] w-full items-center justify-center rounded-[12px] border-2 border-black bg-[#FFD600] shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <span className="text-[21px] font-semibold text-black">Mint</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;

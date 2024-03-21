import Image from "next/image";
import React from "react";

const Community = () => {
  return (
    <div className="relative lg:h-screen w-full lg:bg-center bg-cover bg-[url('/img/comBG.webp')] lg:pb-[88px]">
      <div className="relative h-full w-full p-10 lg:p-0">
        <div>
          <Image
            alt="text"
            className="lg:absolute lg:left-[9%] lg:top-[50%] lg:w-[39%] lg:translate-y-[-50%] lg:object-cover"
            height={2262}
            src="/img/commtext.webp"
            width={1590}
          />
        </div>
        <div className="mt-10 lg:mt-0">
          <Image
            alt="text"
            className="lg:absolute lg:right-[6%] lg:top-[50%] lg:w-[42%] lg:translate-y-[-50%] lg:object-cover"
            height={2463}
            src="/img/commround.webp"
            width={2463}
          />
        </div>
      </div>
      <div>
        <Image
          alt="text"
          className="hidden lg:block lg:absolute bottom-0 left-[2%] w-[9%] object-cover"
          height={280}
          src="/img/flower.webp"
          width={170}
        />
      </div>
    </div>
  );
};

export default Community;

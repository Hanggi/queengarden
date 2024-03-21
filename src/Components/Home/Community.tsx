import Image from "next/image";
import React from "react";

const Community = () => {
  return (
    <div className="relative lg:h-screen w-full lg:bg-center bg-cover bg-[url('/img/comBG.webp')] lg:pb-[88px]">
      <div className="relative h-full w-full p-10 lg:p-0">
        <div>
          <Image
            src="/img/commtext.webp"
            alt="text"
            width={1590}
            height={2262}
            className="lg:absolute lg:left-[9%] lg:top-[50%] lg:w-[39%] lg:translate-y-[-50%] lg:object-cover"
          />
        </div>
        <div className="mt-10 lg:mt-0">
          <Image
            src="/img/commround.webp"
            alt="text"
            width={2463}
            height={2463}
            className="lg:absolute lg:right-[6%] lg:top-[50%] lg:w-[42%] lg:translate-y-[-50%] lg:object-cover"
          />
        </div>
      </div>
      <div>
        <Image
          src="/img/flower.webp"
          alt="text"
          width={170}
          height={280}
          className="hidden lg:block lg:absolute bottom-0 left-[2%] w-[9%] object-cover"
        />
      </div>
    </div>
  );
};

export default Community;

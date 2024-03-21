import Image from "next/image";
import React from "react";

const Community = () => {
  return (
    <div className="relative h-screen w-full bg-center bg-cover bg-[url('/img/comBG.webp')] pb-[88px]">
      <div className="relative h-full w-full">
        <div>
          <Image
            src="/img/commtext.webp"
            alt="text"
            width={1590}
            height={2262}
            className="absolute left-[9%] top-[50%] w-[39%] translate-y-[-50%] object-cover"
          />
        </div>
        <div>
          <Image
            src="/img/commround.webp"
            alt="text"
            width={2463}
            height={2463}
            className="absolute right-[6%] top-[50%] w-[42%] translate-y-[-50%] object-cover"
          />
        </div>
        <div>
          <Image
            src="/img/flower.webp"
            alt="text"
            width={170}
            height={280}
            className="absolute bottom-0 left-[2%] w-[9%] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Community;

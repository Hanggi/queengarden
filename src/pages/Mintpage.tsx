import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Mint = () => {
  const { t } = useTranslation("common");
  return (
    <div className=" h-screen overflow-hidden">
      <Image
        alt="homrbg"
        className="absolute h-full w-full inset-0 left-0 right-0 bottom-0 top-0 object-cover"
        layout="fill"
        src="/img/homebg.png"
      />
      <div className="absolute h-screen w-screen backdrop-blur z-10"></div>
      <div className="pb-[150px] relative top-[150px] z-20 h-screen w-screen overflow-y-auto">
        <div className="w-full px-[12px] sm:px-0 sm:w-[80%] lg:w-[65%] xl:w-[1200px] mx-auto ">
          <div className="flex flex-col gap-6 mb-[100px]">
            <div className="w-full xl:w-[760px] xl:h-[590px] py-[20px] px-[12px] xl:p-[30px] rounded-[24px] border-black border-[3px] bg-white shadow-[4px_4px_0px_rgb(0, 0, 0)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] mx-auto">
              <div className="flex relative">
                <div className=" shrink-0 relative w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] lg:w-[250px] lg:h-[250px] xl:w-[320px] xl:h-[320px] rounded-[16px] overflow-hidden">
                  <Image
                    alt="image animation"
                    className="w-full h-full"
                    height={100}
                    src="/img/Blind512.gif"
                    width={100}
                  />
                </div>
                <div className="flex-grow h-full ml-[10px] md:ml-[20px] py-[6px] xl:ml-[30px] xl:py-[10px] flex-col justify-between">
                  <div>
                    <h3 className="text-[21px] leading-[21px] xl:text-[24px] font-bold xl:leading-[24px] mb-2">
                      {t("maintitle")}
                    </h3>
                    <p className="text-[16px] xl:text-[18px] font-medium xl:font-semibold leading-[24px] xl:leading-[30px]">
                      {t("totalSupply")}
                    </p>
                    <p className="text-[16px] xl:text-[18px] font-medium xl:font-semibold leading-[24px] xl:leading-[30px]">
                      {t("minnet")}
                    </p>
                    <p className="text-[16px] xl:text-[18px] font-medium xl:font-semibold leading-[24px] xl:leading-[30px]">
                      {t("free")}
                    </p>
                    <p className="text-[16px] xl:text-[18px] font-medium xl:font-semibold leading-[24px] xl:leading-[30px]">
                      {t("max")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full mt-[20px] xl:my-[30px] py-[30px] px-[12px] xl:h-[124px] bg-[rgba(255,214,0,0.2)] rounded-[12px] xl:rounded-[16px] flex flex-col lg:flex-row lg:justify-between items-center mx-auto">
                <div className="text-[18px] leading-[24px] font-medium text-left xl:text-left mb-[20px] lg:mb-0 mx-[20px]">
                  {t("over")}
                </div>
                <div className="shrink-0">
                  <div className="h-[56px] w-full rounded-[12px] xl:h-[64px] xl:rounded-[12px] bg-[rgba(255,214,0,1)] border-[2px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover-btn-shadow flex justify-center items-center text-[21px] xl:text-[24px] leading-[21px] xl:leading-[24px] font-semibold min-w-[240px] xl:min-w-[260px]">
                    {t("cw")}
                  </div>
                </div>
              </div>
              <div className="hidden lg:block mt-[20px] xl:mt-0 mx-auto">
                <p>
                  {t("information")}&nbsp;&nbsp;
                  <Link
                    className=" text-[rgba(59,132,255,1)] underline"
                    href="https://etherscan.io/address/0x129d453253dbCE5CF6997DB8Fb461B2A20Fd275F"
                    target="__blank"
                  >
                    0x129d453253dbCE5CF6997DB8Fb461B2A20Fd275F
                  </Link>
                </p>
              </div>
            </div>
            <div className="overflow-visible w-full xl:w-[760px] sm:h-[390px] overflow-y-scroll p-4 lg:p-[30px] rounded-[24px] border-black border-[3px] bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] mt-[20px] xl:mt-0 mx-auto">
              <h3 className=" sm:text-black text-[21px] sm:text-[24px] font-bold leading-6 mb-[20px] mt-[30px] sm:mt-0">
                {t("minttitle")}
              </h3>
              <div>
                <h4 className="text-[20px] sm:text-[22px] font-semibold mb-4">
                  {t("mintschedule")}
                </h4>
                <p className="text-[18px] font-medium leading-[30px]">
                  {t("Allowlist")}
                  <br />
                  {t("p1")}
                  <br />
                  {t("p2")}
                  <br />
                  {t("p3")}
                  <br />
                  <br />
                  {t("p4")}
                  <br />
                  <br />
                </p>
                <p className="text-[18px] font-medium leading-[30px]">
                  {t("phase")}
                  <br />
                  {t("m1")}
                  <br />
                  <br />
                  {t("m2")}
                  <br />
                  {t("m3")}
                  <br />
                  {t("m4")}
                  <br />
                  {t("m5")}
                  <br />
                  <br />
                  {t("m6")}
                  <br />
                  {t("m7")}
                  <br />
                  <br />
                  {t("m8")}
                  <br />
                  {t("m9")}
                  <br />
                  {t("m10")}
                  <br />
                  {t("m11")}
                  <br />
                  {t("m12")}
                  <br />
                  <br />
                  {t("m13")}
                  <br />
                  <br />
                  {t("m14")}
                  <br />
                  {t("m15")}
                  <br />
                  <br />
                  {t("m16")}
                  <br />
                  <br />
                  {t("m17")}
                  <br />
                  <br />
                  {t("m18")}
                  <br />
                  {t("m19")}
                  <br />
                  <br />
                  {t("m20")}
                  <br />
                  {t("m21")}
                  <br />
                  {t("m22")}
                  <br />
                  <br />
                  {t("m23")}
                  <br />
                  {t("m24")}
                  <br />
                  <br />
                  {t("m25")}
                  <br />
                  {t("m26")}
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
export async function getStaticProps(context: any) {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

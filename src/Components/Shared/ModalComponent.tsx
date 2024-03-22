import React from "react";
import Image from "next/image";
import close from "../../../public/img/close.svg";
import Link from "next/link";
import { useTranslation } from "next-i18next";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}
const ModalComponent: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  const { t } = useTranslation("common");
  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <div
          className="flex items-center justify-center h-screen w-screen fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60"
          onClick={closeModal}
        >
          <div
            className="bg-white max-w-xl w-full rounded-xl p-5"
            onClick={handleModalContentClick}
          >
            {/* title */}
            <div className="w-full flex justify-center mb-5">
              <h1 className="text-[#3c4242cc] text-xl font-bold ml-auto">
                {t("connect")}
              </h1>
              <div
                className="cursor-pointer text-xl bg-gray-200 rounded-full p-2 ml-auto"
                onClick={closeModal}
              >
                <Image src={close} alt="close" height={14} width={14} />
              </div>
            </div>
            {/* content */}
            <div className="mt-8">
              <h4 className="text-[#25292E] text-base font-bold text-center mb-2">
                {t("what")}
              </h4>
              <p className="text-[#3c424299] leading-[20px] text-base font-normal text-center">
                {t("data")}
              </p>
            </div>
            {/* button */}
            <div className="py-8 px-5">
              <div className="flex flex-wrap flex-row justify-center gap-4">
                <button className="px-6 py-[10px] text-center text-base text-[#0E76FD] font-bold border-[1px] border-gray-200 rounded-3xl hover:scale-90 duration-150">
                  {t("get")}
                </button>
                <Link
                  href="https://learn.rainbow.me/understanding-web3?utm_source=rainbowkit&amp;utm_campaign=learnmore"
                  target="_blank"
                >
                  <button className="px-6 py-[10px] text-center text-base text-[#0E76FD] font-bold border-[1px] border-gray-200 rounded-3xl hover:scale-90 duration-150">
                    {t("learn")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;

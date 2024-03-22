import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import twitter from "../../../public/img/twitter.svg";
import discord from "../../../public/img/discord.svg";
import insta from "../../../public/img/insta.svg";
import world from "../../../public/img/world.svg";
import hamburger from "../../../public/img/hamburger.svg";
import { useRouter } from "next/router";
import ModalComponent from "./ModalComponent";
import { useTranslation } from "next-i18next";

const Header = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageVisible, setIsLanguageVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleLanguageDropdown = () => setIsLanguageVisible(!isLanguageVisible);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const languagedropdownRef = useRef<HTMLLIElement>(null);

  const handleChnage = (locale: any) => {
    router.push(router.pathname, router.asPath, { locale });
    setSelectedLanguage(locale);
    setIsLanguageVisible(false);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownVisible(false);
    }
  };
  const toggleDrawer = () => {
    setIsOpen((prev) => !prev); // Toggle isOpen state
  };

  const handleCloseDrawer1 = () => {
    setIsOpen(false);
  };
  const handleCloseDrawer = (): void => {
    const drawerCheckbox = document.getElementById(
      "my-drawer"
    ) as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className={`absolute top-0 w-full z-50`}>
        <div className="mx-auto px-5">
          <div className="relative flex items-center justify-between">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/img/navlogo.png"
                alt="navbar"
                className="w-full max-w-[100px]"
                width={100}
                height={100}
              />
            </Link>
            <ul className="flex items-center">
              <Link href="/" target="_blank" className="ml-[10px] sm:ml-4">
                <li className="hover-btn-shadow inline-flex items-center justify-center h-[36px] w-[36px] lg:h-[40px] lg:w-[40px] 3xl:h-[48px] 3xl:w-[48px] rounded-[10px] border-black border-2 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:hover-btn-shadow ">
                  <Image src={twitter} alt="twitter" className="h-[30px]" />
                </li>
              </Link>
              <Link href="/" className="ml-[10px] sm:ml-4">
                <li className="hover-btn-shadow inline-flex items-center justify-center h-[36px] w-[36px] lg:h-[40px] lg:w-[40px] 3xl:h-[48px] 3xl:w-[48px] rounded-[10px] border-black border-2 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)]  sm:hover-btn-shadow">
                  <Image src={insta} alt="twitter" className="h-[30px]" />
                </li>
              </Link>
              <Link href="/" className="ml-[10px] sm:ml-4">
                <li className="hover-btn-shadow inline-flex items-center justify-center h-[36px] w-[36px] lg:h-[40px] lg:w-[40px] 3xl:h-[48px] 3xl:w-[48px] rounded-[10px] border-black border-2 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)]  sm:hover-btn-shadow">
                  <Image src={discord} alt="twitter" className="h-[30px]" />
                </li>
              </Link>
              <li
                className="hidden lg:flex relative items-center justify-center h-[36px] lg:h-[40px] 3xl:h-[48px] rounded-[10px] border-black border-2 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] ml-[10px] sm:ml-4 px-[25px]"
                onClick={toggleLanguageDropdown}
                ref={languagedropdownRef}
              >
                <Image
                  src={world}
                  alt="world"
                  className="max-w-[30px] w-full"
                />
                <span className="w-full text-[16px] leading-[16px] sm:text-[18px] sm:leading-[18px] 3xl:text-[21px] 3xl:leading-[21px] font-semibold text-black ">
                  {selectedLanguage === "en" ? (
                    "English"
                  ) : (
                    <div className="break-words">Japanese</div>
                  )}
                </span>
                {isLanguageVisible && (
                  <div className="absolute top-[100%] mt-3 w-fit flex flex-col gap-5 bg-white rounded-[10px] py-5">
                    <div className="flex flex-col px-5">
                      {/* /english */}
                      <div
                        className="w-full flex items-center gap-2 flex-row cursor-pointer"
                        onClick={() => {
                          handleChnage("en");
                        }}
                      >
                        <p className="text-[#020817] text-[21px] font-semibold">
                          En
                        </p>
                        <span className="text-[#020817] text-[16px] leading-[16px] font-medium">
                          English
                        </span>
                      </div>
                      {/* /japanese */}
                      <div
                        className="w-full flex items-center gap-2 flex-row cursor-pointer"
                        onClick={() => {
                          handleChnage("ja");
                        }}
                      >
                        <p className="text-[#020817] text-[21px] font-semibold">
                          Ja
                        </p>
                        <span className="text-[#020817] text-[16px] leading-[16px] font-medium">
                          日本語
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              {/* _______________________________________ */}
              <div className="drawer w-auto">
                <input
                  id="my-drawer"
                  className="drawer-toggle"
                  type="checkbox"
                />
                <div className="drawer-content flex lg:hidden">
                  <label htmlFor="my-drawer" className="drawer-button">
                    <div className="ml-[10px] sm:ml-4 inline-flex items-center justify-center h-[36px] w-[36px] lg:h-[48px] lg:w-[48px] rounded-[10px] border-black border-2 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:hover-btn-shadow p-1">
                      <Image
                        alt="logo"
                        src={hamburger}
                        className="object-cover h-6 w-6"
                        width={24}
                        height={24}
                      />
                    </div>
                  </label>
                </div>
                <div className={`drawer-side`}>
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul
                    className={`menu w-full min-h-full px-4 bg-white overflow-y-scroll`}
                  >
                    <div className="flex justify-between items-center mt-2">
                      <div className="inline-flex items-center justify-between">
                        <Link href="/">
                          <Image
                            alt="logo"
                            src="/img/navlogo.png"
                            className=""
                            width={80}
                            height={80}
                          />
                        </Link>
                        <span className=" ml-2 text-[18px] font-semibold leading-[18px]"></span>
                      </div>
                      <label
                        htmlFor="my-drawer"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                      >
                        <div className="sm:hover-btn-shadow inline-flex h-[36px] w-[36px] items-center justify-center rounded-[10px] border-2 border-black bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:ml-4 sm:h-[48px] sm:w-[48px]  sm:shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-x"
                          >
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </div>
                      </label>
                    </div>
                    <div className="my-4 mt-8"></div>
                    <div className="border-b-[1px] border-gray-200 my-1"></div>
                    <div className="w-full" data-orientation="vertical">
                      <div
                        data-state="open"
                        data-orientation="vertical"
                        className="border-b"
                      >
                        <h3
                          data-orientation="vertical"
                          data-state="open"
                          className="flex"
                        >
                          <button
                            className="flex flex-1 items-center justify-between py-4 transition-all [&amp;[data-state=open]>svg]:rotate-180 text-[18px] font-semibold leading-[18px] hover:no-underline no-underline"
                            data-radix-collection-item=""
                          >
                            Language
                          </button>
                        </h3>
                        <div className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                          <div className="pb-4 pt-0 cursor-pointer">
                            <div
                              className={`text-[18px] font-semibold text-black leading-[18px] py-3 hover:text-yellow-400 ${
                                selectedLanguage === "en"
                                  ? "text-yellow-500"
                                  : "text-black"
                              }`}
                              onClick={() => {
                                handleChnage("en");
                                handleCloseDrawer();
                              }}
                            >
                              English
                            </div>
                            <div
                              className={`text-[18px] font-semibold text-black leading-[18px] py-3 hover:text-yellow-400 ${
                                selectedLanguage === "ja"
                                  ? "text-yellow-500"
                                  : "text-black"
                              }`}
                              onClick={() => {
                                handleChnage("ja");
                                handleCloseDrawer();
                              }}
                            >
                              日本語
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-b">
                        <h3 className="flex">
                          <button
                            type="button"
                            aria-controls="radix-:r15:"
                            aria-expanded={isOpen ? "true" : "false"}
                            onClick={toggleDrawer}
                            className="flex flex-1 items-center justify-between py-4 transition-all text-[18px] font-semibold leading-[18px] hover:no-underline no-underline"
                          >
                            QUEENGARDEN NFT
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`h-4 w-4 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            >
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>
                        </h3>
                        <div
                          className={`overflow-hidden text-sm transition-all ${
                            isOpen
                              ? "block duration-500 transition-all"
                              : "hidden"
                          }`} // Toggle visibility using CSS classes
                        >
                          <div className="pb-4 pt-0">
                            <Link href="/">
                              <div
                                onClick={handleCloseDrawer1}
                                className="text-[18px] font-semibold leading-[18px] py-3 hover:text-yellow-400"
                              >
                                OpenSea
                              </div>
                            </Link>
                            <Link href="/">
                              <div
                                onClick={handleCloseDrawer1}
                                className="text-[18px] font-semibold leading-[18px] py-3 hover:text-yellow-400"
                              >
                                OKX NFT
                              </div>
                            </Link>
                            <Link href="/">
                              <div
                                onClick={handleCloseDrawer1}
                                className="text-[18px] font-semibold leading-[18px] py-3 hover:text-yellow-400"
                              >
                                Element
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-12"></div>
                  </ul>
                </div>
              </div>
              {/* _______________________________________ */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

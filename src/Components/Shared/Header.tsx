import React, { useEffect, useRef, useState } from "react";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import world from "../../../public/img/world.svg"
import hamburger from "../../../public/img/hamburger.svg"
import MyConnectButton from "./buttons/ConnectButton";
import ShadowButton from "./buttons/ShadowButton";

function Logo() {
  return (
    <Link href="/">
      <div className="relative ml-[0px] h-[56px] w-[56px] sm:ml-[0px] lg:h-[80px] lg:w-[80px]">
        <Image
          alt="logo"
          className="object-cover"
          fill
          src="/img/navlogo.png"
        />
      </div>
    </Link>
  );
}

function NavButtons() {
  const router = useRouter();
  const [isLanguageVisible, setIsLanguageVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const handleClickOutsideLanguage = (event: MouseEvent) => {
    if (
      languagedropdownRef.current &&
      !languagedropdownRef.current.contains(event.target as Node)
    ) {
      setIsLanguageVisible(false);
    }
  };
  const toggleLanguageDropdown = () => setIsLanguageVisible(!isLanguageVisible);
  const languagedropdownRef = useRef<HTMLLIElement>(null);
  const handleChnage = (locale: any) => {
    router.push(router.pathname, router.asPath, { locale });
    setSelectedLanguage(locale);
    setIsLanguageVisible(false);
  };
 useEffect(() => {
    document.addEventListener("click", handleClickOutsideLanguage);
    return () => {
      document.removeEventListener("click", handleClickOutsideLanguage);
    };
  }, []);
  return (
    <div className="flex gap-4">
      <ShadowButton>
        <i className="ri-twitter-x-fill text-2xl"></i>
      </ShadowButton>
      {/* <ShadowButton>
        <i className="ri-instagram-fill text-3xl"></i>
      </ShadowButton> */}
      <ShadowButton>
        <i className="ri-discord-fill text-3xl"></i>
      </ShadowButton>

      <Dropdown>
        <MenuButton
          slots={{ root: ShadowButton }}
          // slotProps={{ root: { variant: "outlined", color: "neutral" } }}
        >
          <i className="ri-global-line text-3xl"></i>
        </MenuButton>
        <Menu>
          <MenuItem>Add item</MenuItem>
          <MenuItem>Add item2</MenuItem>
        </Menu>
      </Dropdown>
      <li
          className="hidden lg:flex relative items-center justify-center h-[36px] lg:h-[40px] 3xl:h-[48px] rounded-[10px] border-black border-2 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)]  px-[25px]"
            ref={languagedropdownRef}
          onClick={toggleLanguageDropdown}
              >
                <Image
                  alt="world"
                  className="max-w-[30px] w-full"
                  src={world}
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
      <MyConnectButton />
    </div>
  );
}

const Header = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageVisible, setIsLanguageVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleLanguageDropdown = () => setIsLanguageVisible(!isLanguageVisible);
  const languagedropdownRef = useRef<HTMLLIElement>(null);
  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);
  const dropdownRef = useRef<HTMLLIElement>(null);
 
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
  const handleChnage = (locale: any) => {
    router.push(router.pathname, router.asPath, { locale });
    setSelectedLanguage(locale);
    setIsLanguageVisible(false);
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
  }
  const handleClickOutsideLanguage = (event: MouseEvent) => {
    if (
      languagedropdownRef.current &&
      !languagedropdownRef.current.contains(event.target as Node)
    ) {
      setIsLanguageVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideLanguage);
    return () => {
      document.removeEventListener("click", handleClickOutsideLanguage);
    };
  }, []);

  return (
    <div>
      <div className={`absolute top-0 w-full z-50`}>
        <div className="mx-auto px-5">
          <div className="relative flex items-center justify-between">
            <Link className="inline-flex items-center" href="/">
              <Image
                alt="navbar"
                className="w-full max-w-[100px]"
                height={100}
                src="/img/navlogo.png"
                width={100}
              />
            </Link>
            <ul className="flex items-center">
              {/* <Link href="/" target="_blank" className="ml-[10px] sm:ml-4">
                <li className="hover-btn-shadow inline-flex items-center justify-center h-[36px] w-[36px] lg:h-[40px] lg:w-[40px] 3xl:h-[48px] 3xl:w-[48px] rounded-[10px] border-black border-2 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:hover-btn-shadow ">
                  <Image src={twitter} alt="twitter" className="h-[30px]" />
                </li>
              </Link> */}
              {/* <Link href="/" className="ml-[10px] sm:ml-4">
                <li className="hover-btn-shadow inline-flex items-center justify-center h-[36px] w-[36px] lg:h-[40px] lg:w-[40px] 3xl:h-[48px] 3xl:w-[48px] rounded-[10px] border-black border-2 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)]  sm:hover-btn-shadow">
                  <Image src={insta} alt="twitter" className="h-[30px]" />
                </li>
              </Link> */}
              {/* <Link href="/" className="ml-[10px] sm:ml-4">
                <li className="hover-btn-shadow inline-flex items-center justify-center h-[36px] w-[36px] lg:h-[40px] lg:w-[40px] 3xl:h-[48px] 3xl:w-[48px] rounded-[10px] border-black border-2 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)]  sm:hover-btn-shadow">
                  <Image src={discord} alt="twitter" className="h-[30px]" />
                </li>
              </Link> */}
              {/* <li
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
              </li> */}
              {/* _______________________________________ */}
              <div className="drawer w-auto">
                <input
                  className="drawer-toggle"
                  id="my-drawer"
                  type="checkbox"
                />
                <div className="drawer-content flex lg:hidden">
                  <label className="drawer-button" htmlFor="my-drawer">
                    <div className="ml-[10px] sm:ml-4 inline-flex items-center justify-center h-[36px] w-[36px] lg:h-[48px] lg:w-[48px] rounded-[10px] border-black border-2 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:hover-btn-shadow p-1">
                      <Image
                        alt="logo"
                        className="object-cover h-6 w-6"
                        height={24}
                        src={hamburger}
                        width={24}
                      />
                    </div>
                  </label>
                </div>
                <div className={`drawer-side`}>
                  <label
                    aria-label="close sidebar"
                    className="drawer-overlay"
                    htmlFor="my-drawer"
                  ></label>
                  <ul
                    className={`menu w-full min-h-full px-4 bg-white overflow-y-scroll`}
                  >
                    <div className="flex justify-between items-center mt-2">
                      <div className="inline-flex items-center justify-between">
                        <Link href="/">
                          <Image
                            alt="logo"
                            className=""
                            height={80}
                            src="/img/navlogo.png"
                            width={80}
                          />
                        </Link>
                        <span className=" ml-2 text-[18px] font-semibold leading-[18px]"></span>
                      </div>
                      <label
                        aria-label="close sidebar"
                        className="drawer-overlay"
                        htmlFor="my-drawer"
                      >
                        <div className="sm:hover-btn-shadow inline-flex h-[36px] w-[36px] items-center justify-center rounded-[10px] border-2 border-black bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:ml-4 sm:h-[48px] sm:w-[48px]  sm:shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                          <svg
                            className="lucide lucide-x"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
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
                        className="border-b"
                        data-orientation="vertical"
                        data-state="open"
                      >
                        <h3
                          className="flex"
                          data-orientation="vertical"
                          data-state="open"
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
                            aria-controls="radix-:r15:"
                            aria-expanded={isOpen ? "true" : "false"}
                            className="flex flex-1 items-center justify-between py-4 transition-all text-[18px] font-semibold leading-[18px] hover:no-underline no-underline"
                            type="button"
                            onClick={toggleDrawer}
                          >
                            QUEENGARDEN NFT
                            <svg
                              className={`h-4 w-4 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
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
                          }`} 
                        >
                          <div className="pb-4 pt-0">
                            <Link href="/">
                              <div
                                className="text-[18px] font-semibold leading-[18px] py-3 hover:text-yellow-400"
                                onClick={handleCloseDrawer1}
                              >
                                OpenSea
                              </div>
                            </Link>
                            <Link href="/">
                              <div
                                className="text-[18px] font-semibold leading-[18px] py-3 hover:text-yellow-400"
                                onClick={handleCloseDrawer1}
                              >
                                OKX NFT
                              </div>
                            </Link>
                            <Link href="/">
                              <div
                                className="text-[18px] font-semibold leading-[18px] py-3 hover:text-yellow-400"
                                onClick={handleCloseDrawer1}
                              >
                                Element
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="my-2">
                      <MyConnectButton  />
                      </div>
                    </div>
                    <div className="mt-12"></div>
                  </ul>
                </div>
              </div>
              {/* _______________________________________ */}
            </ul>
            {/* <Logo /> */}
            <div className="hidden lg:block">
              <NavButtons  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;



import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Typography from "@mui/joy/Typography";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useEffect, useRef, useState } from "react";

import ModalComponent from "./ModalComponent";
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
  return (
    <div className="flex gap-4">
      <ShadowButton>
        <i className="ri-twitter-x-fill text-2xl"></i>
      </ShadowButton>
      <ShadowButton>
        <i className="ri-instagram-fill text-3xl"></i>
      </ShadowButton>
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
      <div
        className={
          "hover-btn-shadow inline-flex items-center justify-center " +
          "lg:h-[40px]  lg:w-[160px] 3xl:h-[48px] 3xl:w-[190px] " +
          "rounded-[10px] border-black border-2 bg-white " +
          "shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:hover-btn-shadow " +
          "text-center"
        }
      >
        <Typography className="!font-bold text-black" level="title-lg">
          Connect Wallet
        </Typography>
      </div>
    </div>
  );
}

const Header = () => {
  const route = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [isLanguageVisible, setIsLanguageVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleLanguageDropdown = () => setIsLanguageVisible(!isLanguageVisible);
  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  const dropdownRef = useRef<HTMLLIElement>(null);
  const languagedropdownRef = useRef<HTMLLIElement>(null);

  const handleChnage = (locale: any) => {
    route.push(route.pathname, route.asPath, { locale });
    console.log(route.pathname, route.asPath);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownVisible(false);
    }
  };

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
            <Logo />
            <div className="hidden lg:block">
              <NavButtons />
            </div>
            <ModalComponent closeModal={closeModal} isOpen={isModalOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

{
  /* <ul className="flex items-center">
  <div className="drawer w-auto">
    <input id="my-drawer" className="drawer-toggle" type="checkbox" />
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
    <div className="drawer-side">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu w-full min-h-full px-4 bg-white overflow-y-scroll">
        <div className=" flex justify-between items-center mt-2">
          <div className=" inline-flex items-center justify-between">
            <Image
              alt="logo"
              src="/img/navlogo.png"
              className=""
              width={48}
              height={48}
            />
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
        <div className=" my-4 mt-8"></div>
        <div className="border-b-[1px] border-gray-200 my-1"></div>
        <div className="w-full" data-orientation="vertical">
          <div
            data-state="open"
            data-orientation="vertical"
            className="border-b"
          >
            <h3 data-orientation="vertical" data-state="open" className="flex">
              <button
                type="button"
                aria-controls="radix-:r13:"
                aria-expanded="true"
                data-state="open"
                data-orientation="vertical"
                id="radix-:r12:"
                className="flex flex-1 items-center justify-between py-4 transition-all [&amp;[data-state=open]>svg]:rotate-180 text-[18px] font-semibold leading-[18px] hover:no-underline no-underline"
                data-radix-collection-item=""
              >
                Language
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
                  className="h-4 w-4 shrink-0 transition-transform duration-200"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </h3>
            <div
              data-state="open"
              id="radix-:r13:"
              role="region"
              aria-labelledby="radix-:r12:"
              data-orientation="vertical"
              className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            >
              <div className="pb-4 pt-0">
                <div className="text-[18px] font-semibold leading-[18px] py-3">
                  English
                </div>
                <div className="text-[18px] font-semibold leading-[18px] py-3">
                  繁體中文
                </div>
              </div>
            </div>
          </div>
          <div
            data-state="open"
            data-orientation="vertical"
            className="border-b"
          >
            <h3 data-orientation="vertical" data-state="open" className="flex">
              <button
                type="button"
                aria-controls="radix-:r15:"
                aria-expanded="true"
                data-state="open"
                data-orientation="vertical"
                id="radix-:r14:"
                className="flex flex-1 items-center justify-between py-4 transition-all [&amp;[data-state=open]>svg]:rotate-180 text-[18px] font-semibold leading-[18px] hover:no-underline no-underline"
                data-radix-collection-item=""
              >
                Buy Nobody NFT
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
                  className="h-4 w-4 shrink-0 transition-transform duration-200"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </h3>
            <div
              data-state="open"
              id="radix-:r15:"
              role="region"
              aria-labelledby="radix-:r14:"
              data-orientation="vertical"
              className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            >
              <div className="pb-4 pt-0">
                <a
                  href="https://opensea.io/collection/real-nobody-xyz"
                  target="_blank"
                >
                  <div className="text-[18px] font-semibold leading-[18px] py-3">
                    OpenSea
                  </div>
                </a>
                <a
                  href="https://www.okx.com/web3/marketplace/nft/collection/eth/nobody"
                  target="_blank"
                >
                  <div className="text-[18px] font-semibold leading-[18px] py-3">
                    OKX NFT
                  </div>
                </a>
                <a
                  href="https://element.market/collections/nobody"
                  target="_blank"
                >
                  <div className="text-[18px] font-semibold leading-[18px] py-3">
                    Element
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-12">
          <div>
            <button
              className="hover-btn-shadow mt-[20px] flex h-[56px] w-full items-center justify-center rounded-[12px] border-2 border-black bg-[#FFD600] shadow-[4px_4px_0px_rgba(0,0,0,1)] font-semibold text-[21px]"
              type="button"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </ul>
    </div>
  </div>
</ul>; */
}

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import twitter from "../../../public/img/twitter.svg";
import discord from "../../../public/img/discord.svg";
import insta from "../../../public/img/insta.svg";
import world from "../../../public/img/world.svg";
import hamburger from "../../../public/img/hamburger.svg";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import ModalComponent from "./ModalComponent";

const Header = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);
  return (
    <div>
      <div className={`absolute top-0 w-full z-50`}>
        <div className="mx-auto px-5 py-4">
          <div className="relative flex items-center justify-between">
            <Link
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center"
            >
              <Image
                src="/img/navlogo.webp"
                alt="navbar"
                className="w-full max-w-20"
                width={80}
                height={80}
              />
            </Link>
            <ul className="flex items-center">
              <Link
                href="/"
                aria-label="Our product"
                title="Our product"
                className="hidden lg:block"
              >
                <li className="hover-btn-shadow inline-flex items-center justify-center h-[36px] min-w-[84px] lg:h-[40px] lg:min-w-[80px] 3xl:h-[48px] 3xl:min-w-[96px] px-[24px] rounded-[10px] border-black border-2 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] ml-[10px] sm:ml-4 sm:hover-btn-shadow">
                  <p className=" text-[16px] leading-[16px]  sm:text-[18px] sm:leading-[18px] 3xl:text-[21px] 3xl:leading-[21px] font-semibold text-black ml-[6px]">
                    Manifesto
                  </p>
                </li>
              </Link>

              <li className="hover-btn-shadow inline-flex items-center justify-center h-[36px] lg:h-[40px] 3xl:h-[48px] rounded-[10px] border-black border-2 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] ml-[10px] sm:ml-4 sm:hover-btn-shadow cursor-pointer">
                <span
                  className="text-[16px] whitespace-nowrap leading-[16px] sm:text-[18px] sm:leading-[18px] 3xl:text-[21px] 3xl:leading-[21px] font-semibold text-black mx-[6px]"
                  onClick={toggleDropdown}
                >
                  OKX NXT
                </span>
                {isDropdownVisible && (
                  <div className="absolute top-full bg-white rounded-[10px] border-black border-2 py-5 px-3">
                    {/* Dropdown content */}
                    <div className="flex flex-row">
                      <div className="h-8 w-6">
                        <Image
                          src="/img/drop1.webp"
                          alt="twitter"
                          className="h-auto w-auto"
                          width={32}
                          height={32}
                        />
                      </div>
                      <span className="text-[18px] leading-[18px] font-medium ml-[10px]">
                        OKX NFT
                      </span>
                    </div>
                    <div className="flex flex-row">
                      <div className="h-8 w-6">
                        <Image
                          src="/img/drop2.webp"
                          alt="twitter"
                          className="h-auto w-auto"
                          width={32}
                          height={32}
                        />
                      </div>
                      <span className="text-[18px] leading-[18px] font-medium ml-[10px]">
                        OpenSea
                      </span>
                    </div>
                    <div className="flex flex-row">
                      <div className="h-8 w-6">
                        <Image
                          src="/img/drop3.webp"
                          alt="twitter"
                          className="h-auto w-auto"
                          width={32}
                          height={32}
                        />
                      </div>
                      <span className="text-[18px] leading-[18px] font-medium ml-[10px]">
                        Element
                      </span>
                    </div>
                  </div>
                )}
              </li>
              <Link href="/" className="ml-[10px] sm:ml-4">
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
              <li className="hidden hover-btn-shadow lg:flex items-center justify-center h-[36px] lg:h-[40px] 3xl:h-[48px] rounded-[10px] border-black border-2 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] ml-[10px] sm:ml-4 sm:hover-btn-shadow px-2">
                <Image src={world} alt="world" className="max-w-[30px]" />
                <span className="text-[16px] leading-[16px] sm:text-[18px] sm:leading-[18px] 3xl:text-[21px] 3xl:leading-[21px] font-semibold text-black mx-[6px]">
                  En
                </span>
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
                          src="/img/navlogo.webp"
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
                    <div className=" border-b-[1px] border-gray-200 my-4 mt-8"></div>
                    <a href="/declaration">
                      <div className=" flex justify-between my-4 mt-1 text-[18px] font-semibold leading-[18px]  ">
                        Manifesto
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-chevron-right"
                        >
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </div>
                    </a>
                    <div className=" border-b-[1px] border-gray-200 my-1"></div>
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
                        <h3
                          data-orientation="vertical"
                          data-state="open"
                          className="flex"
                        >
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
              {/* _______________________________________ */}
              <li className="hidden lg:block" onClick={openModal}>
                <div className="hover-btn-shadow ml-[10px] inline-flex h-[36px] items-center justify-center rounded-[10px] border-2 border-black bg-white pr-[8px] shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:ml-4 sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] lg:h-[40px] 3xl:h-[48px]">
                  <Link
                    href="/"
                    className="ml-[6px] whitespace-nowrap text-[16px] font-semibold text-black sm:text-[18px] lg:ml-[10px] 3xl:text-[21px]"
                  >
                    Connect Wallet
                  </Link>
                </div>
              </li>
            </ul>
            <ModalComponent isOpen={isModalOpen} closeModal={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import Image from "next/image";
import Link from "next/link";
const mint = () => {
  return (
    <div className=" h-screen overflow-hidden">
      <Image
        alt="homrbg"
        className="absolute h-full w-full inset-0 left-0 right-0 bottom-0 top-0 object-cover"
        fill
        src="/img/homebg.png"
      />
      <div className="absolute h-screen w-screen backdrop-blur z-10"></div>
      <div className="pb-[150px] relative top-[150px] z-20 h-screen w-screen overflow-y-auto">
        
        <div className="w-full px-[12px] sm:px-0 sm:w-[80%] lg:w-[65%] xl:w-[1200px] mx-auto ">
          <div className="flex flex-col gap-6 mb-[100px]">
            <div className=" xl:w-[760px] xl:h-[590px] py-[20px] px-[12px] xl:p-[30px] rounded-[24px] border-black border-[3px] bg-white shadow-[4px_4px_0px_rgb(0, 0, 0)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] mx-auto">
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
                <div className="flex-grow h-full ml-[20px] py-[6px] xl:ml-[30px] xl:py-[10px] flex-col justify-between">
                  <div>
                    <h3 className="text-[21px] leading-[21px] xl:text-[24px] font-bold xl:leading-[24px] mb-2">
                      Mint Your QUEENGARDEN NFT
                    </h3>
                    <p className="text-[16px] xl:text-[18px] font-medium xl:font-semibold leading-[24px] xl:leading-[30px]">
                      Total Supply: 1000
                    </p>
                    <p className="text-[16px] xl:text-[18px] font-medium xl:font-semibold leading-[24px] xl:leading-[30px]">
                      Mainnet: Polygon
                    </p>
                    <p className="text-[16px] xl:text-[18px] font-medium xl:font-semibold leading-[24px] xl:leading-[30px]">
                      Price: Free + Gas Fee
                    </p>
                    <p className="text-[16px] xl:text-[18px] font-medium xl:font-semibold leading-[24px] xl:leading-[30px]">
                      Maximum Mint Per Wallet Address: 1
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full mt-[20px] xl:my-[30px] py-[30px] px-[12px] xl:h-[124px] bg-[rgba(255,214,0,0.2)] rounded-[12px] xl:rounded-[16px] flex flex-col lg:flex-row lg:justify-between items-center mx-auto">
                <div className="text-[18px] leading-[24px] font-medium text-left xl:text-left mb-[20px] lg:mb-0 mx-[20px]">
                  The mint is over now. Please connect your wallet to check if
                  you have successfully minted the Nobody NFT.
                </div>
                <div className="shrink-0">
                  <div className="h-[56px] w-full rounded-[12px] xl:h-[64px] xl:rounded-[12px] bg-[rgba(255,214,0,1)] border-[2px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover-btn-shadow flex justify-center items-center text-[21px] xl:text-[24px] leading-[21px] xl:leading-[24px] font-semibold min-w-[240px] xl:min-w-[260px]">
                    Connect Wallet
                  </div>
                </div>
              </div>
              <div className="hidden lg:block mt-[20px] xl:mt-0 mx-auto">
                <p>
                  QUEENGARDEN NFT Smart Contract Information&nbsp;&nbsp;
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
                Minted XXXX/1000
              </h3>
              <div>
                <h4 className="text-[20px] sm:text-[22px] font-semibold mb-4">
                  Minting Schedule
                </h4>
                <p className="text-[18px] font-medium leading-[30px]">
                  Allowlist
                  <br />
                  March 31, 8 PM - April 1, 8 PM (UTC+9)
                  <br />
                  Public
                  <br />
                  April 1, 9 PM (UTC+9) - April 2, 9 PM (UTC+9)
                  <br />
                  <br />
                  Minting Rules
                  <br />
                  <br />
                </p>
                <p className="text-[18px] font-medium leading-[30px]">
                  1. Minting Phase:
                  <br />
                  March 31, 2024, 8:00 PM (UTC+9) - April 1, 2024, 8:00 PM
                  (UTC+9).
                  <br />
                  <br />
                  2. Minting price:
                  <br />
                  Free + Gas Fee
                  <br />
                  <br />
                  3. Total Supply:
                  <br />
                  1,000 QUEENGARDEN NFTs
                  <br />
                  <br />
                  4. Available QUEENGARDEN NFTs for Minting and Allowlists:
                  <br />
                  Both are 800.
                  <br />
                  <br />
                  The remaining 200 NFTs will be distributed as follows:
                  <br />
                  Investors: 50
                  <br />
                  Team: 20
                  <br />
                  Treasury: 80
                  <br />
                  Community Development Fund: 50.
                  <br />
                  <br />
                  After minting ends, any remaining QUEENGARDEN NFTs will be
                  allocated to the Treasury.
                  <br />
                  <br />
                  5. Who is eligible to mint?
                  <br />
                  Everyone can participate in QUEENGARDEN NFT minting. Please
                  log in to https://queengardennft.com/ and verify your
                  allowlist eligibility through wallet connection.
                  <br />
                  <br />
                  • Allowlists: Given the highest priority, they can guarantee
                  QUEENGARDEN NFTs if they successfully minting during the
                  allowlist phase. <br />
                  <br />
                  • Non-Allowlists: Can participate in minting during the public
                  phase.
                  <br />
                  <br />
                  6. How many QUEENGARDEN NFTs can be minted per wallet?
                  <br />
                  Each wallet address can only mint 1 QUEENGARDEN NFT at most.
                  <br />
                  <br />
                  7. Which wallet address should I use for minting?
                  <br />
                  If you are on the allowlist, please use the wallet address
                  eligible for allowlist minting.
                  <br />
                  If you are not on the allowlist, you can use any ERC-20 wallet
                  address for minting.
                  <br />
                  <br />
                  8. Reveal Date:
                  <br />
                  April 14, 2024.
                  <br />
                  <br />
                  9. What is the creation fee (royalty), and how will it be
                  used?
                  <br />
                  5%. We will allocate the funds to hire more full-time team
                  members, support operations, and provide more value to our
                  community.
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

export default mint;

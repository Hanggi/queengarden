import React from "react";
import Image from "next/image";
import Link from "next/link";
const mint = () => {
  return (
    <div className=" h-screen overflow-hidden">
      <Image
        src="/img/homebg.webp"
        alt="homrbg"
        layout="fill"
        className="absolute h-full w-full inset-0 left-0 right-0 bottom-0 top-0"
      />
      <div className="absolute h-screen w-screen backdrop-blur z-10"></div>
      <div className="pb-[150px] relative top-[150px] z-20 h-screen w-screen overflow-y-auto">
        <div className="w-full px-[12px] sm:px-0 sm:w-[80%] lg:w-[65%] xl:w-[1200px] mx-auto ">
          <div className="flex flex-col gap-6 mb-[100px]">
            <div className=" xl:w-[760px] xl:h-[590px] py-[20px] px-[12px] xl:p-[30px] rounded-[24px] border-black border-[3px] bg-white shadow-[4px_4px_0px_rgb(0, 0, 0)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] mx-auto">
              <div className="flex relative">
                <div className=" shrink-0 relative w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] lg:w-[250px] lg:h-[250px] xl:w-[320px] xl:h-[320px] rounded-[16px] overflow-hidden">
                  <Image
                    src="/img/nftmintcover.webp"
                    alt="image animation"
                    className="w-full h-full"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-grow  h-full ml-[20px] py-[6px] xl:ml-[30px] xl:py-[10px] flex-col justify-between">
                  <div>
                    <h3 className="text-[21px] leading-[21px] xl:text-[24px] font-bold xl:leading-[24px] mb-2">
                      Mint Your NFT
                    </h3>
                    <p className="text-[16px] xl:text-[18px] font-medium xl:font-semibold leading-[24px] xl:leading-[30px]">
                      Total offering: 10000
                    </p>
                    <p className="text-[16px] xl:text-[18px] font-medium xl:font-semibold leading-[24px] xl:leading-[30px]">
                      Price: 0.19527 ETH
                    </p>
                    <p className="text-[16px] xl:text-[18px] font-medium xl:font-semibold leading-[24px] xl:leading-[30px]">
                      Max mint per address: 1
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
              <div className=" hidden lg:block mt-[20px] xl:mt-0 mx-auto">
                <p>
                  Nobody NFT Smart Contract:{" "}
                  <Link
                    href="https://etherscan.io/address/0x129d453253dbCE5CF6997DB8Fb461B2A20Fd275F"
                    target="__blank"
                    className=" text-[rgba(59,132,255,1)] underline"
                  >
                    0x129d453253dbCE5CF6997DB8Fb461B2A20Fd275F
                  </Link>
                </p>
              </div>
            </div>
            <div className="overflow-visible w-full xl:w-[760px] sm:h-[390px] overflow-y-scroll p-[30px] rounded-[24px] border-black border-[3px] bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] mt-[20px] xl:mt-0 mx-auto">
              <h3 className=" text-white sm:text-black text-[21px] sm:text-[24px] font-bold leading-6 mb-[20px] mt-[30px] sm:mt-0">
                Mint 101
              </h3>
              <div>
                <h2 className="text-[20px] sm:text-[22px] font-semibold mb-4">
                  PART I: Minting
                </h2>
                <p className=" text-[18px] font-medium leading-[30px]">
                  1. Minting time:
                  <br />
                  Feb 1, 2024, 8:00 PM (UTC+8) to Feb 3, 2024, 8:00 PM (UTC+8).
                  <br />
                  <br />
                  2. Minting price:
                  <br />
                  0.19527E + gas fee
                  <br />
                  <br />
                  3. Nobody NFT collection size:
                  <br />
                  10,000 Nobody NFTs
                  <br />
                  <br />
                  4. Number of available Nobody NFTs for minting and Whitelists:
                  <br />
                  Both are 9,500. <br />
                  <br />
                  The rest 500 will be allocated as follows:
                  <br />
                  Investors: 350
                  <br />
                  Nobody Team: 50
                  <br />
                  Friends and family: 50
                  <br />
                  Community Development Fund: 50
                  <br />
                  <br />
                  Any unminted Nobody NFTs will go to the Treasury after the
                  minting period ends.
                  <br />
                  <br />
                  5. Who is eligible to mint?
                  <br />
                  Anyone can participate in the minting of Nobody NFTs.
                  <br />
                  <br />
                  Whitelist holders have the highest priority and are guaranteed
                  to mint a Nobody NFT during the minting period. You do not
                  need to rush. <br />
                  <br />
                  Check your eligibility: visit nobody.xyz/mint; connect wallet.
                  <br />
                  <br />
                  Non-whitelist holders still have a chance to mint an NFT
                  through raffle. If a non-whitelist holder makes the deposit
                  within one hour after the minting starts, he/she will receive
                  a 9.527x boost in the raffle. A successful deposit would imply
                  that the user joins the raffle. <br />
                  <br />
                  The allocation of NFTs for the raffle depends on the number of
                  whitelist holders who make the deposit. For example, if there
                  are 4,500 Whitelist holders and 10,000 non-whitelist holders
                  who make the deposit by the end of the Minting period, there
                  will be 5,000 NFTs for the raffle (9,500-4,500). The results
                  of the raffle will be announced within 24 hours after the
                  minting period ends.
                  <br />
                  <br />
                  6. How many Nobody NFTs can be minted per wallet?
                  <br />
                  Each wallet address can only mint one Nobody NFT.
                  <br />
                  <br />
                  7. Which wallet address should I use for minting?
                  <br />
                  If you have a Whitelist, the minting wallet is the wallet
                  address that you directly submitted to us or indirectly
                  through our launching partners. If you are a non-whitelist
                  holder, feel free to mint with any of your ERC20 wallet
                  address.
                  <br />
                  <br />
                  8. When will the reveals take place?
                  <br />
                  Feb 7, 2024.
                  <br />
                  <br />
                  9. What is the royalty and how will it be used?
                  <br />
                  5%. We will use the funds to hire more full-time team members,
                  fund operations, and provide more value to the Nobody
                  community.
                  <br />
                  <br />
                </p>
                <h2 className="text-[20px] sm:text-[22px] font-semibold mb-4">
                  PART II: Raffle and Airdrop
                </h2>
                <p className=" text-[18px] font-medium leading-[30px]">
                  1. Raffle and Airdrop Time:
                  <br />
                  Feb 3, 2024, 8:00 PM (UTC+8) to Feb 4, 2024, 8 PM (UTC+8).
                  <br />
                  <br />
                  2. Raffle and Airdrop Details:
                  <br />
                  If you have a Whitelist and successfully mint an Nobody NFT,
                  we will airdrop it to your minting wallet within 24 hours
                  after the minting ends in the form of a Mystery Box. No
                  further action is required.
                  <br />
                  <br />
                  If you are a non-whitelist holder and join the raffle, you
                  could check the status of the raffle on the minting page in 24
                  hours after the minting ends (Mint page: nobody.xyz/mint).
                  <br />
                  <br />
                  We will also release the list of successful mints on
                  Nobody&apos;s social media. As long as your wallet address
                  appears on the list, you will be guaranteed to receive the NFT
                  airdrop. No further action is required.
                  <br />
                  <br />
                </p>
                <p className=" text-[18px] font-medium leading-[30px]">
                  1. Refund time:
                  <br />
                  Feb 4, 2024, 8:00 PM (UTC+8) to Jul 4, 2024, 8 PM (UTC+8).
                  <br />
                  <br />
                  2. Refund details:
                  <br />
                  If you don’t win the raffle when you check the status after
                  connecting the wallet, it means you do not mint the Nobody NFT
                  successfully.
                  <br />
                  <br />
                  Refund ends on July 4, 2024.
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

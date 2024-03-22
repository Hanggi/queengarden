import { queenGardenABI } from "@/abi/queen-garden.abi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useSimulateContract, useWriteContract } from "wagmi";

interface Props {}

export default function MintActions({}: Props) {
  const { openConnectModal } = useConnectModal();
  const { address, isConnected } = useAccount();
  const { writeContract, data } = useWriteContract();

  const result = useSimulateContract({
    abi: queenGardenABI,
    address: process.env.NEXT_PUBLIC_NFT_ADDRESS as `0x{string}`,
    functionName: "freeMint",
    args: [],
  });

  console.log(result);
  console.log(result.error);
  console.log(result.data);

  console.log(data);

  if (isConnected) {
    return (
      <div className="py-8">
        <div
          className="h-[56px] w-full rounded-[12px] xl:h-[64px] xl:rounded-[12px] bg-[rgba(255,214,0,1)] border-[2px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover-btn-shadow flex justify-center items-center text-[21px] xl:text-[24px] leading-[21px] xl:leading-[24px] font-semibold min-w-[240px] xl:min-w-[260px]"
          onClick={() => {
            writeContract({
              abi: queenGardenABI,
              address: process.env.NEXT_PUBLIC_NFT_ADDRESS as `0x{string}`,
              functionName: "freeMint",
              args: [],
            });
          }}
        >
          Mint
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mt-[20px] xl:my-[30px] py-[30px] px-[12px] xl:h-[124px] bg-[rgba(255,214,0,0.2)] rounded-[12px] xl:rounded-[16px] flex flex-col lg:flex-row lg:justify-between items-center mx-auto">
      <div className="text-[18px] leading-[24px] font-medium text-left xl:text-left mb-[20px] lg:mb-0 mx-[20px]">
        The mint is over now. Please connect your wallet to check if you have
        successfully minted the Nobody NFT.
      </div>
      <div className="shrink-0">
        <div
          className="h-[56px] w-full rounded-[12px] xl:h-[64px] xl:rounded-[12px] bg-[rgba(255,214,0,1)] border-[2px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover-btn-shadow flex justify-center items-center text-[21px] xl:text-[24px] leading-[21px] xl:leading-[24px] font-semibold min-w-[240px] xl:min-w-[260px]"
          onClick={openConnectModal}
        >
          Connect Wallet
        </div>
      </div>
    </div>
  );
}

import { queenGardenABI } from "@/abi/queen-garden.abi";
import { proof } from "@/abi/queen-graden.proof";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useSimulateContract, useWriteContract } from "wagmi";
import { SimulateContractErrorType } from "wagmi/actions";

interface Props {}

export default function MintActions({}: Props) {
  const { openConnectModal } = useConnectModal();
  const { address, isConnected } = useAccount();
  const { writeContract, data } = useWriteContract();

  const result = useSimulateContract({
    abi: queenGardenABI,
    address: process.env.NEXT_PUBLIC_NFT_ADDRESS as `0x{string}`,
    functionName: "mintWL",
    args: [address ? proof[address] : ""],
  });

  // console.log(data);

  // useEffect(() => {
  //   if (result) {
  //     console.log(result.error);
  //     console.log(result.data);
  //   }
  // }, [result]);

  if (result?.failureReason) {
    return (
      <div className="w-full mt-[20px] xl:my-[30px] py-[30px] px-[12px] xl:h-[124px] bg-[rgba(255,214,0,0.2)] rounded-[12px] xl:rounded-[16px] flex flex-col lg:flex-row lg:justify-between items-center mx-auto">
        <div className="text-[18px] leading-[24px] font-medium text-left xl:text-left mb-[20px] lg:mb-0 mx-[20px]">
          {getErrorMessage(result?.failureReason)}
        </div>
      </div>
    );
  }

  if (isConnected) {
    return (
      <div className="py-8">
        <div
          className="h-[56px] w-full rounded-[12px] xl:h-[64px] xl:rounded-[12px] bg-[rgba(255,214,0,1)] border-[2px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover-btn-shadow flex justify-center items-center text-[21px] xl:text-[24px] leading-[21px] xl:leading-[24px] font-semibold min-w-[240px] xl:min-w-[260px]"
          onClick={() => {
            writeContract({
              abi: queenGardenABI,
              address: process.env.NEXT_PUBLIC_NFT_ADDRESS as `0x{string}`,
              functionName: "mintWL",
              args: [address ? proof[address] : ""],
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
        mint
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

function getErrorMessage(reason: SimulateContractErrorType) {
  console.error(reason.message);
  if (reason.message.includes("Already minted")) {
    return "You have already minted the NFT.";
  }

  if (reason.message.includes(`Value "undefined" is not a valid array`)) {
    return "You are not in the whitelist.";
  }

  if (reason.message.includes("Invalid proof")) {
    return "You are not in the whitelist.";
  }

  if (reason.message.includes("WL sale is not active")) {
    return "Whitelist sale is not started.";
  }

  if (reason.message.includes("Sale is not active")) {
    return "Sale is not started.";
  }

  return reason.message;
}

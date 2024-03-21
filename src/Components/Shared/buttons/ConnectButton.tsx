import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useChainId, useSwitchChain } from "wagmi";

import Typography from "@mui/joy/Typography";

const CHAIN_ID = 80001;

export default function MyConnectButton() {
  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const chainId = useChainId();
  const { chains, switchChain } = useSwitchChain();

  return (
    <div
      className={
        "hover-btn-shadow inline-flex items-center justify-center " +
        "lg:h-[40px]  lg:w-[160px] 3xl:h-[48px] 3xl:w-[190px] " +
        "rounded-[10px] border-black border-2 bg-white " +
        "shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:hover-btn-shadow " +
        "text-center cursor-pointer"
      }
    >
      {isConnected && (
        <Typography className="!font-bold text-black" level="title-lg">
          {address?.slice(0, 6) + "..." + address?.slice(-4)}
        </Typography>
      )}

      {chainId != CHAIN_ID && (
        <div>
          <Typography
            className="!font-bold text-black"
            level="title-lg"
            onClick={() => {
              switchChain({
                chainId: CHAIN_ID,
              });
            }}
          >
            Switch network
          </Typography>
        </div>
      )}

      {chainId == CHAIN_ID && !isConnected && (
        <div>
          <Typography
            className="!font-bold text-black"
            level="title-lg"
            onClick={() => {
              console.log("openConnectModal", openConnectModal);
              openConnectModal && openConnectModal();
            }}
          >
            Connect Wallet
          </Typography>
        </div>
      )}
    </div>
  );
}

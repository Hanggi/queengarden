import Header from "@/Components/Shared/Header";
import "@fontsource/inter";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { appWithTranslation } from "next-i18next";
import "remixicon/fonts/remixicon.css";
import { polygon, polygonMumbai } from "viem/chains";
import { WagmiProvider } from "wagmi";

import type { AppProps } from "next/app";

import "../../i18n";
import "../styles/globals.css";

const config = getDefaultConfig({
  appName: "Queen Garden",
  projectId: "5c3146bd8b64bfd475c3a7518f8fcf4e",
  chains: [polygon],
  ssr: true,
});

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider modalSize="compact">
            <Header />
            <Component {...pageProps} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}
export default appWithTranslation(App);

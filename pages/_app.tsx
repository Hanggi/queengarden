import Header from "@/Components/Shared/Header";
import "@fontsource/inter";
import "remixicon/fonts/remixicon.css";

import type { AppProps } from "next/app";

import "../src/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

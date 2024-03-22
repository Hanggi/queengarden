import HomeMain from "@/Components/Home/HomeMain";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <HomeMain />
    </div>
  );
}
export async function getStaticProps(context: any) {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

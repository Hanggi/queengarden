import { Inter } from "next/font/google";
import HomeMain from "@/Components/Home/HomeMain";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <HomeMain />
    </>
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

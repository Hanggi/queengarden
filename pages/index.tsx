import { Inter } from "next/font/google";
import HomeMain from "@/Components/Home/HomeMain";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <HomeMain />
    </>
  );
}

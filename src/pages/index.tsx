import HomeMain from "@/Components/Home/HomeMain";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <HomeMain />
    </div>
  );
}

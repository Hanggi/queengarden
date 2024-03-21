import React from "react";
import Hero from "./Hero";
import Community from "./Community";
import Talk from "./Talk";
import Sticky from "../Shared/Sticky";

const HomeMain = () => {
  return (
    <>
      <div className="relative h-full">
        <Hero />
        <Community />
        <Talk />
      </div>
      <Sticky />
    </>
  );
};

export default HomeMain;

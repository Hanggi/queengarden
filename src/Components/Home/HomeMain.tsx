import React from "react";
import Hero from "./Hero";
import Sticky from "../Shared/Sticky";

const HomeMain = () => {
  return (
    <>
      <div className="relative h-full">
        <Hero />
        <Sticky />
        {/* <Community />
        <Talk /> */}
      </div>
    </>
  );
};

export default HomeMain;

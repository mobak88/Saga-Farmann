import React from "react";
import Header from "@/components/header/Header";
import ParallaxMap from "@/components/parallax/map/ParallaxMap";
import ParallaxText from "@/components/parallax/text/parallaxText";

const TheJourney = () => {
  return (
    <>
      <Header header={"The Journey"} />
      <ParallaxMap />
      <ParallaxText />
    </>
  );
};

export default TheJourney;

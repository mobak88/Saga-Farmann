import React from "react";
import Header from "@/components/header/Header";
import ParallaxMap from "@/components/parallax/map/ParallaxMap";
import ParallaxText from "@/components/parallax/text/parallaxText";
import styles from "./journeyPage.module.css";

const TheJourney = () => {
  //   return (
  //       <Header header={"The Journey"} />
  //       <ParallaxText />
  //       <ParallaxMap />
  //
  //   );

  //
  return (
    <div className={styles["parallax-text-container"]}>
      <ParallaxText />
    </div>
  );
};

export default TheJourney;

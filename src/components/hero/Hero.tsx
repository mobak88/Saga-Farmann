import React from "react";
import Hamburger from "../navigation/hamburger/Hamburger";
import { HeadingOneHome } from "../typography/headings/HeadingOne";
import HeadingTwo from "../typography/headings/HeadingTwo";
import styles from "./Hero.module.css";
import { HeroSection } from "./interfaces";
import WaveRedBrownTop from "../waves/wavesLargeScreen/WaveRedBrownTop";
import WaveRedBrownSmall from "../waves/wavesSmallScreen/WaveRedBrownSmall";
import HamburgerTransition from "../navigation/hamburger/HamburgerTransition";

interface Props {
  data: HeroSection;
}

const Hero = ({ data }: Props) => {
  return (
    <div className={styles["hero-wrapper"]}>
      {data?.hero_background_image && (
        <video className={styles["hero-background"]} loop autoPlay muted>
          <source src={data.hero_background_image} type="video/mp4" />
        </video>
      )}
      <div className={styles["hero-burger-wrapper"]}>
        <HamburgerTransition />
      </div>
      <div className={styles["hero-text-container"]}>
        <HeadingOneHome>Saga asia</HeadingOneHome>
        {data?.hero_text && <HeadingTwo>{data.hero_text}</HeadingTwo>}
      </div>

      <div className={styles["wave-container"]}>
        <WaveRedBrownTop />
        <WaveRedBrownSmall />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import styles from "./Hero.module.css";
import { HeroSection } from "./interfaces";
import WaveRedBrownTop from "../waves/wavesLargeScreen/WaveRedBrownTop";
import WaveRedBrownSmall from "../waves/wavesSmallScreen/WaveRedBrownSmall";
import HamburgerTransition from "../navigation/hamburger/HamburgerTransition";
import Image from "next/image";

interface Props {
  data: HeroSection;
}

const Hero = ({ data }: Props) => {
  return (
    <div className={styles["hero-wrapper"]}>
      {data?.hero_background_image && (
        <video className={styles["hero-background"]} loop autoPlay muted>
          <source src="https://streamable.com/etu62s" type="video/mp4" />
        </video>
      )}
      <div className={styles["hero-burger-wrapper"]}>
        <HamburgerTransition />
      </div>
      <div className={styles["hero-text-container"]}>
        <Image
          className={styles["hero-logo"]}
          width={305}
          height={151}
          src={"/Saga Asia_org-ai.png"}
          alt="Saga Farmann logo"
        />
      </div>

      <div className={styles["wave-container"]}>
        <WaveRedBrownTop />
        <WaveRedBrownSmall />
      </div>
    </div>
  );
};

export default Hero;

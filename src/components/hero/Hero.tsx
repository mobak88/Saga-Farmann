import React from "react";
import Hamburger from "../navigation/hamburger/hamburger";
import { HeadingOneHome } from "../typography/headings/headingOne";
import HeadingTwo from "../typography/headings/headingTwo";
import styles from "./Hero.module.css";
import { HeroSection } from "./interfaces";

interface Props {
  data: HeroSection;
}

const Hero = ({ data }: Props) => {
  return (
    <div className={styles["hero-wrapper"]}>
      <Hamburger />
      <video className={styles["hero-background"]} loop autoPlay muted>
        <source src={data.hero_background_image} type="video/mp4" />
      </video>
      <div className={styles["hero-text-container"]}>
        <HeadingOneHome>Saga asia</HeadingOneHome>
        <HeadingTwo>{data.hero_text}</HeadingTwo>
      </div>
    </div>
  );
};

export default Hero;

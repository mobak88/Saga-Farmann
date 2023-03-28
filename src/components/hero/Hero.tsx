import React from "react";
import Hamburger from "../navigation/hamburger/Hamburger";
import { HeadingOneHome } from "../typography/headings/HeadingOne";
import HeadingTwo from "../typography/headings/HeadingTwo";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles["hero-background"]}>
      <div className={styles["hero-text-container"]}>
        <HeadingOneHome>Saga asia</HeadingOneHome>
        <HeadingTwo>Follow the vikings</HeadingTwo>
      </div>
      <Hamburger />
    </div>
  );
};

export default Hero;

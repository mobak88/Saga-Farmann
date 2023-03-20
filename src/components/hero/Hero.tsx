import React from "react";
import Hamburger from "../navigation/hamburger/hamburger";
import { HeadingOneHome } from "../typography/headings/headingOne";
import HeadingTwo from "../typography/headings/headingTwo";
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

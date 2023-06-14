import React from "react";
import { WaveProps } from "../wavesLargeScreen/WaveDarkHome";
import styles from "../Waves.module.css";

const WaveDarkHomeSmall = ({ bottom }: WaveProps) => {
  return (
    <svg
      className={
        bottom
          ? `${styles["wave-bottom"]} ${styles["wave-small"]} ${styles["wave-top-latest-news"]}`
          : `${styles["wave-top-latest-news"]} ${styles["wave-small"]}`
      }
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100"
      viewBox="0 0 392.199 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        id="mistermoon_dark_backround_texture_e33e82ba-37ea-4940-bacc-e50977be18da"
        d="M0,638.039H392.2v90.644L287.175,742l-90.342-13.322L79.479,742,0,710.532Z"
        transform="translate(392.199 742.004) rotate(180)"
        fill="#142c34"
      />
    </svg>
  );
};

export const WaveDarkHomeSmallBottomPink = () => {
  return (
    <svg
      className={`${styles["wave-bottom"]} ${styles["wave-small"]} ${styles["wave-dark-bottom-pink"]}`}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100"
      viewBox="0 0 392.199 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        id="mistermoon_dark_backround_texture_e33e82ba-37ea-4940-bacc-e50977be18da"
        d="M0,638.039H392.2v90.644L287.175,742l-90.342-13.322L79.479,742,0,710.532Z"
        transform="translate(392.199 742.004) rotate(180)"
        fill="#142c34"
      />
    </svg>
  );
};

export default WaveDarkHomeSmall;

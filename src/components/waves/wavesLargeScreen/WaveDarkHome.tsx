import React from "react";
import styles from "../Waves.module.css";

export interface WaveProps {
  bottom?: boolean;
}

const WaveDarkHome = ({ bottom }: WaveProps) => {
  return (
    <svg
      className={
        bottom
          ? `${styles["wave-bottom"]} ${styles.wave}`
          : `${styles.wave} ${styles["wave-top-latest-news"]}`
      }
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="222.655"
      viewBox="0 0 1920 222.655"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        id="mistermoon_dark_backround_texture_e33e82ba-37ea-4940-bacc-e50977be18da"
        d="M0-27.634l331.853-55.89L894.569-46.784l562.715-48.988L1920-27.634V126.884H0Z"
        transform="translate(0 95.771)"
        fill="#142c34"
      />
    </svg>
  );
};

export const WaveDarkHomeBottomPink = () => {
  return (
    <svg
      className={`${styles["wave-bottom"]} ${styles.wave} ${styles["wave-dark-bottom-pink"]}`}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="240"
      viewBox="0 0 1920 222.655"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        id="mistermoon_dark_backround_texture_e33e82ba-37ea-4940-bacc-e50977be18da"
        d="M0-27.634l331.853-55.89L894.569-46.784l562.715-48.988L1920-27.634V126.884H0Z"
        transform="translate(0 95.771)"
        fill="#142c34"
      />
    </svg>
  );
};

export default WaveDarkHome;

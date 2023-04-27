import React from "react";
import styles from "../Waves.module.css";

interface HeaderInterface {
  voyage?: boolean;
}

const WaveDarkHeader = ({ voyage }: HeaderInterface) => {
  return (
    <svg
      className={styles["wave"]}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="72"
      viewBox="0 0 1927.183 72"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        id="mistermoon_dark_backround_texture_e33e82ba-37ea-4940-bacc-e50977be18da"
        d="M-11.738,217.394H1915.445V29.149L1719.292,5.267,1507.98-4.606,1244.562,19.627,871.146,14.242,575.886-4.606,462.8-1.875,185.1,14.242H-11.738Z"
        transform="translate(11.737 4.606)"
        fill={voyage ? "#bf625f" : "#142c34"}
      />
    </svg>
  );
};

export default WaveDarkHeader;

import React from "react";
import styles from "./ParallaxText.module.css";

interface TextProps {
  heading: string;
  text: string;
  url: string;
}

const ParallaxText = ({ heading, text, url }: TextProps) => {
  return (
    <div
      className={styles["parallax-text"]}
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div>{heading}</div>
      <div>{text}</div>
    </div>
  );
};

export default ParallaxText;

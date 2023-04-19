import React, { useState, useRef } from "react";
import styles from "./ParallaxText.module.css";
import { CSSTransition } from "react-transition-group";
import useScrollPosition from "../scrollPosition/UseScrollPosition";

interface TextProps {
  heading: string;
  text: string;
  url: string;
  i: number;
}

const ParallaxText = ({ heading, text, url, i }: TextProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [click, setClick] = useState(false);
  const [transform, setTransform] = useState(0);

  const nodeRefParallax = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsActive((prevState) => !prevState);
    setClick((prevState) => !prevState);
  };

  useScrollPosition(({ currPos }) => {
    setTransform(currPos.y);
  });

  return (
    <>
      <div
        className={`${styles.parallax}`}
        style={{
          backgroundImage: `url(${url})`,
          backgroundColor: isActive ? "salmon" : "",
          color: isActive ? "green" : "",
          transform: `translateY(${transform / 2}px)`,
        }}
        key={i + Math.random()}
      >
        <div
          className={`${styles["heading"]}
          ${styles["left-element-" + i.toString()]}
		  `}
          style={{
            transform: `translateX(${-transform / 3}px)`,
          }}
        >
          {heading}
        </div>
        <div
          className={styles["text"]}
          style={{
            transform: `translateX(${-transform * 0.7}px)`,
          }}
        >
          {text}
        </div>
      </div>
    </>
  );
};

export default ParallaxText;

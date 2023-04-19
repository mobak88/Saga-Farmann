import React, { useState, useRef } from "react";
import styles from "./ParallaxText.module.css";
import { CSSTransition } from "react-transition-group";

interface TextProps {
  heading: string;
  text: string;
  url: string;
}

const ParallaxText = ({ heading, text, url }: TextProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [click, setClick] = useState(false);

  const nodeRefParallax = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsActive((prevState) => !prevState);
    setClick((prevState) => !prevState);
  };

  return (
    <>
      <CSSTransition
        nodeRef={nodeRefParallax}
        in={isActive}
        timeout={1000}
        classNames={{
          enter: styles["parallax-enter"],
          enterActive: styles["parallax-enter-active"],
          exit: styles["parallax-exit"],
          exitActive: styles["parallax-exit-active"],
        }}
        unmountOnExit
      >
        <div
          ref={nodeRefParallax}
          className={styles["parallax-text"]}
          style={{
            backgroundImage: `url(${url})`,
            backgroundColor: isActive ? "salmon" : "",
            color: isActive ? "green" : "",
          }}
        >
          <div>{heading}</div>
          <div>{text}</div>
        </div>
      </CSSTransition>
      <CSSTransition
        nodeRef={nodeRefParallax}
        in={isActive}
        timeout={1000}
        classNames={{
          enter: styles["button-enter"],
          enterActive: styles["button-enter-active"],
          exit: styles["button-exit"],
          exitActive: styles["button-exit-active"],
        }}
      >
        <button
          className={styles["parallax-button"]}
          onClick={toggleMenu}
          style={{
            backgroundColor: isActive ? "salmon" : "",
            color: isActive ? "green" : "",
          }}
        >
          Next
        </button>
      </CSSTransition>
    </>
  );
};

export default ParallaxText;

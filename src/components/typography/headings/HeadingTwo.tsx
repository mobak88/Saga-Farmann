import React, { ReactNode } from "react";
import styles from "./Headings.module.css";

interface HeadingProps {
  children: ReactNode;
  dark?: boolean;
}

const HeadingTwo = ({ children, dark = false }: HeadingProps) => {
  const heading = dark;

  return heading ? (
    <h2
      className={`${styles["heading"]} ${styles["heading-two"]} ${styles["dark"]} `}
    >
      {children}
    </h2>
  ) : (
    <h2
      className={`${styles["heading"]} ${styles["heading-two"]} ${styles["light"]}`}
    >
      {children}
    </h2>
  );
};

export default HeadingTwo;

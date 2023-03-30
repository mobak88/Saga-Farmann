import React, { ReactNode } from "react";
import styles from "./Headings.module.css";

interface HeadingProps {
  children: ReactNode;
  dark?: boolean;
}

const HeadingThree = ({ children, dark = false }: HeadingProps) => {
  const heading = dark;

  return heading ? (
    <h3
      className={`${styles["heading"]} ${styles["heading-three"]} ${styles["dark"]} `}
    >
      {children}
    </h3>
  ) : (
    <h3
      className={`${styles["heading"]} ${styles["heading-three"]} ${styles["light"]}`}
    >
      {children}
    </h3>
  );
};

export default HeadingThree;

import React, { ReactNode } from "react";
import styles from "./headings.module.css";

interface HeadingProps {
  children: ReactNode;
  headingDark?: boolean;
}

const HeadingThree = ({ children, headingDark = false }: HeadingProps) => {
  const heading = headingDark;

  return heading ? (
    <h3
      className={`${styles["heading"]} ${styles["heading-three-l"]} ${styles["light"]} `}
    >
      {children}
    </h3>
  ) : (
    <h3
      className={`${styles["heading"]} ${styles["heading-three-sm"]} ${styles["dark"]}`}
    >
      {children}
    </h3>
  );
};

export default HeadingThree;

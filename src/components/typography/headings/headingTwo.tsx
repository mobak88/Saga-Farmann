import React, { ReactNode } from "react";
import styles from "./headings.module.css";

interface HeadingProps {
  children: ReactNode;
  headingDark?: boolean;
}

const HeadingTwo = ({ children, headingDark = false }: HeadingProps) => {
  const heading = headingDark;

  return heading ? (
    <h2
      className={`${styles["heading"]} ${styles["heading-two-l"]} ${styles["light"]} `}
    >
      {children}
    </h2>
  ) : (
    <h2
      className={`${styles["heading"]} ${styles["heading-two-sm"]} ${styles["dark"]}`}
    >
      {children}
    </h2>
  );
};

export default HeadingTwo;

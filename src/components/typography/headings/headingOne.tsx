import React, { ReactNode } from "react";
import styles from "./headings.module.css";

interface HeadingProps {
  children: ReactNode;
  mainHeading?: boolean;
}

const HeadingOne = ({ children, mainHeading = false }: HeadingProps) => {
  const heading = mainHeading;

  return heading ? (
    <h1
      className={`${styles.heading} ${styles["heading-one-l"]} ${styles["light"]} `}
    >
      {children}
    </h1>
  ) : (
    <h1
      className={`${styles.heading} ${styles["heading-one-sm"]} ${styles["light"]}`}
    >
      {children}
    </h1>
  );
};

export default HeadingOne;

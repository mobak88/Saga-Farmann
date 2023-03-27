import React from "react";
import styles from "./paragraphs.module.css";
import { ParagraphProps } from "./paragraphsBig";

const ParagraphsSmallTruncated = ({
  children,
  dark = false,
}: ParagraphProps) => {
  const paragraph = dark;

  return paragraph ? (
    <p
      className={`${styles.paragraphs} ${styles["paragraphs-sm"]} ${styles.dark} ${styles["paragraphs-truncated"]}`}
    >
      {children}
    </p>
  ) : (
    <p
      className={`${styles.paragraphs} ${styles["paragraphs-sm"]} ${styles.light} ${styles["paragraphs-truncated"]}`}
    >
      {children}
    </p>
  );
};

export default ParagraphsSmallTruncated;

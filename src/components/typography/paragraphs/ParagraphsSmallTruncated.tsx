import React from "react";
import styles from "./Paragraphs.module.css";
import { ParagraphProps } from "./ParagraphsBig";

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

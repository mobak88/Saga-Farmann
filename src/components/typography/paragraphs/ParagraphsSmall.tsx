import React from "react";
import styles from "./paragraphs.module.css";
import { ParagraphProps } from "./ParagraphsBig";

export default function ParagraphsSmall({
  children,
  dark = false,
}: ParagraphProps) {
  const paragraph = dark;

  return paragraph ? (
    <p
      className={`${styles.paragraphs} ${styles["paragraphs-sm"]} ${styles.dark}`}
    >
      {children}
    </p>
  ) : (
    <p
      className={`${styles.paragraphs} ${styles["paragraphs-sm"]} ${styles.light}`}
    >
      {children}
    </p>
  );
}

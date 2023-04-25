import React from "react";
import styles from "./Paragraphs.module.css";
import { ParagraphProps } from "./ParagraphsBig";

export default function ParagraphsMedium({
  children,
  dark = false,
}: ParagraphProps) {
  const paragraph = dark;

  return paragraph ? (
    <p
      className={`${styles.paragraphs} ${styles["paragraphs-m"]} ${styles.dark}`}
    >
      {children}
    </p>
  ) : (
    <p
      className={`${styles.paragraphs} ${styles["paragraphs-m"]} ${styles.light}`}
    >
      {children}
    </p>
  );
}

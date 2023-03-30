import React, { ReactNode } from "react";
import styles from "./Paragraphs.module.css";

export interface ParagraphProps {
  children: ReactNode;
  dark?: boolean;
}

export default function ParagraphsBig({
  children,
  dark = false,
}: ParagraphProps) {
  const paragraph = dark;

  return paragraph ? (
    <p
      className={`${styles.paragraphs} ${styles["paragraphs-l"]} ${styles.dark}`}
    >
      {children}
    </p>
  ) : (
    <p
      className={`${styles.paragraphs} ${styles["paragraphs-l"]} ${styles.light}`}
    >
      {children}
    </p>
  );
}

import React, { ReactNode } from "react";
import styles from "./paragraphs.module.css";

interface ParagraphProps {
  children: ReactNode;
  paragraphDark?: boolean;
}

export default function paragraphsDark({
  children,
  paragraphDark = false,
}: ParagraphProps) {
  const paragraph = paragraphDark;

  return paragraph ? (
    <p
      className={`${styles.paragraphs} ${styles["paragraphs-l"]} ${styles.dark}`}
    >
      {children}
    </p>
  ) : (
    <p
      className={`${styles.paragraphs} ${styles["paragraphs-sm"]} ${styles.dark}`}
    >
      {children}
    </p>
  );
}

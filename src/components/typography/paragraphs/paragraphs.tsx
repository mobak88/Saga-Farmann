import React, { ReactNode } from "react";
import styles from "./paragraphs.module.css";

interface ParagraphProps {
  children: ReactNode;
  paragraphBig?: boolean;
  paragraphDark?: boolean;
}

export default function paragraphs({
  children,
  paragraphBig = false,
}: ParagraphProps) {
  const paragraph = paragraphBig;

  return paragraph ? (
    <p
      className={`${styles.paragraphs} ${styles["paragraphs-l"]} ${styles.ligth}`}
    >
      {children}
    </p>
  ) : (
    <p
      className={`${styles.paragraphs} ${styles["paragraphs-sm"]} ${styles.ligth}`}
    >
      {children}
    </p>
  );
}

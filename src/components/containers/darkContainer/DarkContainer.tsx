import React, { ReactNode } from "react";
import styles from "./DarkContainer.tsx.module.css";

interface DarkContainerProps {
  children: ReactNode;
}

const DarkContainer = ({ children }: DarkContainerProps) => {
  return <div className={styles["dark-container"]}>{children}</div>;
};

export default DarkContainer;

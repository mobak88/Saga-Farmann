import React, { FC } from "react";
import styles from "headings.module.css";

interface HeadingProps {
  text: string;
}

const Heading = ({ text }: HeadingProps) => {
  return <h1 className={styles["heading-one"]}>{text}</h1>;
};

export default Heading;

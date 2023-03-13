import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "./Header.module.css";

interface HeaderInterface {
  header: string;
}

const Header = ({ header }: HeaderInterface) => {
  return (
    <div className={styles.wrapper}>
      <h1>{header}</h1>
    </div>
  );
};

export default Header;

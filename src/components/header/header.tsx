import React from "react";
import HeadingOne from "../typography/headings/HeadingOne";
import styles from "./Header.module.css";

interface HeaderInterface {
  header: string;
}

const Header = ({ header }: HeaderInterface) => {
  return (
    <div className={styles.wrapper}>
      <HeadingOne>{header}</HeadingOne>
    </div>
  );
};

export default Header;

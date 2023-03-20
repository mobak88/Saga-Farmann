import Image, { StaticImageData } from "next/image";
import React from "react";
import HeadingOne from "../typography/headings/headingOne";
import styles from "./Header.module.css";
import ReactMarkdown from "react-markdown";

interface HeaderInterface {
  header: string;
}

const Header = ({ header }: HeaderInterface) => {
  return (
    <div className={styles.wrapper}>
      <HeadingOne>
        <ReactMarkdown>{header}</ReactMarkdown>
      </HeadingOne>
    </div>
  );
};

export default Header;

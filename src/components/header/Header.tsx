import React from "react";
import HeadingOne from "../typography/headings/HeadingOne";
import styles from "./Header.module.css";
import he from "he";
import WaveDarkHeading from "../waves/wavesLargeScreen/WaveDarkHeader";

interface HeaderInterface {
  header: string;
}

const Header = ({ header }: HeaderInterface) => {
  const decodedHeader = he.decode(header);
  const replacedHeader = decodedHeader.replace(/&#8221;/g, "-");

  return (
    <div className={styles.wrapper}>
      <HeadingOne>{replacedHeader}</HeadingOne>
      <div className={styles["wave-container"]}>
        <WaveDarkHeading />
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import HeadingOne from "../typography/headings/HeadingOne";
import styles from "./Header.module.css";
import he from "he";
import WaveDarkHeader from "../waves/wavesLargeScreen/WaveDarkHeader";
import WaveDarkHeaderSmall from "../waves/wavesSmallScreen/WaveDarkHeaderSmall";
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
        <WaveDarkHeader />
        <WaveDarkHeaderSmall />
      </div>
    </div>
  );
};

export default Header;

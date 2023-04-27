import React from "react";
import HeadingOne from "../typography/headings/HeadingOne";
import styles from "./Header.module.css";
import he from "he";
import WaveDarkHeader from "../waves/wavesLargeScreen/WaveDarkHeader";
import WaveDarkHeaderSmall from "../waves/wavesSmallScreen/WaveDarkHeaderSmall";

interface HeaderInterface {
  header: string;
  journey?: boolean;
}

const Header = ({ header, journey }: HeaderInterface) => {
  const decodedHeader = he.decode(header);
  const replacedHeader = decodedHeader.replace(/&#8221;/g, "-");

  return (
    <div className={styles.wrapper}>
      <HeadingOne>{replacedHeader}</HeadingOne>
      <div className={styles["wave-container"]}>
        <WaveDarkHeader journey={journey} />
        <WaveDarkHeaderSmall />
      </div>
    </div>
  );
};

export default Header;

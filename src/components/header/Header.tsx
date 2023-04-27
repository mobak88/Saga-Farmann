import React from "react";
import HeadingOne from "../typography/headings/HeadingOne";
import styles from "./Header.module.css";
import he from "he";
import WaveDarkHeader from "../waves/wavesLargeScreen/WaveDarkHeader";
import WaveDarkHeaderSmall from "../waves/wavesSmallScreen/WaveDarkHeaderSmall";

interface HeaderInterface {
  header: string;
  voyage?: boolean;
}

const Header = ({ header, voyage }: HeaderInterface) => {
  const decodedHeader = he.decode(header);
  const replacedHeader = decodedHeader.replace(/&#8221;/g, "-");

  return (
    <div className={styles.wrapper}>
      <HeadingOne>{replacedHeader}</HeadingOne>
      {!voyage && (
        <div className={styles["wave-container"]}>
          <WaveDarkHeader voyage={voyage} />
          <WaveDarkHeaderSmall />
        </div>
      )}
    </div>
  );
};

export default Header;

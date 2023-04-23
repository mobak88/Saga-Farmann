import React, { ReactNode, useState } from "react";
import HeadingOne from "../typography/headings/HeadingOne";
import styles from "./HeaderWithBtns.module.css";
import he from "he";
import WaveDarkHeader from "../waves/wavesLargeScreen/WaveDarkHeader";
import WaveDarkHeaderSmall from "../waves/wavesSmallScreen/WaveDarkHeaderSmall";
import SwitchIdButton from "../buttons/SwitchIdButton";

interface HeaderInterface {
  header: string;
  ids: number[];
  id: number;
}

const HeaderWithBtns = ({ header, ids, id }: HeaderInterface) => {
  const decodedHeader = he.decode(header);
  const replacedHeader = decodedHeader.replace(/&#8221;/g, "-");
  const [currentId, setCurrentId] = useState<number>(ids.indexOf(id));

  return (
    <div className={styles.wrapper}>
      <div className={styles["button-heading-wrapper"]}>
        <SwitchIdButton
          currentId={currentId}
          totalIds={ids.length}
          setCurrentId={setCurrentId}
          baseUrl="/destinations"
          ids={ids}
        >
          <HeadingOne>{decodedHeader}</HeadingOne>
        </SwitchIdButton>
      </div>
      <div className={styles["wave-container"]}>
        <WaveDarkHeader />
        <WaveDarkHeaderSmall />
      </div>
    </div>
  );
};

export default HeaderWithBtns;

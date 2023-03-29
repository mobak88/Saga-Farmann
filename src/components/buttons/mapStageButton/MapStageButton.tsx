import React from "react";
import styles from "./MapStageButton.module.css";

interface StageButtonProps {
  stageName: string;
  stageNumber: number;
}

const MapStageButton = ({ stageName, stageNumber }: StageButtonProps) => {
  return (
    <>
      <button className={styles["stage-button"]}>
        {stageNumber}. {stageName}
      </button>
    </>
  );
};

export default MapStageButton;

import React from "react";
import styles from "./MapStageButton.module.css";

interface StageButtonProps {
  stageName: string;
  stageNumber: number;
  showModal: () => void;
}

const MapStageButton = ({
  stageName,
  stageNumber,
  showModal,
}: StageButtonProps) => {
  return (
    <>
      <button className={styles["stage-button"]} onClick={showModal}>
        {stageNumber}. {stageName}
      </button>
    </>
  );
};

export default MapStageButton;

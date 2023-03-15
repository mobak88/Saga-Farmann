import React from "react";
import styles from "./switchIdButtons.module.css";

type Props = {
  currentId: number;
  totalIds: number;
  setCurrentId: (id: number) => void;
};

const SwitchIdButton = ({ currentId, totalIds, setCurrentId }: Props) => {
  const handleNext = () => {
    const nextId = (currentId + 1) % totalIds;
    setCurrentId(nextId);
  };

  const handlePrev = () => {
    const prevId = (currentId + totalIds - 1) % totalIds;
    setCurrentId(prevId);
  };

  return (
    <div>
      <button onClick={handlePrev} className={styles["change-id-btn-left"]}>
        Previous
      </button>
      <button onClick={handleNext} className={styles["change-id-btn-right"]}>
        Next
      </button>
    </div>
  );
};

export default SwitchIdButton;

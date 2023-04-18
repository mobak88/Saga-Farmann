import React, { ReactNode } from "react";
import styles from "./SwitchIdButtons.module.css";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Props = {
  ids: number[];
  currentId: number;
  setCurrentId: (id: number) => void;
  totalIds: number;
  baseUrl: string;
  children?: ReactNode;
};

const SwitchIdButton = ({
  currentId,
  totalIds,
  setCurrentId,
  baseUrl,
  ids,
  children,
}: Props) => {
  const handleNext = () => {
    const nextId = (currentId + 1) % totalIds;
    setCurrentId(nextId);
  };

  const handlePrev = () => {
    const prevId = (currentId + totalIds - 1) % totalIds;
    setCurrentId(prevId);
  };

  const nextId = (currentId + 1) % totalIds;
  const prevId = (currentId + totalIds - 1) % totalIds;

  const asPrev = `${baseUrl}/${ids[prevId]}`;
  const asNext = `${baseUrl}/${ids[nextId]}`;

  return (
    <div className={styles["btn-wrapper"]}>
      <Link
        href={`${baseUrl}/[id]`}
        as={asPrev}
        onClick={handlePrev}
        className={
          currentId > 0
            ? styles["change-id-btn-left"]
            : styles["change-id-btn-left-hidden"]
        }
      >
        <FaChevronLeft className={styles["arrow-icon"]} size={15} />
        Previous
      </Link>
      <div className={styles.child}>{children}</div>
      <Link
        href={`${baseUrl}/[id]`}
        as={asNext}
        onClick={handleNext}
        className={
          currentId < ids.length - 1
            ? styles["change-id-btn-right"]
            : styles["change-id-btn-right-hidden"]
        }
      >
        Next
        <FaChevronRight className={styles["arrow-icon"]} size={15} />
      </Link>
    </div>
  );
};

export default SwitchIdButton;

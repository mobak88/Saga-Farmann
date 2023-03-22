import React, { forwardRef } from "react";
import ParagraphsSmallTruncated from "@/components/typography/paragraphs/ParagraphsSmallTruncated";
import Image from "next/image";
import styles from "./modal.module.css";
import { IoCloseSharp } from "react-icons/io5";
import ModalLinks from "./modalLinks/modalLinks";

interface ModalProps {
  onCloseClick: () => void;
  title: string | undefined;
  text: string | undefined;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ onCloseClick, title, text }, ref) => {
    return (
      <div className={styles.modal} key="modla-wrapper" ref={ref}>
        <div className={styles["text-container"]}>
          <div className={styles["close-btn-container"]} onClick={onCloseClick}>
            <IoCloseSharp size={40} className={styles["modal-close-icon"]} />
          </div>
          <h2 className={styles["modal-heading"]}>{title}</h2>
          <div className={styles["paragraph-container"]}>
            <ParagraphsSmallTruncated>{text}</ParagraphsSmallTruncated>
          </div>
          <ModalLinks />
        </div>
        <div className={styles["image-container"]}>
          <Image
            src="/assets/destination.jpg"
            alt="test"
            width={1000}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
    );
  }
);

export default Modal;

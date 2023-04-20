import React, { forwardRef } from "react";
import ParagraphsSmallTruncated from "@/components/typography/paragraphs/ParagraphsSmallTruncated";
import Image from "next/image";
import styles from "./Modal.module.css";
import { IoCloseSharp } from "react-icons/io5";
import ModalLinks from "./modalLinks/ModalLinks";

interface ModalProps {
  onCloseClick: () => void;
  title: string | undefined;
  text: string | undefined;
  image?: string | false;
  destinationId?: string | undefined;
  isDestination: boolean;
  crewId: string | undefined;
  blogId: string;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      onCloseClick,
      title,
      text,
      image,
      destinationId,
      isDestination,
      crewId,
      blogId,
    },
    ref
  ) => {
    return (
      <div className={styles.modal} key="modal-wrapper" ref={ref}>
        <div className={styles["text-container"]}>
          <div className={styles["close-btn-container"]} onClick={onCloseClick}>
            <IoCloseSharp size={40} className={styles["modal-close-icon"]} />
          </div>
          <h2 className={styles["modal-heading"]}>{title}</h2>
          <div className={styles["paragraph-container"]}>
            <ParagraphsSmallTruncated>{text}</ParagraphsSmallTruncated>
          </div>
          <ModalLinks
            isDestination={isDestination}
            destinationId={destinationId}
            crewId={crewId}
            blogId={blogId}
          />
        </div>
        <div className={styles["image-container"]}>
          <Image
            src={image ? image : "/assets/destination.jpg"}
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

Modal.displayName = "Modal";

export default Modal;

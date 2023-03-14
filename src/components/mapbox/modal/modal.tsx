import HeadingTwo from "@/components/typography/headings/headingTwo";
import ParagraphsSmall from "@/components/typography/paragraphs/paragraphsSmall";
import Image from "next/image";
import React from "react";
import styles from "./modal.module.css";
import { IoCloseSharp } from "react-icons/io5";

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles["text-container"]}>
        <div className={styles["close-btn-container"]}>
          <IoCloseSharp size={40} className={styles["modal-close-icon"]} />
        </div>
        <HeadingTwo>Modal</HeadingTwo>
        <ParagraphsSmall>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          doloremque aspernatur eveniet non nihil architecto assumenda officia
          commodi sit, sed consequuntur modi impedit nemo maiores repellendus
          optio, soluta quam. Magnam.
        </ParagraphsSmall>
      </div>
      <Image
        src="/assets/destination.jpg"
        alt="test"
        width={1000}
        height={300}
      />
    </div>
  );
};

export default Modal;

import React from "react";
import styles from "./imageModal.module.css";

interface ImageModalProps {
  imageUrl: string;
  alt: string;
  onClose: () => void;
}

const ImageModal = ({ imageUrl, alt, onClose }: ImageModalProps) => {
  return (
    <div className={styles["overlay"]} onClick={onClose}>
      <div className={styles["modal"]}>
        <img src={imageUrl} alt={alt} className={styles["image"]} />
      </div>
    </div>
  );
};

export default ImageModal;

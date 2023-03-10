import React from "react";
import styles from "./SliderCard.module.css";
import Image from "next/image";

export interface SliderCardProps {
  imageSrc: string;
  heading: string;
  text: string;
  alt: string;
}

const SliderCard = ({ imageSrc, heading, text, alt }: SliderCardProps) => {
  return (
    <div className={styles.card}>
      <div>
        <Image
          src={imageSrc}
          width={360}
          height={250}
          alt={alt}
          className={styles["card-image"]}
        />
      </div>
      <div className={styles["card-content-container"]}>
        <h2 className={styles["card-heading"]}>{heading}</h2>
        <p className={styles["card-paragraph"]}>{text}</p>
      </div>
    </div>
  );
};

export default SliderCard;

import React from "react";
import styles from "./SliderCard.module.css";
import Image from "next/image";
import HeadingThree from "@/components/typography/headings/HeadingThree";
import ParagraphsSmall from "@/components/typography/paragraphs/ParagraphsSmall";

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
        <HeadingThree>{heading}</HeadingThree>
        <ParagraphsSmall>{text}</ParagraphsSmall>
      </div>
    </div>
  );
};

export default SliderCard;

import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "./crew-card.module.css";
import Paragraphs from "@/components/typography/paragraphs/paragraphs";

interface CardProps {
  imageSrc: StaticImageData;
  name: string;
  role: string;
  about: string;
}

const CrewCard = ({ imageSrc, name, role, about }: CardProps) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles["image-wrapper"]}>
          <Image
            className={styles.image}
            src={imageSrc}
            alt="Crew member"
            width={0}
            height={0}
          />
        </div>
        <div className={styles["card-text-wrapper"]}>
          <h3 className={styles["crew-name"]}>{name}</h3>
          <p className={styles["crew-role"]}>{role}</p>
          <Paragraphs paragraphBig>{about}</Paragraphs>
        </div>
      </div>
    </>
  );
};

export default CrewCard;

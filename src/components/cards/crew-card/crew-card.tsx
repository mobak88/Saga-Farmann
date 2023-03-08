import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "./crew-card.module.css";

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
        <div className={styles["card-image"]}>
          <Image
            className={styles["card-image"]}
            src={imageSrc}
            alt="Crew member"
            width={0}
            height={0}
          />
        </div>
        <div>
          <h3>{name}</h3>
          <p>{role}</p>
          <p>{about}</p>
        </div>
      </div>
    </>
  );
};

export default CrewCard;

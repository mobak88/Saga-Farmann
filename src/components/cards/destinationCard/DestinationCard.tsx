import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./DestinationCard.module.css";

interface DestinationsInterface {
  image: StaticImageData;
  header: string;
  text: string;
  link: string;
}

const DestinationCard = ({
  image,
  header,
  text,
  link,
}: DestinationsInterface) => {
  return (
    <div className={styles.card}>
      <div className={styles["image-container"]}>
        <Image
          className={styles.image}
          src={image}
          alt="Destination"
          width={0}
          height={0}
        />
      </div>
      <div className={styles["text-container"]}>
        <h2>{header}</h2>
        <p>{text}</p>
        <a href="#">{link}</a>
      </div>
    </div>
  );
};

export default DestinationCard;

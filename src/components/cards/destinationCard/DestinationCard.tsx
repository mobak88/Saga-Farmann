import React from "react";
import Image from "next/image";
import styles from "./DestinationCard.module.css";
import image from "../../../../public/assets/destination.jpg";

const DestinationCard = () => {
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
        <h2>Destination</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga
        </p>
        <a href="#">Read more</a>
      </div>
    </div>
  );
};

export default DestinationCard;

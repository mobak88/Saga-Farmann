import React from "react";
import styles from "./slider-card.module.css";
import Image from "next/image";

import boatImg from "../../../../public/assets/news-image.jpg";

const SliderCard = () => {
  return (
    <div className={styles.card}>
      <div>
        <Image
          src={boatImg}
          width={360}
          height={250}
          alt="test"
          className={styles["card-image"]}
        />
      </div>
      <div className={styles["card-content-container"]}>
        <h2>Heading</h2>
      </div>
    </div>
  );
};

export default SliderCard;

import React from "react";
import styles from "./SliderCard.module.css";
import Image from "next/image";

// import boatImg from "../../../../public/assets/news-image.jpg";

const SliderCard = () => {
  return (
    <div className={styles.card}>
      <div>
        {/* <Image
          src={boatImg}
          width={360}
          height={250}
          alt="test"
          className={styles["card-image"]}
        /> */}
      </div>
      <div className={styles["card-content-container"]}>
        <h2 className={styles["card-heading"]}>Heading</h2>
        <p className={styles["card-role"]}>Role</p>
        <p className={styles["card-paragraph"]}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          natus fugit
        </p>
      </div>
    </div>
  );
};

export default SliderCard;

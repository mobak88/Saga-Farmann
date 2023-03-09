import React from "react";
import Image from "next/image";
import image from "../../../public/assets/videoImage.png";
import styles from "./HomeHeader.module.css";

const HomeHeader = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>
        Saga Asia
        <span> Follow the vikings 2023</span>
      </h1>
      <Image
        className={styles.video}
        src={image}
        alt="video of Saga Farmann ship"
        width={0}
        height={0}
      />
    </div>
  );
};

export default HomeHeader;

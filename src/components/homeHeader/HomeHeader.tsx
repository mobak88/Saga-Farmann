import React from "react";
import image from "../../../public/assets/videoImage.png";
import styles from "./HomeHeader.module.css";

const HomeHeader = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>
        Saga Asia
        <span> Follow the vikings 2023</span>
      </h1>
      <video className={styles.video} autoPlay loop>
        <source src={"/videos/my-video.mp4"} type="video/mp4" />
      </video>
    </div>
  );
};

export default HomeHeader;

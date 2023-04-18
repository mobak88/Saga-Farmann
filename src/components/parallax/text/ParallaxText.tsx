import React from "react";
import styles from "./ParallaxText.module.css";

const ParallaxText = () => {
  return (
    <div className={styles["parallax-text"]}>
      <div className={styles["parallax-text1"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        voluptatibus vitae, sapiente possimus soluta libero minus numquam
        dolorum laudantium sed ullam corrupti velit, ad, maxime laboriosam modi.
        Accusamus, nisi facere.
      </div>
      <div className={styles["parallax-text2"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        voluptatibus vitae, sapiente possimus soluta libero minus numquam
        dolorum laudantium sed ullam corrupti velit, ad, maxime laboriosam modi.
        Accusamus, nisi facere.
      </div>
      <div className={styles["parallax-text3"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        voluptatibus vitae, sapiente possimus soluta libero minus numquam
        dolorum laudantium sed ullam corrupti velit, ad, maxime laboriosam modi.
        Accusamus, nisi facere.
      </div>
    </div>
  );
};

export default ParallaxText;

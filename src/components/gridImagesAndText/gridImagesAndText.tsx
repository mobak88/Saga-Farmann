import React from "react";
import styles from "./gridImagesAndText.module.css";
import HeadingThree from "../typography/headings/headingThree";
import ParagraphsSmall from "../typography/paragraphs/paragraphsSmall";

const GridImagesAndText = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["textBox-follow-the-vikings"]}>
        <div className={styles.content}>
          <HeadingThree children={"Follow the vikings"} />
          <ParagraphsSmall
            children={
              "Lorem ipsums dolor sit amet consectetur adipiscing elit. Lorem opisums amet."
            }
          />
        </div>
      </div>
      <div className={styles["textBox-follow-the-vikings-two"]}>
        <div className={styles.content}>
          <HeadingThree children={"Follow the vikings"} />
          <ParagraphsSmall
            children={
              "Lorem ipsums dolor sit amet consectetur adipiscing elit. Lorem opisums amet. Maxime mollitia, molestiae quas vel sint commodi"
            }
          />
        </div>
        <div className={styles.pointer}></div>
      </div>
      <div className={styles["imageBox-one"]}></div>
      <div className={styles["imageBox-two"]}></div>
      <div className={styles["textBox-donations"]}>
        <div className={styles.content}>
          <HeadingThree dark children={"Donations"} />
          <ParagraphsSmall
            dark
            children={
              "Lorem ipsums dolor sit amet consectetur adipiscing elit. Lorem opisums amet."
            }
          />
        </div>
      </div>
      <div className={styles["textBox-follow-the-vikings-three"]}>
        <div className={styles.content}>
          <HeadingThree dark children={"Follow the vikings"} />
          <ParagraphsSmall
            dark
            children={
              "Lorem ipsums dolor sit amet consectetur adipiscing elit. Lorem opisums amet."
            }
          />
        </div>
      </div>
      <div className={styles["imageBox-three"]}></div>
      <div className={styles["textBox-text"]}>
        <div className={styles.content}>
          <HeadingThree children={"Follow the vikings"} />
          <ParagraphsSmall
            children={
              "Lorem ipsums dolor sit amet consectetur adipiscing elit. Lorem opisums amet."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default GridImagesAndText;

import React from "react";
import styles from "./gridImagesAndText.module.css";
import HeadingThree from "../typography/headings/headingThree";
import ParagraphsSmall from "../typography/paragraphs/paragraphsSmall";

interface GridImagesAndTextProps {
  header1: string;
  article1: string;
  header2: string;
  article2: string;
  header3: string;
  article3: string;
  header4: string;
  article4: string;
  // header5: string;
  article5: string;
  image1: string;
  image2: string;
  image3: string;
}

const GridImagesAndText = ({
  header1,
  article1,
  header2,
  article2,
  header3,
  article3,
  header4,
  article4,
  // header5,
  article5,
  image1,
  image2,
  image3,
}: GridImagesAndTextProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["textBox-follow-the-vikings"]}>
        <div className={styles.content}>
          <HeadingThree children={header1} />
          <ParagraphsSmall children={article1} />
        </div>
      </div>
      <div className={styles["textBox-follow-the-vikings-two"]}>
        <div className={styles.content}>
          <HeadingThree children={header2} />
          <ParagraphsSmall children={article2} />
        </div>
        <div className={styles.pointer}></div>
      </div>
      <div className={styles["imageBox-one"]}></div>
      <div className={styles["imageBox-two"]}></div>
      <div className={styles["textBox-donations"]}>
        <div className={styles.content}>
          <HeadingThree dark children={header3} />
          <ParagraphsSmall dark children={article3} />
        </div>
      </div>
      <div className={styles["textBox-follow-the-vikings-three"]}>
        <div className={styles.content}>
          <HeadingThree dark children={header4} />
          <ParagraphsSmall dark children={article4} />
        </div>
      </div>
      <div className={styles["imageBox-three"]}></div>
      <div className={styles["textBox-text"]}>
        <div className={styles.content}>
          {/* <HeadingThree children={"Follow the vikings"} /> */}
          <ParagraphsSmall children={article5} />
        </div>
      </div>
    </div>
  );
};

export default GridImagesAndText;

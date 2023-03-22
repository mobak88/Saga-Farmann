import React from "react";
import styles from "./gridImagesAndText.module.css";
import HeadingThree from "../typography/headings/headingThree";
import ParagraphsSmall from "../typography/paragraphs/paragraphsSmall";
import { GridSections } from "./interfaces";

interface Props {
  gridContent: GridSections;
}

const GridImagesAndText = ({ gridContent }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["textBox-follow-the-vikings"]}>
        <div className={styles.content}>
          <HeadingThree
            children={gridContent.first_block.first_block_heading}
          />
          <ParagraphsSmall
            children={gridContent.first_block.first_block_text}
          />
        </div>
      </div>
      <div className={styles["textBox-follow-the-vikings-two"]}>
        <div className={styles.content}>
          <HeadingThree
            children={gridContent.third_block.third_block_heading}
          />
          <ParagraphsSmall
            children={gridContent.third_block.third_block_text}
          />
        </div>
        <div className={styles.pointer}></div>
      </div>
      <div
        className={styles["imageBox-one"]}
        style={{
          backgroundImage: `url(${gridContent.second_block})`,
        }}
      ></div>
      <div
        className={styles["imageBox-two"]}
        style={{
          backgroundImage: `url(${gridContent.fifth_block})`,
        }}
      ></div>
      <div className={styles["textBox-donations"]}>
        <div className={styles.content}>
          <HeadingThree
            dark
            children={gridContent.fourth_block.fourth_block_heading}
          />
          <ParagraphsSmall
            dark
            children={gridContent.fourth_block.fourth_block_text}
          />
        </div>
      </div>
      <div className={styles["textBox-follow-the-vikings-three"]}>
        <div className={styles.content}>
          <HeadingThree
            dark
            children={gridContent.seventh_block.seventh_block_heading}
          />
          <ParagraphsSmall
            dark
            children={gridContent.seventh_block.seventh_block_text}
          />
        </div>
      </div>
      <div
        className={styles["imageBox-three"]}
        style={{
          backgroundImage: `url(${gridContent.sixth_block})`,
        }}
      ></div>
      <div className={styles["textBox-text"]}>
        <div className={styles.content}>
          <HeadingThree
            children={gridContent.eighth_block.eighth_block_heading}
          />
          <ParagraphsSmall
            children={gridContent.eighth_block.eighth_block_text}
          />
        </div>
      </div>
    </div>
  );
};

export default GridImagesAndText;

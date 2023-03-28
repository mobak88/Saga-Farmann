import React from "react";
import styles from "./gridImagesAndText.module.css";
import HeadingThree from "../typography/headings/HeadingThree";
import ParagraphsSmall from "../typography/paragraphs/ParagraphsSmall";
import { GridSections } from "./interfaces";

interface Props {
  gridContent: GridSections;
}

const GridImagesAndText = ({ gridContent }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["textBox-follow-the-vikings"]}>
        <div className={styles.content}>
          <HeadingThree>
            {gridContent.first_block.first_block_heading}
          </HeadingThree>

          <ParagraphsSmall>
            {gridContent.first_block.first_block_text}
          </ParagraphsSmall>
        </div>
      </div>
      <div className={styles["textBox-follow-the-vikings-two"]}>
        <div className={styles.content}>
          <HeadingThree>
            {gridContent.third_block.third_block_heading}
          </HeadingThree>
          <ParagraphsSmall>
            {gridContent.third_block.third_block_text}
          </ParagraphsSmall>
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
          <HeadingThree dark>
            {gridContent.fourth_block.fourth_block_heading}
          </HeadingThree>
          <ParagraphsSmall dark>
            {gridContent.fourth_block.fourth_block_text}
          </ParagraphsSmall>
        </div>
      </div>
      <div className={styles["textBox-follow-the-vikings-three"]}>
        <div className={styles.content}>
          <HeadingThree dark>
            {gridContent.seventh_block.seventh_block_heading}
          </HeadingThree>
          <ParagraphsSmall dark>
            {gridContent.seventh_block.seventh_block_text}
          </ParagraphsSmall>
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
          <HeadingThree>
            {gridContent.eighth_block.eighth_block_heading}
          </HeadingThree>
          <ParagraphsSmall>
            {gridContent.eighth_block.eighth_block_text}
          </ParagraphsSmall>
        </div>
      </div>
    </div>
  );
};

export default GridImagesAndText;

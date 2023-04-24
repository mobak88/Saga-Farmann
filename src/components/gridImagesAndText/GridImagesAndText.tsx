import React from "react";
import styles from "./GridImagesAndText.module.css";
import HeadingThree from "../typography/headings/HeadingThree";
import { GridSections } from "./interfaces";
import ParagraphsBig from "../typography/paragraphs/ParagraphsBig";

interface Props {
  gridContent: GridSections;
}

const GridImagesAndText = ({ gridContent }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["textBox-one"]}>
        <div className={styles.content}>
          {gridContent?.first_block?.first_block_heading && (
            <HeadingThree>
              {gridContent.first_block.first_block_heading}
            </HeadingThree>
          )}

          {gridContent?.first_block?.first_block_text && (
            <ParagraphsBig>
              {gridContent.first_block.first_block_text}
            </ParagraphsBig>
          )}
        </div>
      </div>
      <div className={styles["empty-box1"]}></div>
      <div className={styles["textBox-two"]}>
        <div className={styles.content}>
          {gridContent?.third_block?.third_block_heading && (
            <HeadingThree>
              {gridContent.third_block.third_block_heading}
            </HeadingThree>
          )}
          {gridContent?.third_block?.third_block_text && (
            <ParagraphsBig>
              {gridContent.third_block.third_block_text}
            </ParagraphsBig>
          )}
        </div>
        <div className={styles.pointer}></div>
      </div>
      <div className={styles["empty-box2"]}></div>
      {gridContent?.second_block && (
        <div
          className={styles["imageBox-one"]}
          style={{
            backgroundImage: `url(${gridContent.second_block})`,
          }}
        ></div>
      )}
      {gridContent?.fifth_block && (
        <div
          className={styles["imageBox-two"]}
          style={{
            backgroundImage: `url(${gridContent.fifth_block})`,
          }}
        ></div>
      )}
      <div className={styles["textBox-three"]}>
        <div className={styles.content}>
          {gridContent?.fourth_block?.fourth_block_heading && (
            <HeadingThree dark>
              {gridContent.fourth_block.fourth_block_heading}
            </HeadingThree>
          )}
          {gridContent?.fourth_block?.fourth_block_text && (
            <ParagraphsBig dark>
              {gridContent.fourth_block.fourth_block_text}
            </ParagraphsBig>
          )}
        </div>
      </div>
      <div className={styles["textBox-four"]}>
        <div className={styles.content}>
          {gridContent?.seventh_block?.seventh_block_heading && (
            <HeadingThree dark>
              {gridContent.seventh_block.seventh_block_heading}
            </HeadingThree>
          )}
          {gridContent?.seventh_block?.seventh_block_text && (
            <ParagraphsBig dark>
              {gridContent.seventh_block.seventh_block_text}
            </ParagraphsBig>
          )}
        </div>
      </div>
      <div
        className={styles["imageBox-three"]}
        style={{
          backgroundImage: `url(${gridContent.sixth_block})`,
        }}
      ></div>
      <div className={styles["textBox-five"]}>
        <div className={styles.content}>
          {gridContent?.eighth_block?.eighth_block_heading && (
            <HeadingThree>
              {gridContent.eighth_block.eighth_block_heading}
            </HeadingThree>
          )}
          {gridContent?.eighth_block?.eighth_block_text && (
            <ParagraphsBig>
              {gridContent.eighth_block.eighth_block_text}
            </ParagraphsBig>
          )}
        </div>
      </div>
      <div className={styles["emtpy-box4"]}></div>
    </div>
  );
};

export default GridImagesAndText;

import React from "react";
import styles from "./GridImagesAndText.module.css";
import HeadingThree from "../typography/headings/HeadingThree";
import { GridSections } from "./interfaces";
import ParagraphsBig from "../typography/paragraphs/ParagraphsBig";
import Image from "next/image";
import ParagraphsMedium from "../typography/paragraphs/ParagraphsMedium";

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
            <ParagraphsMedium>
              {gridContent.first_block.first_block_text}
            </ParagraphsMedium>
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
            <ParagraphsMedium>
              {gridContent.third_block.third_block_text}
            </ParagraphsMedium>
          )}
        </div>
        <div className={styles.pointer}></div>
      </div>
      <div className={styles["empty-box2"]}></div>
      {gridContent?.second_block && (
        <div className={styles["imageBox-one"]}>
          <Image
            className={styles["image-one"]}
            src={gridContent.second_block}
            alt=""
            width={500}
            height={300}
          />
        </div>
      )}
      {gridContent?.fifth_block && (
        <div className={styles["imageBox-two"]}>
          <Image
            className={styles["image-two"]}
            src={gridContent.fifth_block}
            alt=""
            width={500}
            height={300}
          />
        </div>
      )}
      <div className={styles["textBox-three"]}>
        <div className={styles.content}>
          {gridContent?.fourth_block?.fourth_block_heading && (
            <HeadingThree dark>
              {gridContent.fourth_block.fourth_block_heading}
            </HeadingThree>
          )}
          {gridContent?.fourth_block?.fourth_block_text && (
            <ParagraphsMedium dark>
              {gridContent.fourth_block.fourth_block_text}
            </ParagraphsMedium>
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
            <ParagraphsMedium dark>
              {gridContent.seventh_block.seventh_block_text}
            </ParagraphsMedium>
          )}
        </div>
      </div>
      <div className={styles["imageBox-three"]}>
        <Image
          className={styles["image-three"]}
          src={gridContent.sixth_block}
          alt=""
          width={500}
          height={300}
        />
      </div>
      <div className={styles["textBox-five"]}>
        <div className={styles.content}>
          {gridContent?.eighth_block?.eighth_block_heading && (
            <HeadingThree>
              {gridContent.eighth_block.eighth_block_heading}
            </HeadingThree>
          )}
          {gridContent?.eighth_block?.eighth_block_text && (
            <ParagraphsMedium>
              {gridContent.eighth_block.eighth_block_text}
            </ParagraphsMedium>
          )}
        </div>
      </div>
      <div className={styles["emtpy-box4"]}></div>
    </div>
  );
};

export default GridImagesAndText;

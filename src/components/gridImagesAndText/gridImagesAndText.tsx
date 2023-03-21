import React from "react";
import styles from "./gridImagesAndText.module.css";
import HeadingThree from "../typography/headings/headingThree";
import ParagraphsSmall from "../typography/paragraphs/paragraphsSmall";
import { GridSections } from "@/pages";

interface Props {
  gridContent: GridSections;
}

const GridImagesAndText = ({gridContent}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["textBox-follow-the-vikings"]}>
        <div className={styles.content}>
          <HeadingThree
            children={
              gridContent.acf.grid_section.first_block.first_block_heading
            }
          />
          <ParagraphsSmall
            children={gridContent.acf.grid_section.first_block.first_block_text}
          />
        </div>
      </div>
      <div className={styles["textBox-follow-the-vikings-two"]}>
        <div className={styles.content}>
          <HeadingThree
            children={
              gridContent.acf.grid_section.third_block.third_block_heading
            }
          />
          <ParagraphsSmall
            children={gridContent.acf.grid_section.third_block.third_block_text}
          />
        </div>
        <div className={styles.pointer}></div>
      </div>
      <div
        className={styles["imageBox-one"]}
        style={{
          backgroundImage: `url(${gridContent.acf.grid_section.second_block})`,
        }}
      ></div>
      <div
        className={styles["imageBox-two"]}
        style={{
          backgroundImage: `url(${gridContent.acf.grid_section.fifth_block})`,
        }}
      ></div>
      <div className={styles["textBox-donations"]}>
        <div className={styles.content}>
          <HeadingThree
            dark
            children={
              gridContent.acf.grid_section.fourth_block.fourth_block_heading
            }
          />
          <ParagraphsSmall
            dark
            children={
              gridContent.acf.grid_section.fourth_block.fourth_block_text
            }
          />
        </div>
      </div>
      <div className={styles["textBox-follow-the-vikings-three"]}>
        <div className={styles.content}>
          <HeadingThree
            dark
            children={
              gridContent.acf.grid_section.seventh_block.seventh_block_heading
            }
          />
          <ParagraphsSmall
            dark
            children={
              gridContent.acf.grid_section.seventh_block.seventh_block_text
            }
          />
        </div>
      </div>
      <div
        className={styles["imageBox-three"]}
        style={{
          backgroundImage: `url(${gridContent.acf.grid_section.sixth_block})`,
        }}
      ></div>
      <div className={styles["textBox-text"]}>
        <div className={styles.content}>
          <HeadingThree
            children={
              gridContent.acf.grid_section.eighth_block.eighth_block_heading
            }
          />
          <ParagraphsSmall
            children={
              gridContent.acf.grid_section.eighth_block.eighth_block_text
            }
          />
        </div>
      </div>
    </div>
  );
};

export default GridImagesAndText;

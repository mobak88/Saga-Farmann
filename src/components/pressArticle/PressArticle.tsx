import React from "react";
import styles from "./pressArticle.module.css";
import { PressArchive } from "./interfaces";
import ParagraphsBig from "../typography/paragraphs/ParagraphsBig";
import HeadingTwo from "../typography/headings/HeadingTwo";
import Image from "next/image";

interface Props {
  pressData: PressArchive;
}

const PressArticle = ({ pressData }: Props) => {
  return (
    <div className={styles.wrapper}>
      <HeadingTwo dark>{pressData.press_heading}</HeadingTwo>
      <ParagraphsBig dark>{pressData.press_text_fields}</ParagraphsBig>
      {pressData.press_images.map((image) => (
        <Image src={image.press_image} width={500} height={500} alt="" />
      ))}
    </div>
  );
};

export default PressArticle;

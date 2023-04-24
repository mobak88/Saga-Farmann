import React from "react";
import styles from "./pressArticle.module.css";
import { PressArchive } from "./interfaces";
import ParagraphsBig from "../typography/paragraphs/ParagraphsBig";
import HeadingTwo from "../typography/headings/HeadingTwo";
import Image from "next/image";
import Link from "next/link";
import { text } from "stream/consumers";

interface Props {
  pressData: PressArchive;
}

const PressArticle = ({ pressData }: Props) => {
  const articleText = [pressData.press_heading, pressData.press_text_fields];
  const file = new Blob([pressData.press_text_fields], { type: "text/plain" });

  return (
    <div className={styles.wrapper}>
      <div className={styles["header-container"]}>
        <HeadingTwo dark>{pressData.press_heading}</HeadingTwo>
      </div>
      <div className={styles["paragraph-container"]}>
        <ParagraphsBig dark>{pressData.press_text_fields}</ParagraphsBig>
        <button>
          <Link href={URL.createObjectURL(file)} download>
            Download
          </Link>
        </button>
      </div>
      {pressData.press_images.map((image) => (
        <div className={styles["image-container"]}>
          <Image
            className={styles.image}
            src={image.press_image.url}
            width={500}
            height={500}
            alt=""
          />
          <button>
            <Link href={image.press_image.url} download>
              Download
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default PressArticle;

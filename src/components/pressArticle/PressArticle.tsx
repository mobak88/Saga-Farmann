import React, { useEffect, useState } from "react";
import styles from "./pressArticle.module.css";
import { PressArchive } from "./interfaces";
import ParagraphsBig from "../typography/paragraphs/ParagraphsBig";
import HeadingTwo from "../typography/headings/HeadingTwo";
import Image from "next/image";
import Link from "next/link";

interface Props {
  pressData: PressArchive;
}

const PressArticle = ({ pressData }: Props) => {
  const [fileUrl, setFileUrl] = useState<string>("");

  useEffect(() => {
    const { press_heading, press_text_fields } = pressData;
    const fileText = `${press_heading}\n\n${press_text_fields}`;
    const file = new Blob([fileText], { type: "text/plain" });
    setFileUrl(URL.createObjectURL(file));
  }, [pressData]);

  return (
    <div className={styles.wrapper}>
      <div className={styles["header-container"]}>
        <HeadingTwo dark>{pressData.press_heading}</HeadingTwo>
      </div>
      <div className={styles["paragraph-container"]}>
        <ParagraphsBig dark>{pressData.press_text_fields}</ParagraphsBig>
        <a href={fileUrl} download>
          <button>Download Press Article</button>
        </a>
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

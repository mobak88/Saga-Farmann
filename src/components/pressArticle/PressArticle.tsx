import React, { useEffect, useState } from "react";
import styles from "./PressArticle.module.css";
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
    <div className={styles.card}>
      <div className={styles["header-container"]}>
        <HeadingTwo dark>{pressData.press_heading}</HeadingTwo>
      </div>
      <div className={styles["paragraph-container"]}>
        <ParagraphsBig dark>{pressData.press_text_fields}</ParagraphsBig>
        <a href={fileUrl} download>
          <button>Download</button>
        </a>
      </div>
      <div className={styles["image-container"]}>
        {pressData.press_images.map((image, index) => (
          <button>
            <a href={image.press_image.url} download>
              <Image
                key={index}
                className={styles.image}
                src={
                  "https://dev.sagafarmann.com/wp/wp-content/uploads/about-us/exp-2021-156-1.jpg"
                }
                width={200}
                height={200}
                alt=""
              />
              Download
            </a>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PressArticle;

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

function downloadImage(url: any) {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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
        <HeadingTwo>{pressData.press_heading}</HeadingTwo>
        <a href={fileUrl} download>
          <button>Download</button>
        </a>
      </div>
      <div className={styles["paragraph-container"]}>
        <ParagraphsBig>{pressData.press_text_fields}</ParagraphsBig>
      </div>
      <div className={styles["image-container"]}>
        {pressData.press_images.map((image, index) => (
          <Image
            key={index}
            className={styles.image}
            src={image.press_image.url}
            width={200}
            height={200}
            alt=""
            onClick={() => downloadImage(image.press_image.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default PressArticle;

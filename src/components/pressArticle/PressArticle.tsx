import React, { useEffect, useState } from "react";
import styles from "./PressArticle.module.css";
import { PressArchive, PressArchiveInterface } from "./interfaces";
import ParagraphsBig from "../typography/paragraphs/ParagraphsBig";
import HeadingTwo from "../typography/headings/HeadingTwo";
import Image from "next/image";
import { FaFileDownload } from "react-icons/fa";
import ParagraphsSmall from "../typography/paragraphs/ParagraphsSmall";

interface Props {
  date: PressArchiveInterface;
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

const PressArticle = ({ pressData, date }: Props) => {
  const [fileUrl, setFileUrl] = useState<string>("");

  useEffect(() => {
    const { press_heading, press_text_fields } = pressData;
    const fileText = `${press_heading}\n\n${press_text_fields.map(
      (text) => text.press_text_field
    )}`;
    const file = new Blob([fileText], { type: "text/plain" });
    setFileUrl(URL.createObjectURL(file));
  }, [pressData]);

  return (
    <div className={styles.card}>
      <div className={styles["date-container"]}>
        {date && <ParagraphsSmall>{date.date.split("T")[0]}</ParagraphsSmall>}
        {date && (
          <ParagraphsSmall>
            {date.date.split("T")[1].slice(0, -3)}
          </ParagraphsSmall>
        )}
      </div>
      <div className={styles["header-container"]}>
        <HeadingTwo>{pressData.press_heading}</HeadingTwo>
        <a href={fileUrl} download>
          <button className={styles.download}>
            <FaFileDownload color="white" size={20} />
          </button>
        </a>
      </div>
      {pressData?.press_text_fields?.map((text, index) => (
        <div key={index} className={styles["paragraph-container"]}>
          <ParagraphsBig>{text.press_text_field}</ParagraphsBig>
        </div>
      ))}

      <div className={styles["image-container"]}>
        {pressData.press_images.map((image, index) => (
          <div key={index} className={styles.images}>
            <Image
              className={styles.image}
              src={image.press_image.url}
              width={500}
              height={340}
              alt={image.press_image.alt}
              onClick={() => downloadImage(image.press_image.url)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PressArticle;

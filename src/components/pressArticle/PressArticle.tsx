import React, { useEffect, useState } from "react";
import styles from "./PressArticle.module.css";
import { PressArchive } from "./interfaces";
import ParagraphsBig from "../typography/paragraphs/ParagraphsBig";
import HeadingTwo from "../typography/headings/HeadingTwo";
import Image from "next/image";
import Link from "next/link";
import useDownloader from "react-use-downloader";

interface Props {
  pressData: PressArchive;
}

const PressArticle = ({ pressData }: Props) => {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const [fileUrl, setFileUrl] = useState<string>("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const { press_heading, press_text_fields } = pressData;
    const fileText = `${press_heading}\n\n${press_text_fields}`;
    const file = new Blob([fileText], { type: "text/plain" });
    setFileUrl(URL.createObjectURL(file));

    async function fetchData() {
      const response = await fetch(
        `/api/proxy?url=${encodeURIComponent(
          pressData.press_images[0].press_image.url
        )}`
      );
      const blob = await response.blob();
      setImageUrl(URL.createObjectURL(blob));
    }

    fetchData();
  }, [pressData, pressData.press_images]);

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
      {pressData.press_images.map((image, index) => (
        <div className={styles["image-container"]} key={index}>
          <button
            onClick={() =>
              download(image.press_image.url, image.press_image.url)
            }
          >
            Download
          </button>
          <Image
            className={styles.image}
            src={image.press_image.url}
            width={500}
            height={500}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default PressArticle;

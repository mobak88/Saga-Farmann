import React, { useState, useRef, useEffect } from "react";
import styles from "./VoyageAnimation.module.css";
import Image from "next/image";
import ParagraphsBig from "@/components/typography/paragraphs/ParagraphsBig";
import HeadingTwo from "@/components/typography/headings/HeadingTwo";
import { VoyageComponentProps } from "../interfaces/componentInterfaces";
import WaveRedBrownVoyage from "@/components/waves/wavesLargeScreen/WaveRedBrownVoyage";

const VoyageAnimation = ({ data, i, first }: VoyageComponentProps) => {
  const [imageIsVisible, setImageIsVisible] = useState<boolean>(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const imageAnimationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setImageIsVisible(entry.isIntersecting);
        if (entry.isIntersecting === true) {
          setAnimationTriggered(true);
        }
      },
      {
        threshold: 0.4,
      }
    );
    observer.observe(imageAnimationRef.current!);
  }, []);

  return (
    <div
      ref={imageAnimationRef}
      className={`${styles["voyage-slide-wrapper"]}`}
    >
      {!first && (
        <div className={styles["wave-top"]}>
          <WaveRedBrownVoyage />
        </div>
      )}
      <div
        className={`${styles["image-container"]}  ${
          imageIsVisible || animationTriggered ? styles["show"] : styles[""]
        }`}
      >
        <Image
          className={styles["image"]}
          width={
            data.acf.stage[0].stage_images[0].stage_image.sizes["large-width"]
          }
          height={
            data.acf.stage[0].stage_images[0].stage_image.sizes["large-height"]
          }
          src={data.acf.stage[0].stage_images[0].stage_image.sizes.large}
          alt={data.acf.stage[0].stage_images[0].stage_image.alt}
        ></Image>
      </div>
      {data.acf.stage.map((stage, index) => (
        <div
          key={`stage-${index}`}
          className={`${styles["voyage-text-container"]} ${
            data.acf.journey_text_side === "right"
              ? styles["voyage-text-right"]
              : styles["voyage-text-left"]
          } ${imageIsVisible || animationTriggered ? styles["show"] : ""}`}
        >
          <div
            key={`stage-heading-${index}`}
            className={`${styles["heading"]}  ${
              imageIsVisible || animationTriggered ? styles["show"] : styles[""]
            }`}
          >
            <HeadingTwo>{stage.stage_heading}</HeadingTwo>
          </div>

          {stage.stage_text_area.map((text, i) => (
            <div
              key={`stage-text-${index}-${i}`}
              className={`${styles["text"]}  ${
                imageIsVisible || animationTriggered
                  ? styles["show"]
                  : styles[""]
              }`}
            >
              <ParagraphsBig>{text.stage_text}</ParagraphsBig>
            </div>
          ))}
        </div>
      ))}
      <div className={styles["wave-bottom"]}>
        <WaveRedBrownVoyage />
      </div>
    </div>
  );
};

export default VoyageAnimation;

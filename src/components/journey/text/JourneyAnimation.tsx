import React, { useState, useRef, useEffect } from "react";
import styles from "./JourneyAnimation.module.css";
import Image from "next/image";
import ParagraphsBig from "@/components/typography/paragraphs/ParagraphsBig";
import HeadingTwo from "@/components/typography/headings/HeadingTwo";
import { JourneyComponentProps } from "../interfaces/componentInterfaces";

const JourneyAnimation = ({ data, i }: JourneyComponentProps) => {
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
      className={`${styles["journey-slide-wrapper"]}`}
    >
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
          alt="Journey image"
        ></Image>
      </div>
      {data.acf.stage.map((stage, index) => (
        <div
          key={`stage-${index}`}
          className={`${styles["journey-text-container"]} ${
            imageIsVisible || animationTriggered ? styles["show"] : styles[""]
          }`}
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
    </div>
  );
};

export default JourneyAnimation;

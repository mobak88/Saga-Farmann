import React, { useState, useRef, useEffect } from "react";
import styles from "./MapAnimation.module.css";
import Image from "next/image";
import HeadingTwo from "@/components/typography/headings/HeadingTwo";
import ParagraphsBig from "@/components/typography/paragraphs/ParagraphsBig";
import { JourneyComponentProps } from "../interfaces";

const MapAnimation = ({ data, i }: JourneyComponentProps) => {
  const [mapIsVisible, setMapIsVisible] = useState<boolean>(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const mapAnimationRef = useRef<HTMLDivElement>(null);

  console.log(mapIsVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setMapIsVisible(entry.isIntersecting);
        if (entry.isIntersecting === true) {
          setAnimationTriggered(true);
        }
      },
      {
        threshold: 0.4,
      }
    );
    observer.observe(mapAnimationRef.current!);
  }, []);
  /*data.acf.stage[0].stage_images[0].stage_image.sizes["large-width"] */
  return (
    <div ref={mapAnimationRef} className={`${styles["map-slide-wrapper"]}`}>
      <div
        className={`${styles["map-container"]}  ${
          mapIsVisible || animationTriggered ? styles["show"] : styles[""]
        }`}
      >
        <Image
          className={styles["map-image"]}
          width={960}
          height={640}
          src={
            "https://dev.sagafarmann.com/wp/wp-content/uploads/website-core-images/DJI_0858.jpg"
          }
          alt="Journey image"
        ></Image>
      </div>
      <div
        className={`${styles["map-text-container"]} ${
          mapIsVisible || animationTriggered ? styles["show"] : styles[""]
        }`}
      >
        {data.acf.stage.map((stage) => (
          <>
            <div
              className={`${styles["heading"]}  ${
                mapIsVisible || animationTriggered ? styles["show"] : styles[""]
              }`}
            >
              <HeadingTwo>{stage.stage_heading}</HeadingTwo>
            </div>
            {stage.stage_text_area.map((text) => (
              <div
                className={`${styles["text"]}  ${
                  mapIsVisible || animationTriggered
                    ? styles["show"]
                    : styles[""]
                }`}
              >
                <ParagraphsBig>{text.stage_text}</ParagraphsBig>
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default MapAnimation;

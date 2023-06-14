import React, { useState, useRef, useEffect } from "react";
import styles from "./MapAnimation.module.css";
import HeadingTwo from "@/components/typography/headings/HeadingTwo";
import ParagraphsBig from "@/components/typography/paragraphs/ParagraphsBig";
import { VoyageComponentProps } from "../interfaces/componentInterfaces";
import MapSvg from "./MapSvg";

const MapAnimation = ({ data, i }: VoyageComponentProps) => {
  const [mapIsVisible, setMapIsVisible] = useState<boolean>(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const mapAnimationRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={mapAnimationRef} className={`${styles["map-slide-wrapper"]}`}>
      <div
        className={`${styles["map-container"]}  ${
          mapIsVisible || animationTriggered ? styles["show"] : styles[""]
        }`}
      >
        <MapSvg mapIndex={i} />
      </div>
      <div
        className={`${styles["map-text-container"]} ${
          mapIsVisible || animationTriggered ? styles["show"] : styles[""]
        }`}
      >
        {data.acf.stage_journey_map.map((stage, index) => (
          <div key={`stage-${index}`}>
            <div
              className={`${styles["heading"]}  ${
                mapIsVisible || animationTriggered ? styles["show"] : styles[""]
              }`}
            >
              <HeadingTwo>{stage.stages_journey_map_heading}</HeadingTwo>
            </div>
            {stage.stages_journey_map_texts.map((text, i) => (
              <div
                key={`stage-text-${index}-${i}`}
                className={`${styles["text"]}  ${
                  mapIsVisible || animationTriggered
                    ? styles["show"]
                    : styles[""]
                }`}
              >
                <ParagraphsBig>{text.stages_journey_map_text}</ParagraphsBig>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapAnimation;

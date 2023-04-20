import React, { useState, useRef, useEffect } from "react";
import styles from "./MapAnimation.module.css";
import Image from "next/image";
import HeadingTwo from "@/components/typography/headings/HeadingTwo";
import ParagraphsBig from "@/components/typography/paragraphs/ParagraphsBig";

interface TextProps {
  mapHeading: string;
  mapText: { text: string }[];
  mapUrl: string;
  i: number;
}

const MapAnimation = ({ mapHeading, mapText, mapUrl, i }: TextProps) => {
  const [mapIsVisible, setMapIsVisible] = useState<boolean>(false);
  const mapAnimationRef = useRef<HTMLDivElement>(null);

  console.log(mapIsVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setMapIsVisible(entry.isIntersecting);
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
          mapIsVisible ? styles["show"] : styles[""]
        }`}
      >
        <Image width={1600} height={900} src={mapUrl} alt="Map image"></Image>
      </div>
      <div
        className={`${styles["map-text-container"]} ${
          mapIsVisible ? styles["show"] : styles[""]
        }`}
      >
        <div
          className={`${styles["heading"]}  ${
            mapIsVisible ? styles["show"] : styles[""]
          }`}
        >
          <HeadingTwo>{mapHeading}</HeadingTwo>
        </div>

        {mapText.map((text: { text: string }) => (
          <div
            className={`${styles["text"]}  ${
              mapIsVisible ? styles["show"] : styles[""]
            }`}
          >
            <ParagraphsBig>{text.text}</ParagraphsBig>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapAnimation;

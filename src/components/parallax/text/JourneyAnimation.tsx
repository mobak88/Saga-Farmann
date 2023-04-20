import React, { useState, useRef, useEffect } from "react";
import styles from "./JourneyAnimation.module.css";
import Image from "next/image";
import ParagraphsSmall from "@/components/typography/paragraphs/ParagraphsSmall";
import ParagraphsBig from "@/components/typography/paragraphs/ParagraphsBig";
import HeadingTwo from "@/components/typography/headings/HeadingTwo";

interface TextProps {
  imageHeading: string;
  imageText: { text: string }[];
  imageUrl: string;
  i: number;
}

const JourneyAnimation = ({
  imageHeading,
  imageText,
  imageUrl,
  i,
}: TextProps) => {
  const [imageIsVisible, setImageIsVisible] = useState<boolean>(false);
  const imageAnimationRef = useRef<HTMLDivElement>(null);

  console.log(imageIsVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setImageIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.6,
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
          imageIsVisible ? styles["show"] : styles[""]
        }`}
      >
        <Image
          width={3000}
          height={1200}
          src={imageUrl}
          alt="Journey image"
        ></Image>
      </div>
      <div
        className={`${styles["journey-text-container"]} ${
          imageIsVisible ? styles["show"] : styles[""]
        }`}
      >
        <div
          className={`${styles["heading"]}  ${
            imageIsVisible ? styles["show"] : styles[""]
          }`}
        >
          <HeadingTwo>{imageHeading}</HeadingTwo>
        </div>

        {imageText.map((text: { text: string }) => (
          <div
            className={`${styles["text"]}  ${
              imageIsVisible ? styles["show"] : styles[""]
            }`}
          >
            <ParagraphsBig>{text.text}</ParagraphsBig>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyAnimation;

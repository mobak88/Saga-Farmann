import React from "react";
import styles from "./SliderCard.module.css";
import Image from "next/image";
import HeadingThree from "@/components/typography/headings/HeadingThree";
import ParagraphsSmall from "@/components/typography/paragraphs/ParagraphsSmall";
import { LinkToSmall } from "@/components/links/LinkTo";

export interface SliderCardProps {
  imageSrc: string;
  heading: string;
  text: string;
  alt: string;
  blogId: string;
}

const SliderCard = ({
  imageSrc,
  heading,
  text,
  alt,
  blogId,
}: SliderCardProps) => {
  return (
    <div className={styles.card}>
      <div>
        {imageSrc && (
          <Image
            src={imageSrc}
            width={360}
            height={250}
            alt={alt}
            className={styles["card-image"]}
          />
        )}
      </div>
      <div className={styles["card-content-container"]}>
        {heading && <HeadingThree>{heading}</HeadingThree>}
        {text && <ParagraphsSmall>{text}</ParagraphsSmall>}
      </div>
      <div className={styles["link-container"]}>
        {blogId && <LinkToSmall url={`posts/${blogId}`}>Read more</LinkToSmall>}
      </div>
    </div>
  );
};

export default SliderCard;

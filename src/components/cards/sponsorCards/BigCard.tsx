import React from "react";
import styles from "./SponsorCards.module.css";
import Image from "next/image";
import ParagraphsBig from "@/components/typography/paragraphs/ParagraphsBig";
import ParagraphsSmall from "@/components/typography/paragraphs/ParagraphsSmall";
import { LinkToSmall } from "@/components/links/LinkTo";

interface SponsorProps {
  sponsor_image: string;
  sponsor_name: string;
  sponsor_description: string;
  sponsor_link: string;
}

const BigCard = ({
  sponsor_image,
  sponsor_name,
  sponsor_description,
  sponsor_link,
}: SponsorProps) => {
  return (
    <div className={styles["big-card-wrapper"]}>
      <div className={styles["image-wrapper"]}>
        <Image
          src={sponsor_image}
          alt={sponsor_name}
          className={styles.image}
          width={400}
          height={400}
          decoding="async"
          data-nimg="1"
          loading="lazy"
        />
      </div>
      <div className={styles["card-text-wrapper"]}>
        <ParagraphsBig>{sponsor_name}</ParagraphsBig>
        <ParagraphsSmall>{sponsor_description}</ParagraphsSmall>
        <LinkToSmall url={sponsor_link}>Read more</LinkToSmall>
      </div>
    </div>
  );
};

export default BigCard;

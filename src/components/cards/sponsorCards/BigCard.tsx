import React from "react";
import styles from "./SponsorCards.module.css";
import Image from "next/image";
import Link from "next/link";
import ParagraphsBig from "@/components/typography/paragraphs/ParagraphsBig";
import ParagraphsSmall from "@/components/typography/paragraphs/ParagraphsSmall";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

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
          src="/../public/assets/destination.jpg"
          alt="{sponsor_name}"
          className={styles.image}
          width={400}
          height={400}
        />
      </div>
      <div className={styles["card-text-wrapper"]}>
        <ParagraphsBig>{sponsor_name}</ParagraphsBig>
        <ParagraphsSmall>{sponsor_description}</ParagraphsSmall>
        <Link className={styles["sponsor-link"]} href="/">
          <>
            {"sponsor_link"}
            <BsFillArrowRightCircleFill
              className={styles["arrow-icon"]}
              size={30}
            />
          </>
        </Link>
      </div>
    </div>
  );
};

export default BigCard;

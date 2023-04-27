import React from "react";
import Image from "next/image";
import HeadingTwo from "../typography/headings/HeadingTwo";
import ParagraphsSmall from "../typography/paragraphs/ParagraphsSmall";
import styles from "./SponsorUsSection.module.css";
import { SponsorUsSectionInterface } from "./interfaces";
import HeadingThree from "../typography/headings/HeadingThree";
import ParagraphsBig from "../typography/paragraphs/ParagraphsBig";

interface Props {
  data: SponsorUsSectionInterface;
}

const SponsorUsSection = ({ data }: Props) => {
  console.log("data sponsor", data);
  return (
    <div className={styles.wrapper}>
      <div className={styles["header-wrapper"]}>
        {data?.sponsor_us_heading && (
          <HeadingTwo>{data.sponsor_us_heading}</HeadingTwo>
        )}
      </div>
      <div className={styles["images-and-card-wrapper"]}>
        {data?.sponsor_us_first_image && (
          <Image
            className={styles["image-one"]}
            src={data.sponsor_us_first_image}
            alt="image"
            width={500}
            height={500}
          />
        )}

        {data?.sponsor_us_second_image && (
          <Image
            className={styles["image-two"]}
            src={data.sponsor_us_second_image}
            alt="image"
            width={500}
            height={500}
          />
        )}
        <div className={styles["card"]}>
          <div className={styles["card-content-wrapper"]}>
            {data?.sponsor_us_card?.sponsor_us_card_heading && (
              <HeadingThree dark>
                {data.sponsor_us_card.sponsor_us_card_heading}
              </HeadingThree>
            )}
            {data?.sponsor_us_card?.sponsor_us_card_text && (
              <ParagraphsBig dark>
                {data.sponsor_us_card.sponsor_us_card_text}
              </ParagraphsBig>
            )}
            <button className={styles["sponsor-us-button"]}>Donate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorUsSection;

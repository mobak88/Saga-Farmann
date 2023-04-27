import React from "react";
import Image from "next/image";
import styles from "./DestinationCard.module.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Destinations } from "./interfaces";
import Link from "next/link";
import HeadingTwo from "@/components/typography/headings/HeadingTwo";
import ParagraphsSmall from "@/components/typography/paragraphs/ParagraphsSmall";

interface Props {
  destinations: Destinations;
}

const DestinationCard = ({ destinations }: Props) => {
  return (
    <>
      <Link
        href={`/destinations/${destinations.id}`}
        className={styles["read-more-link"]}
      >
        <div className={styles.card}>
          <div className={styles["image-container"]}>
            {destinations?.acf?.destination_images[0]?.destination_image
              ?.url && (
              <Image
                className={styles.image}
                src={
                  destinations.acf.destination_images[0].destination_image.url
                }
                alt={
                  destinations.acf.destination_images[0].destination_image.alt
                }
                width={640}
                height={290}
              />
            )}
          </div>
          <div className={styles["text-container"]}>
            {destinations?.title?.rendered && (
              <HeadingTwo>{destinations.title.rendered}</HeadingTwo>
            )}
            {destinations?.acf?.destination_description && (
              <ParagraphsSmall>
                {destinations.acf.destination_description}
              </ParagraphsSmall>
            )}
            <div className={styles["read-more-text"]}>
              {" "}
              Read more{" "}
              <BsFillArrowRightCircleFill
                className={styles["arrow-icon"]}
                size={25}
              />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default DestinationCard;

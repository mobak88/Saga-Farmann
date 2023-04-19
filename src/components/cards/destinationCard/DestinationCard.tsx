import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./DestinationCard.module.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Destinations } from "./interfaces";
import Link from "next/link";
import HeadingTwo from "@/components/typography/headings/HeadingTwo";
import ParagraphsSmall from "@/components/typography/paragraphs/ParagraphsSmall";
import ParagraphsBig from "@/components/typography/paragraphs/ParagraphsBig";

interface Props {
  destinations: Destinations;
}

const DestinationCard = ({ destinations }: Props) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles["image-container"]}>
          <Image
            className={styles.image}
            src={destinations.acf.destination_images[0].destination_image.url}
            alt={destinations.acf.destination_images[0].destination_image.alt}
            width={640}
            height={290}
          />
        </div>
        <div className={styles["text-container"]}>
          <HeadingTwo>{destinations.title.rendered}</HeadingTwo>
          <ParagraphsSmall>
            {destinations.acf.destination_description}
          </ParagraphsSmall>
          <Link
            href={`/destinations/${destinations.id}`}
            className={styles["read-more-link"]}
          >
            Read more
            <BsFillArrowRightCircleFill
              className={styles["arrow-icon"]}
              size={25}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default DestinationCard;

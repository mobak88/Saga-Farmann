import { Destinations } from "@/components/cards/destinationCard/interfaces";
import DarkContainer from "@/components/containers/darkContainer/DarkContainer";
import styles from "./destinations.module.css";
import API_ENDPOINTS from "@/endpoints/endpoints";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import Image from "next/image";
import HeadingTwo from "@/components/typography/headings/HeadingTwo";
import ParagraphsBig from "@/components/typography/paragraphs/ParagraphsBig";
import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import HeaderWithBtns from "@/components/headerWithBtns/HeaderWithBtns";
import ImageSlider from "@/components/thumbSlider/ThumbSlider";

interface Props {
  destination: Destinations;
  ids: number[];
}

interface Params extends ParsedUrlQuery {
  id: string;
}

const DestinationPage = ({ destination, ids }: Props) => {
  const [startIndex, setStartIndex] = useState<number>(0);

  const images = destination.acf.destination_images.filter((image) => {
    return image.destination_image.link;
  });

  console.log(images);

  const visibleImages = images.slice(startIndex, startIndex + 3);

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleNextClick = () => {
    setStartIndex((prevIndex) => prevIndex + 3);
  };

  const handlePrevClick = () => {
    setStartIndex((startIndex) => startIndex - 3);
  };

  return (
    <>
      <HeaderWithBtns header={destination.title.rendered} ids={ids} />
      <DarkContainer>
        <div className={styles["destination-container"]}>
          <div className={styles["image-grid-container"]}>
            <div className={styles.largeImage}>
              <Image
                priority
                src={visibleImages[0].destination_image.url}
                alt={visibleImages[0].destination_image.id.toString()}
                width={500}
                height={415}
              />
            </div>
            <div className={styles.smallImages}>
              {visibleImages.slice(1).map((image, index) => (
                <Image
                  priority
                  key={index}
                  src={image.destination_image.url}
                  alt="Small Image"
                  width={200}
                  height={200}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles["text-container"]}>
          <div className={styles["header-container"]}>
            <HeadingTwo>{destination.acf.destination_heading}</HeadingTwo>
          </div>
          <div className={styles["paragraph-container"]}>
            {destination.acf.destination_text_fields.map((text, index) => (
              <ParagraphsBig key={index}>{text.destination_text}</ParagraphsBig>
            ))}
          </div>
        </div>
      </DarkContainer>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(API_ENDPOINTS.destinations);

  const destinations: Destinations[] = await res.json();

  const paths = destinations.map((destination: Destinations) => ({
    params: { id: destination.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { id } = params ?? {};

  const destinationRes = await fetch(
    `https://dev.sagafarmann.com/wp/wp-json/wp/v2/destinations/${id}/?per_page=100&acf_format=standard`
  );

  const destinationsRes = await fetch(
    "https://dev.sagafarmann.com/wp/wp-json/wp/v2/destinations?per_page=100&acf_format=standard"
  );

  const destinations: Destinations[] = await destinationsRes.json();

  const ids = destinations.map((destination: Destinations) => {
    return destination.id;
  });

  const destination: Destinations = await destinationRes.json();

  return {
    props: {
      destination,
      ids,
    },
    revalidate: 1,
  };
};

export default DestinationPage;

/*{startIndex > 0 && (
    <BsFillArrowLeftCircleFill
      onClick={handlePrevClick}
      className={styles["arrow-icon"]}
      size={30}
    />
  )}   

      {images.length > 3 && startIndex + 3 < images.length && (
              <BsFillArrowRightCircleFill
                onClick={handleNextClick}
                className={styles["arrow-icon"]}
                size={30}
              />
            )}
  */

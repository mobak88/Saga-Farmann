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

  const images = destination.acf.destination_images.map((image) => {
    return { image: image.destination_image.url };
  });

  console.log(destination);

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
      <div className={styles.wrapper}>
        <div className={styles["imageSlider-wrapper"]}>
          <ImageSlider
            images={images}
            alt={"Blog Image"}
            id={destination.id + Math.random()}
          />
        </div>
        <div className={styles["text-container"]}>
          <HeadingTwo>{destination.acf.destination_heading}</HeadingTwo>
          <div className={styles.paragraphs}>
            {destination.acf.destination_text_fields.map((text, index) => (
              <ParagraphsBig key={index}>{text.destination_text}</ParagraphsBig>
            ))}
          </div>
        </div>
      </div>
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

  const filteredDestinations = destinations.filter(
    (destination: Destinations) =>
      destination.acf.next_year_destination === false
  );

  const ids = filteredDestinations.map((destination: Destinations) => {
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

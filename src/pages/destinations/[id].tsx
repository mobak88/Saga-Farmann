import { useState, useEffect } from "react";
import { Destinations } from "@/components/cards/destinationCard/interfaces";
import styles from "./destinations.module.css";
import API_ENDPOINTS from "@/endpoints/endpoints";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import HeadingTwo from "@/components/typography/headings/HeadingTwo";
import ParagraphsBig from "@/components/typography/paragraphs/ParagraphsBig";
import HeaderWithBtns from "@/components/headerWithBtns/HeaderWithBtns";
import ImageSlider from "@/components/thumbSlider/ThumbSlider";
import Head from "next/head";

interface Props {
  destination: Destinations;
  ids: number[];
}

interface Params extends ParsedUrlQuery {
  id: string;
}

const DestinationPage = ({ destination, ids }: Props) => {
  const [images, setImages] = useState<{ image: string }[] | []>([]);

  useEffect(() => {
    if (destination && destination.acf.destination_images) {
      setImages(
        destination?.acf?.destination_images.map((image) => {
          return { image: image.destination_image.url };
        })
      );
    }
  }, [destination]);

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const headText = `Saga Farmann destination ${destination.title.rendered}`;

  return (
    <>
      <Head>
        <title>{headText}</title>
        <meta
          name="description"
          content={`Saga Farmann destination ${destination.title.rendered}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderWithBtns header={destination.title.rendered} ids={ids} />
      <div className={styles.wrapper}>
        <div className={styles["imageSlider-wrapper"]}>
          {images && (
            <ImageSlider
              images={images}
              alt={"Blog Image"}
              id={destination.id + Math.random()}
            />
          )}
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
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  const res = await fetch(API_ENDPOINTS.destinations);

  const destinations: Destinations[] = await res.json();

  const filteredDestinations = destinations.filter(
    (destination: Destinations) =>
      destination.acf.next_year_destination === false
  );

  const paths = filteredDestinations.map((destination: Destinations) => ({
    params: { id: destination.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { id } = params ?? {};

  const destinationRes = await fetch(
    API_ENDPOINTS.singelDestination(id as string)
  );

  const destinationsRes = await fetch(API_ENDPOINTS.destinations);

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
  };
};

export default DestinationPage;

import Head from "next/head";
import LatestNews from "@/components/latestNews/latestNews";
import sliderData from "@/components/latestNews/latestNewsSlider/sliderData";
import HeadingOne from "@/components/typography/headings/headingOne";
import Navbar from "@/components/navigation/navbar/navbar";
import GridImagesAndText from "@/components/gridImagesAndText/gridImagesAndText";
import styles from "./home.module.css";
import StagesMap from "@/components/mapbox/stagesMap";
import { StagesProps } from "@/components/mapbox/stagesMap";

interface SingleStageApiProps {
  id: number;
  title: { rendered: string };
  acf: {
    coordinates: {
      long: string;
      lat: string;
    };
    stage_number: number;
    stage: [
      {
        stage_text_area: [{ stage_text: string }];
      }
    ];
    current_destination: boolean;
  };
}

export default function Home({ stages }: StagesProps) {
  return (
    <>
      <Head>
        <title>Saga Farmann home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <HeadingOne>Saga</HeadingOne>
        <div className={styles["grid-wrapper"]}>
          <GridImagesAndText />
        </div>
        <StagesMap stages={stages} />
        <LatestNews
          postHeading="Latest News and  posts"
          postText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
          posts={sliderData}
        />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://dev.sagafarmann.com/wp/wp-json/wp/v2/stages"
  );
  const stages = await res.json();

  const newStages = stages.map((stage: SingleStageApiProps) => {
    return {
      id: stage.id,
      title: stage.title.rendered,
      coordinates: {
        long: stage.acf.coordinates.long,
        lat: stage.acf.coordinates.lat,
      },
      stage_number: stage.acf.stage_number,
      stage_text_area: stage.acf.stage[0].stage_text_area,
      current_destination: stage.acf.current_destination,
    };
  });

  return {
    props: {
      stages: newStages,
    },
  };
}

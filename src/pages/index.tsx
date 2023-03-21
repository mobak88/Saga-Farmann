import type { ReactElement } from "react";
import Head from "next/head";
import LatestNews from "@/components/latestNews/latestNews";
import sliderData from "@/components/latestNews/latestNewsSlider/sliderData";
import Hero from "@/components/hero/Hero";
import GridImagesAndText from "@/components/gridImagesAndText/gridImagesAndText";
import styles from "./home.module.css";
import StagesMap from "@/components/mapbox/stagesMap";
import { SingleStageProps } from "@/components/mapbox/stagesMap";
import LightLayout from "@/components/layout/LightLayout";
import LivestreamVideo from "@/components/livestream/livestreamVideo";
import ParagraphsSmall from "@/components/typography/paragraphs/paragraphsSmall";
import API_ENDPOINTS from "@/endpoints/endpoints";
import { GetStaticProps } from "next";

interface GridSections {
  id: number;
  acf: {
    grid_section: {
      first_block: {
        first_block_heading: string;
        first_block_text: string;
      };
      second_block: string;
      third_block: {
        third_block_heading: string;
        third_block_text: string;
      };
      fourth_block: {
        fourth_block_heading: string;
        fourth_block_text: string;
      };
      fifth_block: string;
      sixth_block: string;
      seventh_block: {
        seventh_block_heading: string;
        seventh_block_text: string;
      };
      eighth_block: {
        eighth_block_heading: string;
        eighth_block_text: string;
      };
    };
  };
}

interface Props {
  gridSection: GridSections;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(
    "https://dev.sagafarmann.com/wp/wp-json/wp/v2/pages/128"
  );
  const gridSection: GridSections = await res.json();

  return {
    props: {
      gridSection: gridSection,
    },
  };
};

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

interface HomeProps {
  stages: SingleStageProps[];
  homeData: any;
}

const Home = ({ stages, homeData, gridSection }: HomeProps) => {
  console.log(homeData);

  return (
    <>
      <Head>
        <title>Saga Farmann home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className={styles["grid-wrapper"]}>
          <GridImagesAndText
            key={gridSection.id}
            header1={
              gridSection.acf.grid_section.first_block.first_block_heading
            }
            article1={gridSection.acf.grid_section.first_block.first_block_text}
            header2={
              gridSection.acf.grid_section.third_block.third_block_heading
            }
            article2={gridSection.acf.grid_section.third_block.third_block_text}
            header3={
              gridSection.acf.grid_section.fourth_block.fourth_block_heading
            }
            article3={
              gridSection.acf.grid_section.fourth_block.fourth_block_text
            }
            header4={
              gridSection.acf.grid_section.seventh_block.seventh_block_heading
            }
            article4={
              gridSection.acf.grid_section.seventh_block.seventh_block_text
            }
            header5={
              gridSection.acf.grid_section.eighth_block.eighth_block_heading
            }
            article5={
              gridSection.acf.grid_section.eighth_block.eighth_block_text
            }
            image1={gridSection.acf.grid_section.second_block}
            image2={gridSection.acf.grid_section.fifth_block}
            image3={gridSection.acf.grid_section.sixth_block}
          />
      </div>
      <StagesMap stages={stages} />
      <LivestreamVideo />
      <ParagraphsSmall dark={true}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        accusantium facilis excepturi debitis perferendis, dignissimos cumque
        atque amet illo nihil dolor ratione tempora minima sapiente quod.
        Perferendis tempora labore omnis.
      </ParagraphsSmall>
      <LatestNews
        postHeading="Latest News and  posts"
        postText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
        posts={sliderData}
      />
    </>
  );
};

export async function getStaticProps() {
  const [resStages, resHomeData] = await Promise.all([
    fetch(API_ENDPOINTS.stages),
    fetch(API_ENDPOINTS.page(128)),
  ]);

  const [stages, homeData] = await Promise.all([
    resStages.json(),
    resHomeData.json(),
  ]);

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
      homeData,
    },
  };
}

Home.getLayout = (page: ReactElement) => {
  return <LightLayout>{page}</LightLayout>;
};

export default Home;

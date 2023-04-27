import type { ReactElement } from "react";
import Head from "next/head";
import LatestNews from "@/components/latestNews/LatestNews";
import Hero from "@/components/hero/Hero";
import GridImagesAndText from "@/components/gridImagesAndText/GridImagesAndText";
import styles from "./home.module.css";
import StagesMap from "@/components/mapbox/StagesMap";
import LightLayout from "@/components/layout/LightLayout";
import LivestreamVideo from "@/components/livestream/LivestreamVideo";
import API_ENDPOINTS from "@/endpoints/endpoints";
import { GridSections } from "@/components/gridImagesAndText/interfaces";
import { MapProps } from "@/components/mapbox/interfaces";
import { HeroSection } from "@/components/hero/interfaces";
import SponsorUsSection from "@/components/sponsorUsSection/SponsorUsSection";
import { SponsorUsSectionInterface } from "@/components/sponsorUsSection/interfaces";
import { sponsorUsDataStructure } from "@/helpers/sponsorUsDataStructure";
import { LatestNewsHomeProps } from "@/components/latestNews/latestNewsInterfaces";
import { gridSectionDataStructure } from "@/helpers/gridSectionDataStructure";
import { destinationsDataStructure } from "@/helpers/destinationsDataStructure";
import { stagesDataStructure } from "@/helpers/stagesDataStructure";
import WaveRedBrown from "@/components/waves/wavesLargeScreen/WaveRedBrown";
import ParagraphsSmall from "@/components/typography/paragraphs/ParagraphsSmall";
import ParagraphsMedium from "@/components/typography/paragraphs/ParagraphsMedium";

export interface HomeProps {
  stagesMapProps: MapProps;
  gridSection: GridSections;
  heroSection: HeroSection;
  sponsorUsSection: SponsorUsSectionInterface;
  latestNews: LatestNewsHomeProps;
}

const Home = ({
  stagesMapProps,
  gridSection,
  sponsorUsSection,
  heroSection,
  latestNews,
}: HomeProps) => {
  return (
    <>
      <Head>
        <title>Saga Farmann home</title>
        <meta
          name="description"
          content="Saga Farman follow the vikings - home page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero data={heroSection} />
      <div className={styles["grid-wrapper"]}>
        <GridImagesAndText gridContent={gridSection} />
      </div>
      <div className={styles["map-container"]}>
        <div className={styles["map-wave-wrapper"]}>
          <WaveRedBrown />
        </div>
        <StagesMap
          destinations={stagesMapProps.destinations}
          stages={stagesMapProps.stages}
        />
      </div>
      <div className={styles["livestream-wrapper"]}>
        <LivestreamVideo />
      </div>
      <LatestNews
        postHeading={latestNews.latestNewsText.latest_news_heading}
        postText={latestNews.latestNewsText.latest_news_short_description}
        posts={latestNews.posts}
      />
      <SponsorUsSection data={sponsorUsSection} />
    </>
  );
};

export async function getStaticProps() {
  const [
    resStages,
    resHomeData,
    resDestinations,
    resSponsorUs,
    resBlogPosts,
    resCrews,
  ] = await Promise.all([
    fetch(API_ENDPOINTS.stages),
    fetch(API_ENDPOINTS.page(128)),
    fetch(API_ENDPOINTS.destinations),
    fetch(API_ENDPOINTS.page(222)),
    fetch(API_ENDPOINTS.blogPosts),
    fetch(API_ENDPOINTS.crewMembers),
  ]);

  const [stages, homeData, destinations, sponsorUs, blogPosts, crews] =
    await Promise.all([
      resStages.json(),
      resHomeData.json(),
      resDestinations.json(),
      resSponsorUs.json(),
      resBlogPosts.json(),
      resCrews.json(),
    ]);

  const newStages = stagesDataStructure(stages);

  const newDestinations = destinationsDataStructure(destinations);

  const { grid_section, hero_section, latest_news } = homeData.acf;

  const heroSection = {
    hero_background_image: hero_section.hero_background_image.url,
    hero_text: hero_section.hero_text,
  };

  const gridSection = gridSectionDataStructure(grid_section);

  const latestNews = {
    latestNewsText: latest_news,
    posts: blogPosts,
  };

  const sponsorUsSection = sponsorUsDataStructure(sponsorUs.acf);

  const stagesMapProps = {
    stages: newStages,
    destinations: newDestinations,
  };

  return {
    props: {
      stagesMapProps,
      heroSection,
      gridSection,
      destinations: newDestinations,
      sponsorUsSection,
      latestNews,
    },
  };
}

Home.getLayout = (page: ReactElement) => {
  return <LightLayout>{page}</LightLayout>;
};

export default Home;

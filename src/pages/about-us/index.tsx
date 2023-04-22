import DarkContainer from "@/components/containers/darkContainer/DarkContainer";
import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import Header from "@/components/header/Header";
import API_ENDPOINTS from "@/endpoints/endpoints";
import styles from "./About.module.css";
import Image from "next/image";
import HeadingTwo from "@/components/typography/headings/HeadingTwo";
import ParagraphsBig from "@/components/typography/paragraphs/ParagraphsBig";
import { sponsorUsDataStructure } from "@/helpers/sponsorUsDataStructure";
import SponsorUsSection from "@/components/sponsorUsSection/SponsorUsSection";
import { SponsorUsSectionInterface } from "@/components/sponsorUsSection/interfaces";
import { WaveDarkHomeBottomPink } from "@/components/waves/wavesLargeScreen/WaveDarkHome";
import { WaveDarkHomeSmallBottomPink } from "@/components/waves/wavesSmallScreen/WaveDarkHomeSmall";

interface AboutUsInterface {
  title: { rendered: string };
  acf: {
    about_section: [
      {
        about_heading: string;
        about_image: { url: string; alt: string };
        about_texts: [{ about_text: string }];
      }
    ];
    about_large_image: { url: string; alt: string };
    about_section_with_two_images: [
      {
        two_about_section_heading: string;
        two_about_section_first_image: { url: string; alt: string };
        two_about_section_second_image: { url: string; alt: string };
        two_about_section_texts: [{ two_about_section_text: string }];
      }
    ];
  };
}

interface Props {
  pageData: AboutUsInterface;
  sponsorUsSection: SponsorUsSectionInterface;
}

const About = ({ pageData, sponsorUsSection }: Props) => {
  return (
    <>
      <Head>
        <title>About us page</title>
        <meta name="description" content="Saga Farmann About us page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header={pageData.title.rendered} />
      <DarkContainer>
        <div className={styles["first-section-container"]}>
          {pageData.acf.about_section.map((about, i) => {
            return i % 2 === 0 ? (
              <div
                key={i + Math.random()}
                className={styles["section-container"]}
              >
                <div>
                  <HeadingTwo>{about.about_heading}</HeadingTwo>
                  <div className={styles["paragraph-container"]}>
                    {about.about_texts.map(
                      (text: { about_text: string }, i: number) => (
                        <ParagraphsBig key={i + Math.random()}>
                          {text.about_text}
                        </ParagraphsBig>
                      )
                    )}
                  </div>
                </div>
                <div className={styles["image-wrapper"]}>
                  <Image
                    className={styles.image}
                    src={about.about_image.url}
                    alt={about.about_image.alt}
                    height={600}
                    width={600}
                  />
                </div>
              </div>
            ) : (
              <div
                key={i + Math.random()}
                className={styles["section-container"]}
              >
                <div className={styles["image-wrapper"]}>
                  <Image
                    className={styles.image}
                    src={about.about_image.url}
                    alt={about.about_image.alt}
                    height={600}
                    width={600}
                  />
                </div>
                <div>
                  <HeadingTwo>{about.about_heading}</HeadingTwo>
                  <div className={styles["paragraph-container"]}>
                    {about.about_texts.map(
                      (text: { about_text: string }, i: number) => (
                        <ParagraphsBig key={i + Math.random()}>
                          {text.about_text}
                        </ParagraphsBig>
                      )
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          <Image
            className={styles["large-image"]}
            src={pageData.acf.about_large_image.url}
            alt={pageData.acf.about_large_image.alt}
            height={600}
            width={600}
          />

          {pageData.acf.about_section_with_two_images.map((section, i) => {
            return (
              <div
                className={styles["section-with-two-container"]}
                key={i + Math.random()}
              >
                <div>
                  <HeadingTwo>{section.two_about_section_heading}</HeadingTwo>
                  <div className={styles["paragraph-container"]}>
                    {section.two_about_section_texts.map((text, i) => {
                      return (
                        <ParagraphsBig key={i + Math.random()}>
                          {text.two_about_section_text}
                        </ParagraphsBig>
                      );
                    })}
                  </div>
                </div>
                <div className={styles["two-image-container"]}>
                  <Image
                    className={styles["two-image"]}
                    src={section.two_about_section_first_image.url}
                    alt={section.two_about_section_first_image.alt}
                    height={600}
                    width={600}
                  />
                  <Image
                    className={styles["two-image"]}
                    src={section.two_about_section_second_image.url}
                    alt={section.two_about_section_second_image.alt}
                    height={600}
                    width={600}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </DarkContainer>
      <WaveDarkHomeBottomPink />
      <WaveDarkHomeSmallBottomPink />
      <SponsorUsSection data={sponsorUsSection} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [resPageData, resSponsorUs] = await Promise.all([
    fetch(API_ENDPOINTS.page(175)),
    fetch(API_ENDPOINTS.page(222)),
  ]);

  const [pageData, sponsorUs] = await Promise.all([
    resPageData.json(),
    resSponsorUs.json(),
  ]);

  const sponsorUsSection = sponsorUsDataStructure(sponsorUs.acf);

  return {
    props: {
      pageData,
      sponsorUsSection,
    },
  };
};

export default About;

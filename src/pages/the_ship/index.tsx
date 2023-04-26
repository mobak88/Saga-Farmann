import React from "react";
import Head from "next/head";
import DarkContainer from "@/components/containers/darkContainer/DarkContainer";
import Header from "@/components/header/Header";
import HeadingTwo from "@/components/typography/headings/HeadingTwo";
import ParagraphsBig from "@/components/typography/paragraphs/ParagraphsBig";
import styles from "./Technical.module.css";
import Image from "next/image";
import { GetStaticProps } from "next";
import API_ENDPOINTS from "@/endpoints/endpoints";
import { WaveDarkHomeBottomPink } from "@/components/waves/wavesLargeScreen/WaveDarkHome";
import { WaveDarkHomeSmallBottomPink } from "@/components/waves/wavesSmallScreen/WaveDarkHomeSmall";

interface TechnicalInterface {
  title: { rendered: string };
  acf: {
    first_section_heading: string;
    first_section_texts: [{ first_section_text: string }];
    first_section_image: { url: string; alt: string };
    second_section_heading: string;
    second_section_texts: [{ second_section_text: string }];
    second_section_image_one: { url: string; alt: string };
    second_section_image_two: { url: string; alt: string };
    second_section_image_three: { url: string; alt: string };
    third_section_heading: string;
    third_section_texts: [{ third_section_text: string }];
    third_section_image_one: { url: string; alt: string };
    third_section_image_two: { url: string; alt: string };
    fourth_section_heading: string;
    fourth_section_texts: [{ fourth_section_text: string }];
    fourth_section_image: { url: string; alt: string };
  };
}

interface Props {
  pageData: TechnicalInterface;
}

const Technical = ({ pageData }: Props) => {
  return (
    <>
      <Head>
        <title>Technical page</title>
        <meta name="description" content="Saga Farmann Technical page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header={pageData.title.rendered} />
      <DarkContainer>
        <div className={styles["section-container"]}>
          <div className={styles["image-wrapper"]}>
            <Image
              className={styles.image}
              src={pageData.acf.first_section_image.url}
              alt={pageData.acf.first_section_image.alt}
              height={413.4}
              width={600}
            />
          </div>
          <div>
            <HeadingTwo>{pageData.acf.first_section_heading}</HeadingTwo>
            <div className={styles["paragraph-container"]}>
              {pageData.acf.first_section_texts.map(
                (text: { first_section_text: string }, i: number) => (
                  <ParagraphsBig key={i + Math.random()}>
                    {text.first_section_text}
                  </ParagraphsBig>
                )
              )}
            </div>
          </div>
        </div>
      </DarkContainer>
      <WaveDarkHomeBottomPink />
      <WaveDarkHomeSmallBottomPink />
      <div className={styles["second-section-wrapper"]}>
        <div
          className={`${styles["section-container"]} ${styles["second-section-container"]}`}
        >
          <div className={styles["second-section-left-container"]}>
            <HeadingTwo>{pageData.acf.second_section_heading}</HeadingTwo>
            <div className={styles["paragraph-container"]}>
              {pageData.acf.second_section_texts.map(
                (text: { second_section_text: string }, i: number) => {
                  return i % 2 === 0 ? (
                    <ParagraphsBig key={i + Math.random()}>
                      {text.second_section_text}
                    </ParagraphsBig>
                  ) : (
                    <div
                      className={styles["paragraph-with-img-container"]}
                      key={i + Math.random()}
                    >
                      <ParagraphsBig>{text.second_section_text}</ParagraphsBig>
                      <Image
                        src={pageData.acf.second_section_image_three.url}
                        alt={pageData.acf.second_section_image_three.alt}
                        height={250}
                        width={250}
                      />
                    </div>
                  );
                }
              )}
            </div>
            <Image
              className={styles["second-section-horizontal-image"]}
              src={pageData.acf.second_section_image_two.url}
              alt={pageData.acf.second_section_image_two.alt}
              height={300}
              width={800}
            />
            <Image
              className={styles["second-section-third-image"]}
              src={pageData.acf.second_section_image_one.url}
              alt={pageData.acf.second_section_image_one.alt}
              height={714}
              width={625}
            />
          </div>
        </div>
      </div>
      <div className={styles["wave-bottom-wrapper"]}>
        <WaveDarkHomeBottomPink />
        <WaveDarkHomeSmallBottomPink />
      </div>
      <DarkContainer>
        <div className={styles["multiple-sections-container"]}>
          <div className={styles["section-container"]}>
            <div>
              <HeadingTwo>{pageData.acf.third_section_heading}</HeadingTwo>
              <div className={styles["paragraph-container"]}>
                {pageData.acf.third_section_texts.map(
                  (text: { third_section_text: string }, i: number) => (
                    <ParagraphsBig key={i + Math.random()}>
                      {text.third_section_text}
                    </ParagraphsBig>
                  )
                )}
              </div>
            </div>
            <div
              className={`${styles["image-wrapper"]} ${styles["third-section-image-wrapper"]}`}
            >
              <Image
                className={styles["third-section-image-horizontal"]}
                src={pageData.acf.third_section_image_one.url}
                alt={pageData.acf.third_section_image_one.alt}
                height={600}
                width={600}
              />
              <Image
                className={styles["third-section-image-horizontal"]}
                src={pageData.acf.third_section_image_two.url}
                alt={pageData.acf.third_section_image_two.alt}
                height={600}
                width={600}
              />
            </div>
          </div>
          <div className={styles["section-container"]}>
            <div className={styles["image-wrapper"]}>
              <Image
                className={styles.image}
                src={pageData.acf.fourth_section_image.url}
                alt={pageData.acf.fourth_section_image.alt}
                height={766}
                width={890}
              />
            </div>
            <div>
              <HeadingTwo>{pageData.acf.fourth_section_heading}</HeadingTwo>
              <div className={styles["paragraph-container"]}>
                {pageData.acf.fourth_section_texts.map(
                  (text: { fourth_section_text: string }, i: number) => (
                    <ParagraphsBig key={i + Math.random()}>
                      {text.fourth_section_text}
                    </ParagraphsBig>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </DarkContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(API_ENDPOINTS.page(602));

  const pageData: TechnicalInterface = await res.json();

  return {
    props: {
      pageData,
    },
  };
};

export default Technical;

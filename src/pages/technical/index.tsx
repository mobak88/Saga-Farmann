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
import { TechnicalInterface } from "./interfaces";

interface PageData {
  pageData: TechnicalInterface;
}

const Technical = ({ pageData }: PageData) => {
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
              src={pageData.acf.first_section_image}
              alt="Technical image of Klastadskipet seilforslag"
              height={600}
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
                      <div
                        className={styles["second-section-motor-image-wrapper"]}
                      >
                        <Image
                          className={styles["second-section-motor-image"]}
                          src={pageData.acf.second_section_image_three}
                          alt={"Technical image of boat motor"}
                          height={900}
                          width={600}
                        />
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            <Image
              className={styles["second-section-horizontal-image"]}
              src={pageData.acf.second_section_image_one}
              alt={"Technical image of Klastad vre betelag"}
              height={900}
              width={600}
            />
            <Image
              className={styles["second-section-horizontal-image"]}
              src={pageData.acf.second_section_image_two}
              alt={"Technical image of Klastad nedre betelag"}
              height={300}
              width={800}
            />
          </div>
        </div>
      </div>
      <div className={styles["wave-bottom-wrapper"]}>
        <WaveDarkHomeBottomPink />
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
                src={pageData.acf.third_section_image_one}
                alt="Technical image of Klastadskipet seilforslag"
                height={600}
                width={600}
              />
              <Image
                className={styles["third-section-image-horizontal"]}
                src={pageData.acf.third_section_image_two}
                alt="Technical image of Klastadskipet seilforslag"
                height={600}
                width={600}
              />
            </div>
          </div>
          <div className={styles["section-container"]}>
            <div className={styles["image-wrapper"]}>
              <Image
                className={styles.image}
                src={pageData.acf.fourth_section_image}
                alt="Technical image of Klastadskipet seilforslag"
                height={600}
                width={600}
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

export const getStaticProps: GetStaticProps<PageData> = async () => {
  const res = await fetch(API_ENDPOINTS.page(602));

  const pageData: TechnicalInterface = await res.json();

  return {
    props: {
      pageData,
    },
  };
};

export default Technical;

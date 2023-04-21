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

const Technical = ({ pageData }: any) => {
  return (
    <>
      <Head>
        <title>Technical page</title>
        <meta name="description" content="Saga Farmann Technical page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header="Technical" />
      <DarkContainer>
        <div className={styles["section-container"]}>
          <div className={styles["image-wrapper"]}>
            <Image
              className={styles.image}
              src={pageData.acf.first_section_image}
              alt="Technical image of saga farmann"
              height={600}
              width={600}
            />
          </div>
          <div>
            <HeadingTwo>{pageData.acf.first_section_heading}</HeadingTwo>
            <div className={styles["paragraph-container"]}>
              {pageData.acf.first_section_texts.map((text: any, i: number) => (
                <ParagraphsBig key={i + Math.random()}>
                  {text.first_section_text}
                </ParagraphsBig>
              ))}
            </div>
          </div>
        </div>
      </DarkContainer>
      <div className={styles["second-section-wrapper"]}>
        <div
          className={`${styles["section-container"]} ${styles["second-section-container"]}`}
        >
          <div className={styles["second-section-left-container"]}>
            <HeadingTwo>{pageData.acf.second_section_heading}</HeadingTwo>
            <div className={styles["paragraph-container"]}>
              {pageData.acf.second_section_texts.map((text: any, i: number) => {
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
                        alt={"alt"}
                        height={900}
                        width={600}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <Image
              className={styles["second-section-horizontal-image"]}
              src={pageData.acf.second_section_image_one}
              alt={"alt"}
              height={900}
              width={600}
            />
            <Image
              className={styles["second-section-horizontal-image"]}
              src={pageData.acf.second_section_image_two}
              alt={"alt"}
              height={300}
              width={800}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<any> = async () => {
  const res = await fetch(API_ENDPOINTS.page(602));

  const pageData: any = await res.json();

  return {
    props: {
      pageData,
    },
  };
};

export default Technical;

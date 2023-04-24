import React from "react";
import Image from "next/image";
import styles from "./donate.module.css";
import Header from "@/components/header/Header";
import HeadingTwo from "@/components/typography/headings/HeadingTwo";
import ParagraphsBig from "@/components/typography/paragraphs/ParagraphsBig";
import ParagraphsSmall from "@/components/typography/paragraphs/ParagraphsSmall";
import API_ENDPOINTS from "@/endpoints/endpoints";
import { GetStaticProps } from "next";
import DarkContainer from "@/components/containers/darkContainer/DarkContainer";
import Head from "next/head";

interface DonateData {
  title: { rendered: string };
  acf: {
    donate_card: {
      donate_heading: string;
      donate_subheading: string;
      donate_text: string;
    };
    donate_image: string;
  };
}

interface Props {
  donateData: DonateData;
}

const DonationPage = ({ donateData }: Props) => {
  return (
    <>
      <Head>
        <title>Saga Farmann donate</title>
        <meta name="description" content="Saga Farman donate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header={donateData.title.rendered} />
      <DarkContainer>
        <div className={styles.wrapper}>
          <div className={styles["text-box"]}>
            <div className={styles["text-box-content"]}>
              <div className={styles["text-box-heading"]}>
                <HeadingTwo>
                  {donateData.acf.donate_card.donate_heading}
                </HeadingTwo>
                <ParagraphsBig>
                  {donateData.acf.donate_card.donate_subheading}
                </ParagraphsBig>
              </div>
              <div>
                <button className={styles["donate-button"]}>Donate</button>
              </div>
              <ParagraphsSmall>
                {donateData.acf.donate_card.donate_text}
              </ParagraphsSmall>
            </div>
          </div>

          <div className={styles["image-box"]}>
            <Image
              src={donateData.acf.donate_image}
              alt={`Image of vikings drinking beer`}
              className={styles.image}
              width={400}
              height={300}
            />
          </div>
        </div>
      </DarkContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(API_ENDPOINTS.page(237));
  const donateData = await res.json();

  return {
    props: {
      donateData,
    },
  };
};

export default DonationPage;

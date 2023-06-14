import Head from "next/head";
import React from "react";
import styles from "./press.module.css";
import { GetStaticProps } from "next";
import API_ENDPOINTS from "@/endpoints/endpoints";
import { PressArchiveInterface } from "@/components/pressArticle/interfaces";

import PressArticle from "@/components/pressArticle/PressArticle";
import Header from "@/components/header/Header";

interface Props {
  pressArchive: PressArchiveInterface[];
}

const PressArchivePage = ({ pressArchive }: Props) => {
  return (
    <>
      <Head>
        <title>{"Press page"}</title>
        <meta name="description" content={`Saga Farmann destination `} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header={"Press archive"} />
      <div className={styles.wrapper}>
        {pressArchive.map((article: PressArchiveInterface, index: number) => (
          <PressArticle
            key={index}
            pressData={article.acf.press_archive}
            date={article}
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const resPressArchive = await fetch(API_ENDPOINTS.pressArchive);

  const pressArchive: PressArchiveInterface[] = await resPressArchive.json();

  return {
    props: {
      pressArchive,
    },
  };
};

export default PressArchivePage;

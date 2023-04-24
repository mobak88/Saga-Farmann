import Head from "next/head";
import React, { useEffect, useState } from "react";
import ImageSlider from "@/components/thumbSlider/ThumbSlider";
import styles from "./press.module.css";
import { GetStaticProps } from "next";
import API_ENDPOINTS from "@/endpoints/endpoints";
import PressArticle from "@/components/pressArticle/PressArticle";
import {
  PressArchive,
  PressArchiveInterface,
} from "@/components/pressArticle/interfaces";
import DarkContainer from "@/components/containers/darkContainer/DarkContainer";

interface Props {
  pressArchive: PressArchive[];
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

      <DarkContainer>
        {pressArchive.map((data: PressArchive, index: number) => (
          <PressArticle pressData={data} key={index} />
        ))}
      </DarkContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const resPressArchive = await fetch(API_ENDPOINTS.pressArchive);

  const pressArchiveData: PressArchiveInterface = await resPressArchive.json();
  console.log(pressArchiveData);

  const pressArticle = pressArchiveData.acf.press_archive;

  return {
    props: {
      pressArchive: pressArticle,
    },
    revalidate: 1,
  };
};

export default PressArchivePage;

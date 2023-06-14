import React from "react";
import DarkContainer from "@/components/containers/darkContainer/DarkContainer";
import Header from "@/components/header/Header";
import LivestreamVideo from "@/components/livestream/LivestreamVideo";
import Head from "next/head";
import YoutubeLink from "@/components/livestream/youtubeLink/YoutubeLink";
import styles from "./livestream.module.css";

const Livestream = () => {
  return (
    <>
      <Head>
        <title>Saga Farmann livestream</title>
        <meta name="description" content="Saga Farman livestream" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header={"Livestream"} />

      <DarkContainer>
        <LivestreamVideo />
        <div className={styles["youtubelink-wrapper"]}>
          <YoutubeLink dark={false} />
        </div>
      </DarkContainer>
    </>
  );
};

export default Livestream;

import Header from "@/components/header/header";
import LivestreamVideo from "@/components/livestream/livestreamVideo";
import HeadingTwo from "@/components/typography/headings/headingTwo";
import React, { useState, useEffect } from "react";
import styles from "./livestream.module.css";

const Livestream = () => {
  return (
    <>
      <Header header={"Livestream"} />
      <div className={styles["page-container"]}>
        <LivestreamVideo />
      </div>
    </>
  );
};

export default Livestream;

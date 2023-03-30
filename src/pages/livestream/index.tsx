import Header from "@/components/header/Header";
import LivestreamVideo from "@/components/livestream/LivestreamVideo";
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

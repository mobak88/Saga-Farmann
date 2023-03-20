import LivestreamVideo from "@/components/livestream/livestreamVideo";
import Navbar from "@/components/navigation/navbar/navbar";
import React, { useState, useEffect } from "react";
import styles from "./livestream.module.css";

const Livestream = () => {
  return (
    <div>
      <Navbar />
      <div className={styles["page-container"]}>
        <LivestreamVideo />
      </div>
    </div>
  );
};

export default Livestream;

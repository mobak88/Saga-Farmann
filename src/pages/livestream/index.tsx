import LivestreamVideo from "@/components/livestream/livestreamVideo";
import React, { useState, useEffect } from "react";
import styles from "./livestream.module.css";

const Livestream = () => {
  return (
    <div className={styles["page-container"]}>
      <LivestreamVideo />
    </div>
  );
};

export default Livestream;

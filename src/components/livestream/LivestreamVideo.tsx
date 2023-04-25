import React, { useState, useEffect } from "react";
import HeadingTwo from "../typography/headings/HeadingTwo";
import styles from "./LivestreamVideo.module.css";

const LivestreamVideo = () => {
  const [isOnline, setIsOnline] = useState<Boolean>(false);

  useEffect(() => {
    fetch("/api/livestream/livestreamChecker")
      .then((res) => res.json())
      .then((data) => {
        setIsOnline(data.isOnline);
      });
  }, []);

  return (
    <>
      <iframe
        width={"560px"}
        height={"315px"}
        className={styles["youtube-player"]}
        src={`https://www.youtube.com/embed/live_stream?channel=UC2rhxUIAPHCu5L5m83T_0xQ&autoplay=1&mute=1`}
      ></iframe>
      <div className={styles["content-container"]}>
        <div className={styles["youtube-holder"]}>
          {isOnline ? (
            <iframe
              width={"560px"}
              height={"315px"}
              className={styles["youtube-player"]}
              src={`https://www.youtube.com/embed/live_stream?channel=UC2rhxUIAPHCu5L5m83T_0xQ&autoplay=1&mute=1`}
            ></iframe>
          ) : (
            <div className={styles["offline-text-container"]}>
              <HeadingTwo>We are currently offline</HeadingTwo>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LivestreamVideo;

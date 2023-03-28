import React, { useState, useEffect } from "react";
import HeadingTwo from "../typography/headings/headingTwo";
import styles from "./livestreamVideo.module.css";

const LivestreamVideo = () => {
  const [isOnline, setIsOnline] = useState<Boolean>(false);

  const offlineDisplay: string =
    "https://media.discordapp.net/attachments/1084295088739471451/1086015257715167362/Hernok_Vikings_on_a_voyage_through_europe_sleeping_on_the_ship._861ec5d8-5b26-4882-9b93-0b164f9dd4ca.png?width=1576&height=909";

  useEffect(() => {
    getStatus();
  }, []);

  async function getStatus() {
    var resp = await fetch("/api/livestream/livestreamChecker");
    const data = await resp.json();
    setIsOnline(data.isOnline);
  }

  return (
    <>
      <div className={styles["content-container"]}>
        <div className={styles["youtube-holder"]}>
          {isOnline ? (
            <iframe
              width={"560px"}
              height={"315px"}
              className={styles["youtube-player"]}
              src={`https://www.youtube.com/embed/live_stream?channel=${process.env.NEXT_PUBLIC_CHANNEL_ID}&autoplay=1&mute=1`}
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

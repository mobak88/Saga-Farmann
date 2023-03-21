import React, { useState, useEffect } from "react";
import HeadingTwo from "../typography/headings/headingTwo";
import ParagraphsSmall from "../typography/paragraphs/paragraphsSmall";
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
      {isOnline ? (
        <>
          <div className={styles["heading-wrapper"]}>
            <HeadingTwo>Title</HeadingTwo>
          </div>
          <div className={styles["content-container"]}>
            <div className={styles["youtube-holder"]}>
              <iframe
                width={"560px"}
                height={"315px"}
                className={styles["youtube-player"]}
                src={`https://www.youtube.com/embed/live_stream?channel=${process.env.NEXT_PUBLIC_CHANNEL_ID}&autoplay=1&mute=1`}
              ></iframe>
            </div>
          </div>
          <div className={styles["description-wrapper"]}>
            <ParagraphsSmall>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
              hic sed rem excepturi expedita quidem, fugiat cum sequi, libero
              impedit fugit eos consectetur provident quos inventore dignissimos
              tenetur, maxime temporibus!
            </ParagraphsSmall>
          </div>
        </>
      ) : (
        <div className={styles["offline"]}>
          <div className={styles["offline-wrapper"]}>
            <h2 className={styles["offline-text"]}>We are currently offline</h2>
          </div>
        </div>
      )}
    </>
  );
};
export default LivestreamVideo;

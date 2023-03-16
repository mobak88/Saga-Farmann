import React, { useState } from "react";
import styles from "./livestreamVideo.module.css";
import YouTube, { YouTubeProps } from "react-youtube";
import LivestreamStatus from "@/pages/api/livestreamChecker";
import { NextApiRequest } from "next";

//https:www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC2rhxUIAPHCu5L5m83T_0xQ&type=video&eventType=live&key=AIzaSyAWHOtuJTr_da9Rh2QFpoNqBnoXmFNUIAY
const LivestreamVideo = ({ data }: any) => {
  const CHANNEL_ID = "UCrOw0E3-URvN_y54hX9Jg6Q";
  let offlineDisplay: String = "Currently offline";

  return (
    <div className={styles["youtube-container"]}>
      <div className={styles["youtube-wrapper"]}>
        <iframe
          className={styles["youtube-player"]}
          src={`https://www.youtube.com/embed/live_stream?channel=${CHANNEL_ID}&autoplay=1&mute=1`}
        ></iframe>
      </div>
    </div>
  );
};
export default LivestreamVideo;
{
  /*  {videoId ? (<YouTube
            className={styles["youtube-player"]}
            videoId={`${videoId}`}
            opts={opts}
            onReady={onPlayerReady}
          />  ) : (
          <h1>{offlineDisplay}</h1>
        )}
		{isOnline ? (
		   ) : (
          <h1>{offlineDisplay}</h1>
        )}
		*/
}

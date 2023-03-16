import LivestreamVideo from "@/components/livestream/livestreamVideo";
import React from "react";
import styles from "./livestream.module.css";

// const YOUTUBE_LIVESTREAM_API: String =
//   "https:www.googleapis.com/youtube/v3/search";

// const CHANNEL_ID: String = "UC2rhxUIAPHCu5L5m83T_0xQ";

// export async function getServerSideProps() {
//   const res = await fetch(
//     `${YOUTUBE_LIVESTREAM_API}?part=snippet&channelId=${CHANNEL_ID}&type=video&eventType=live&key=${process.env.YOUTUBE_API_KEY}`
//   );

//   const data = await res.json();
//   console.log(process.env.YOUTUBE_API_KEY);
//   console.log("data", data);

//   return {
//     props: {
//       data,
//     },
//   };
// }
// export async function getServerSideProps() {
//   const res = await fetch(
//     `https://www.youtube.com/embed/live_stream?channel=UCXBE_QQSZueB8082ml5fslg&autoplay=1&mute=1`
//   );
//   const data = await res.json();
//   console.log("data", data);

//   return {
//     props: {
//       data,
//     },
//   };
// }

const Livestream = ({ data }: any) => {
  return (
    <div className={styles["page-container"]}>
      <LivestreamVideo data={data} />
    </div>
  );
};

export default Livestream;

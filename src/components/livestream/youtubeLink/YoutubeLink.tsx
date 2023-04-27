import ParagraphsMedium from "@/components/typography/paragraphs/ParagraphsMedium";
import Link from "next/link";
import React from "react";
import styles from "../LivestreamVideo.module.css";

interface Props {
  dark?: boolean;
}

const YoutubeLink = ({ dark = false }: Props) => {
  return (
    <ParagraphsMedium dark={dark}>
      Please subscribe to our{" "}
      <Link
        className={`${styles["youtube-link"]}  ${
          dark ? styles["dark"] : styles["light"]
        }`}
        href="https://www.youtube.com/channel/UCaPUAvRBw0i5ET79TMh2_MQ"
      >
        YouTube channel
      </Link>{" "}
      to get notified when we are live from the ship
    </ParagraphsMedium>
  );
};

export default YoutubeLink;

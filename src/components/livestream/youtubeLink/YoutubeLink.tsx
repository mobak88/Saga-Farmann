import ParagraphsMedium from "@/components/typography/paragraphs/ParagraphsMedium";
import Link from "next/link";
import React from "react";

const YoutubeLink = () => {
  return (
    <ParagraphsMedium>
      Please subscribe to our{" "}
      <Link href="https://www.youtube.com/channel/UCaPUAvRBw0i5ET79TMh2_MQ">
        YouTube channel
      </Link>{" "}
      to get notified when we are live from the ship
    </ParagraphsMedium>
  );
};

export default YoutubeLink;

import React from "react";
import HeadingTwo from "../typography/headings/HeadingTwo";
import ParagraphsSmall from "../typography/paragraphs/ParagraphsSmall";
import WaveDarkHome from "../waves/wavesLargeScreen/WaveDarkHome";
import WaveDarkHomeSmall from "../waves/wavesSmallScreen/WaveDarkHomeSmall";
import styles from "./LatestNews.module.css";
import LatestNewsSlider from "./latestNewsSlider/LatestNewsSlider";
import { LatestNewsProps } from "./latestNewsInterfaces";

const LatestNews = ({ posts, postHeading, postText }: LatestNewsProps) => {
  return (
    <>
      <WaveDarkHomeSmall />
      <WaveDarkHome />
      <div className={styles["section-wrapper"]}>
        <div className={styles["section-container"]}>
          <div className={styles["text-container"]}>
            {postHeading && <HeadingTwo>{postHeading}</HeadingTwo>}
            <div className={styles["paragraph-container"]}>
              {postText && <ParagraphsSmall>{postText}</ParagraphsSmall>}
            </div>
          </div>
          <LatestNewsSlider posts={posts} />
        </div>
      </div>
    </>
  );
};

export default LatestNews;

import React from "react";
import { SliderCardProps } from "../cards/sliderCard/sliderCard";
import HeadingTwo from "../typography/headings/headingTwo";
import ParagraphsSmall from "../typography/paragraphs/paragraphsSmall";
import WaveDarkHome from "../waves/wavesLargeScreen/WaveDarkHome";
import WaveDarkHomeSmall from "../waves/wavesSmallScreen/WaveDarkHomeSmall";
import styles from "./latestNews.module.css";
import LatestNewsSlider from "./latestNewsSlider/latestNewsSlider";

interface SinglePostProps extends SliderCardProps {
  id: number;
}

export interface PostsProps {
  posts: SinglePostProps[];
}

interface LatestNewsProps extends PostsProps {
  postHeading: string;
  postText: string;
}

const LatestNews = ({ posts, postHeading, postText }: LatestNewsProps) => {
  return (
    <>
      <WaveDarkHomeSmall />
      <WaveDarkHome />
      <div className={styles["section-wrapper"]}>
        <div className={styles["section-container"]}>
          <div className={styles["text-container"]}>
            <HeadingTwo>{postHeading}</HeadingTwo>
            <div className={styles["paragraph-container"]}>
              <ParagraphsSmall>{postText}</ParagraphsSmall>
            </div>
          </div>
          <LatestNewsSlider posts={posts} />
        </div>
      </div>
      <WaveDarkHome bottom={true} />
      <WaveDarkHomeSmall bottom={true} />
    </>
  );
};

export default LatestNews;

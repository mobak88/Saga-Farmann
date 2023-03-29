import React from "react";
import { SliderCardProps } from "../cards/sliderCard/SliderCard";
import HeadingTwo from "../typography/headings/HeadingTwo";
import ParagraphsSmall from "../typography/paragraphs/ParagraphsSmall";
import WaveDarkHome, {
  WaveDarkHomeBottomPink,
} from "../waves/wavesLargeScreen/WaveDarkHome";
import WaveDarkHomeSmall, {
  WaveDarkHomeSmallBottomPink,
} from "../waves/wavesSmallScreen/WaveDarkHomeSmall";
import styles from "./latestNews.module.css";
import LatestNewsSlider from "./latestNewsSlider/LatestNewsSlider";

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
      <WaveDarkHomeBottomPink />
      <WaveDarkHomeSmallBottomPink />
    </>
  );
};

export default LatestNews;

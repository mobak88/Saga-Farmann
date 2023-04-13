import React from "react";
import HeadingTwo from "../typography/headings/HeadingTwo";
import ParagraphsSmall from "../typography/paragraphs/ParagraphsSmall";
import WaveDarkHome, {
  WaveDarkHomeBottomPink,
} from "../waves/wavesLargeScreen/WaveDarkHome";
import WaveDarkHomeSmall, {
  WaveDarkHomeSmallBottomPink,
} from "../waves/wavesSmallScreen/WaveDarkHomeSmall";
import styles from "./LatestNews.module.css";
import LatestNewsSlider from "./latestNewsSlider/LatestNewsSlider";

interface SinglePostProps {
  id: number;
  title: { rendered: string };
  acf: {
    post_first_section: {
      post_images: [{ post_image: { url: string; alt: string } }];
    };
    post_description: string;
  };
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
        <WaveDarkHomeBottomPink />
        <WaveDarkHomeSmallBottomPink />
      </div>
    </>
  );
};

export default LatestNews;

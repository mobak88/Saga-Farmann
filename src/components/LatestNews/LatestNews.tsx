import React from "react";
import { SliderCardProps } from "../cards/sliderCard/SliderCard";
import styles from "./LatestNews.module.css";
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
    <div className={styles["section-container"]}>
      <div className={styles["text-container"]}>
        <h2>{postHeading}</h2>
        <p>{postText}</p>
      </div>
      <LatestNewsSlider posts={posts} />
    </div>
  );
};

export default LatestNews;

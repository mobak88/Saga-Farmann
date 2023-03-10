import React, { useRef } from "react";
import SliderCard from "../cards/sliderCard/SliderCard";
import { SliderCardProps } from "../cards/sliderCard/SliderCard";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import styles from "./LatestNews.module.css";

interface PostsProps extends SliderCardProps {
  id: number;
}

interface LatestNewsProps extends PostsProps {
  posts: PostsProps[];
}

const LatestNews = ({ posts }: LatestNewsProps) => {
  const swiperNavPrevRef = useRef<HTMLDivElement>(null);
  const swiperNavNextRef = useRef<HTMLDivElement>(null);

  const onBeforeInit = (Swiper: SwiperCore): void => {
    if (typeof Swiper.params.navigation !== "boolean") {
      const navigation = Swiper.params.navigation;
      if (navigation !== undefined) {
        navigation.prevEl = swiperNavPrevRef.current;
        navigation.nextEl = swiperNavNextRef.current;
      }
    }
  };

  return (
    <div className={styles["swiper-container"]}>
      <div className={styles["swiper-nav-prev"]} ref={swiperNavPrevRef}>
        <BsFillArrowLeftCircleFill className={styles["arrow-icon"]} size={50} />
      </div>

      <Swiper
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        onBeforeInit={onBeforeInit}
        className="mySwiper"
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        loop
      >
        <SwiperSlide>
          {posts &&
            posts.map((post) => (
              <SliderCard
                key={post.id}
                imageSrc={post.imageSrc}
                heading={post.heading}
                text={post.text}
                alt={post.alt}
              />
            ))}
        </SwiperSlide>
      </Swiper>
      <div className={styles["swiper-nav-next"]} ref={swiperNavNextRef}>
        <BsFillArrowRightCircleFill
          className={styles["arrow-icon"]}
          size={50}
        />
      </div>
    </div>
  );
};

export default LatestNews;

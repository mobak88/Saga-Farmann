import React, { useRef } from "react";
import SliderCard from "@/components/cards/sliderCard/SliderCard";
import { PostsProps } from "../LatestNews";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import styles from "./LatestNewsSlider.module.css";

const LatestNewsSlider = ({ posts }: PostsProps) => {
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
        loop={true}
      >
        {posts &&
          posts.map((post) => (
            <SwiperSlide key={post.id}>
              <SliderCard
                imageSrc={post.imageSrc}
                heading={post.heading}
                text={post.text}
                alt={post.alt}
              />
            </SwiperSlide>
          ))}
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

export default LatestNewsSlider;

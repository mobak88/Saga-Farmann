import React from "react";
import SliderCard from "@/components/cards/sliderCard/SliderCard";
import { PostsProps } from "../latestNewsInterfaces";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./LatestNewsSlider.module.css";

const LatestNewsSlider = ({ posts }: PostsProps) => {
  return (
    <div className={styles["swiper-container"]}>
      <Swiper
        navigation
        className={styles["news-swiper"]}
        modules={[Navigation]}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        loop={true}
      >
        {posts &&
          posts.map((post) => (
            <SwiperSlide key={post.id} className={styles["news-swiper-slide"]}>
              <div className={styles["slider-card-container"]}>
                <SliderCard
                  imageSrc={
                    post.acf.post_first_section.post_images[0].post_image.url
                  }
                  heading={post.title.rendered}
                  text={post.acf.post_description}
                  alt={
                    post.acf.post_first_section.post_images[0].post_image.alt
                      .length > 0
                      ? post.acf.post_first_section.post_images[0].post_image
                          .alt
                      : `Image of ${post.title.rendered}`
                  }
                  blogId={post.id.toString()}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default LatestNewsSlider;

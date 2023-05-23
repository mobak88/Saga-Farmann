import React, { useRef } from "react";
import SliderCard from "@/components/cards/sliderCard/SliderCard";
import { PostsProps } from "../latestNewsInterfaces";

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
  const swiperNavPrevRef = useRef<HTMLDivElement | null>(null);
  const swiperNavNextRef = useRef<HTMLDivElement | null>(null);

  const onBeforeInit = (Swiper: SwiperCore): void => {
    if (typeof Swiper.params.navigation !== "boolean") {
      const navigation = Swiper.params.navigation;
      if (navigation !== undefined) {
        navigation.prevEl = swiperNavPrevRef.current;
        navigation.nextEl = swiperNavNextRef.current;
        Swiper.navigation.init();
        Swiper.navigation.update();
      }
    }
  };

  return (
    <div className={styles["swiper-container"]}>
      <div className={styles["swiper-nav-prev"]} ref={swiperNavPrevRef}>
        <BsFillArrowLeftCircleFill className={styles["arrow-icon"]} size={50} />
      </div>
      <div className={styles["swiper-nav-next"]} ref={swiperNavNextRef}>
        <BsFillArrowRightCircleFill
          className={styles["arrow-icon"]}
          size={50}
        />
      </div>
      <Swiper
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        onBeforeInit={onBeforeInit}
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

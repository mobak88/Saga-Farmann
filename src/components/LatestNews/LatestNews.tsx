import React, { useRef } from "react";
import SliderCard from "../cards/sliderCard/SliderCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import styles from "./LatestNews.module.css";

const LatestNews = () => {
  const swiperNavPrevRef = useRef<HTMLDivElement>(null);
  const swiperNavNextRef = useRef<HTMLDivElement>(null);

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
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = swiperNavPrevRef.current;
          swiper.params.navigation.nextEl = swiperNavNextRef.current;
        }}
        className="mySwiper"
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        loop
      >
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
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

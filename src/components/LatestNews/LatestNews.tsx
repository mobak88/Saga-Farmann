import React from "react";
import SliderCard from "../cards/slider-card/slider-card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./LatestNews.module.css";

const LatestNews = () => {
  return (
    <div className={styles["swiper-container"]}>
      <Swiper
        className="mySwiper"
        navigation={true}
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
    </div>
  );
};

export default LatestNews;

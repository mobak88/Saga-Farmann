import React, { useState, useRef } from "react";
import styles from "./blogImageSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

interface SliderProps {
  images: { post_image: string }[];
  alt: string;
  id: number;
}

const BlogImageSlider = ({ images, alt }: SliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log("Slider change")}
        onSwiper={(swiper) => console.log(Swiper)}
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
        {images.map((image) => (
          <SwiperSlide>
            <Image
              src={image.post_image}
              alt={alt}
              className={styles[""]}
              width={360}
              height={250}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default BlogImageSlider;

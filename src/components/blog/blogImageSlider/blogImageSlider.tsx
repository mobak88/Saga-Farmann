import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";

import "swiper/swiper.css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "./blogImageSlider.module.css";

interface SliderProps {
  images: { post_image: string }[];
  alt: string;
  id: number;
}

const BlogImageSlider = ({ images, alt }: SliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className={styles["swiper-container"]}>
      {images.length > 1 ? (
        <div>
          <Swiper
            className={styles["main-swiper"]}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {images.map((image) => (
              <SwiperSlide className={styles["main-slide"]}>
                <Image
                  src={image.post_image}
                  alt={alt}
                  className={styles["main-image"]}
                  width={1000}
                  height={1000}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={() => setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={images.length > 4 ? 4 : 3 ? 3 : 2 ? 2 : 1}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles["preview-swiper"]}
          >
            {images.map((image) => (
              <SwiperSlide className={styles["preview-slide"]}>
                <Image
                  src={image.post_image}
                  alt={alt}
                  width={200}
                  height={200}
                  className={styles["preview-image"]}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <>
          {images.map((image) => (
            <Image
              src={image.post_image}
              alt={alt}
              className={styles["single-image"]}
              width={360}
              height={250}
            />
          ))}
        </>
      )}
    </div>
  );
};
export default BlogImageSlider;
// className={styles[""]}

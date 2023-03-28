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
    <div className={styles["image-swiper-container"]}>
      {images.length > 1 ? (
        <div>
          <Swiper
            className={styles["image-swiper"]}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            loop={true}
          >
            {images.map((image) => (
              <SwiperSlide>
                <Image
                  src={image.post_image}
                  alt={alt}
                  className={styles["swiper-focus-image"]}
                  width={360}
                  height={250}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={() => setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={images.length > 4 ? 4 : 3 ? 3 : 2 ? 2 : 1}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="preview-swiper"
          >
            {images.map((image) => (
              <SwiperSlide>
                <Image
                  src={image.post_image}
                  alt={alt}
                  className={styles["swiper-preview-image"]}
                  width={360}
                  height={250}
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
              className={styles["swiper-focus-image"]}
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

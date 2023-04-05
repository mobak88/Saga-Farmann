import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";
import "swiper/swiper-bundle.min.css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "./Swiper.module.css";
import Modal from "react-modal";
import { ImageProps } from "@/pages/blog/interfaces";

interface SliderProps {
  images: ImageProps[];
  alt: string;
  id: number;
}

const BlogImageSlider = ({ images, alt }: SliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (index: number) => {
    setModalIsOpen(true);
    setActiveImageIndex(index);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={styles["swiper-container"]}>
      {images.length > 1 ? (
        <>
          <Swiper
            className={styles["main-swiper"]}
            loop={true}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
          >
            {images.map((image, i) => (
              <SwiperSlide
                className={styles["main-slide"]}
                key={image.image + i}
              >
                <Image
                  src={image.image}
                  alt={alt}
                  className={styles["main-image"]}
                  onClick={() => openModal(i)}
                  height={600}
                  width={1000}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            className={`${styles.previewSwiper} previewSwiper`}
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={images.length > 4 ? 4 : 3 ? 3 : 2 ? 2 : 1}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {images.map((image, i) => (
              <SwiperSlide
                className={styles["preview-slide"]}
                key={image.image + i}
              >
                <Image
                  src={image.image}
                  alt={alt}
                  className={styles["preview-image"]}
                  width={180}
                  height={100}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <>
          {images.map((image, i) => (
            <Image
              key={image.image + i}
              src={image.image}
              alt={alt}
              className={styles["single-image"]}
              height={600}
              width={1000}
            />
          ))}
        </>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
        ariaHideApp={false}
        style={{
          overlay: {
            zIndex: 10,
            background: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(5px)",
          },
          content: { zIndex: 11 },
        }}
      >
        <Image
          src={images[activeImageIndex].image}
          alt={alt}
          className={styles["modal-image"]}
          height={600}
          width={1000}
        />
        <button onClick={closeModal} className={styles["close-button"]}>
          &times;
        </button>
      </Modal>
    </div>
  );
};

export default BlogImageSlider;

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

interface SliderProps {
  images: { post_image: string }[];
  alt: string;
  id: number;
}
interface ImageModalProps {
  image: string;
  alt: string;
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
              <SwiperSlide className={styles["main-slide"]} key={Math.random()}>
                <img
                  src={image.post_image}
                  alt={alt}
                  className={styles["main-image"]}
                  onClick={() => openModal(i)}
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
            {images.map((image) => (
              <SwiperSlide
                className={`${styles["preview-slide"]}`}
                key={Math.random()}
              >
                <img
                  src={image.post_image}
                  alt={alt}
                  className={styles["preview-image"]}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <>
          {images.map((image) => (
            <img
              key={Math.random()}
              src={image.post_image}
              alt={alt}
              className={styles["single-image"]}
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
        <img
          src={images[activeImageIndex].post_image}
          alt={alt}
          className={styles["modal-image"]}
        />

        <button onClick={closeModal} className={styles["close-button"]}>
          &times;
        </button>
      </Modal>
    </div>
  );
};
export default BlogImageSlider;
// className={styles[""]}

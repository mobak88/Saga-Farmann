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
<<<<<<< HEAD
              <SwiperSlide className={styles["main-slide"]} key={Math.random()}>
                <img
=======
              <SwiperSlide
                className={styles["main-slide"]}
                key={image.post_image + i}
              >
                <Image
>>>>>>> 9c192542dc822fa1be49bfe8172f9b5e0bb9174b
                  src={image.post_image}
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
<<<<<<< HEAD
            {images.map((image) => (
              <SwiperSlide
                className={`${styles["preview-slide"]}`}
                key={Math.random()}
              >
                <img
=======
            {images.map((image, i) => (
              <SwiperSlide
                className={styles["preview-slide"]}
                key={image.post_image + i}
              >
                <Image
>>>>>>> 9c192542dc822fa1be49bfe8172f9b5e0bb9174b
                  src={image.post_image}
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
<<<<<<< HEAD
          {images.map((image) => (
            <img
              key={Math.random()}
=======
          {images.map((image, i) => (
            <Image
              key={image.post_image + i}
>>>>>>> 9c192542dc822fa1be49bfe8172f9b5e0bb9174b
              src={image.post_image}
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
          src={images[activeImageIndex].post_image}
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
// className={styles[""]}

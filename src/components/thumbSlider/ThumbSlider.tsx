import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";
import "swiper/swiper-bundle.min.css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "./ThumbSlider.module.css";
import Modal from "react-modal";
import { ImageProps } from "@/components/blog/interfaces";

interface SliderProps {
  images: ImageProps[];
  alt: string;
  id: number;
}

const ImageSlider = ({ images, alt }: SliderProps) => {
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

  const previewSliderImageCount = () => {
    if (images.length === 4) {
      return "";
    } else if (images.length === 3) {
      return styles["previewSwiper-three-images"];
    } else if (images.length === 2) {
      return styles["previewSwiper-two-images"];
    } else {
      return "";
    }
  };

  return (
    <div className={styles["swiper-wrapper"]}>
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
                  <div className={styles["image-wrapper"]}>
                    <Image
                      src={image.image}
                      alt={alt}
                      className={styles["main-image"]}
                      onClick={() => openModal(i)}
                      height={600}
                      width={1000}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              className={`${
                styles.previewSwiper
              } ${previewSliderImageCount()} previewSwiper`}
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={images.length >= 4 ? 4 : images.length}
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
              <div key={image.image + i} className={styles["image-wrapper"]}>
                <Image
                  src={image.image}
                  alt={alt}
                  className={styles["single-image"]}
                  height={600}
                  width={1000}
                />
              </div>
            ))}
          </>
        )}
        {images.length > 0 && (
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
        )}
      </div>
    </div>
  );
};

export default ImageSlider;

import React, { useEffect, useRef, useState } from "react";
import styles from "./PressArticle.module.css";
import { PressArchive, PressArchiveInterface } from "./interfaces";
import ParagraphsBig from "../typography/paragraphs/ParagraphsBig";
import HeadingTwo from "../typography/headings/HeadingTwo";
import Image from "next/image";
import { FaFileDownload } from "react-icons/fa";
import ParagraphsSmall from "../typography/paragraphs/ParagraphsSmall";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

interface Props {
  date: PressArchiveInterface;
  pressData: PressArchive;
}

function downloadImage(url: any) {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const PressArticle = ({ pressData, date }: Props) => {
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
  const [fileUrl, setFileUrl] = useState<string>("");

  useEffect(() => {
    const { press_heading, press_text_fields } = pressData;
    const fileText = `${press_heading}\n\n${press_text_fields.map(
      (text) => text.press_text_field
    )}`;
    const file = new Blob([fileText], { type: "text/plain" });
    setFileUrl(URL.createObjectURL(file));
  }, [pressData]);

  return (
    <div className={styles.card}>
      <div className={styles["date-container"]}>
        {date && <ParagraphsSmall>{date.date.split("T")[0]}</ParagraphsSmall>}
        {date && (
          <ParagraphsSmall>
            {date.date.split("T")[1].slice(0, -3)}
          </ParagraphsSmall>
        )}
      </div>
      <div className={styles["header-container"]}>
        <HeadingTwo>{pressData.press_heading}</HeadingTwo>
        <a href={fileUrl} download>
          <button className={styles.download}>
            <FaFileDownload color="white" size={20} />
          </button>
        </a>
      </div>
      {pressData?.press_text_fields?.map((text, index) => (
        <div key={index} className={styles["paragraph-container"]}>
          <ParagraphsBig>{text.press_text_field}</ParagraphsBig>
        </div>
      ))}

      <div className={styles["image-container"]}>
        {pressData.press_images.length < 4 &&
          pressData.press_images.map(
            (image, index) =>
              image && (
                <div key={index} className={styles.images}>
                  <Image
                    className={styles.image}
                    src={image.press_image.url}
                    width={450}
                    height={340}
                    alt=""
                    onClick={() => downloadImage(image.press_image.url)}
                  />
                </div>
              )
          )}

        {pressData.press_images.length > 3 && (
          <>
            <div className={styles["swiper-nav-prev"]} ref={swiperNavPrevRef}>
              <BsFillArrowLeftCircleFill
                className={styles["arrow-icon"]}
                size={50}
              />
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
              className="image-swiper"
              modules={[Navigation, Pagination]}
              loop={true}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1300: {
                  slidesPerView: 3,
                },
              }}
            >
              {pressData.press_images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div key={index} className={styles.images}>
                    <Image
                      className={styles["slider-image"]}
                      src={image.press_image.url}
                      width={450}
                      height={340}
                      alt=""
                      onClick={() => downloadImage(image.press_image.url)}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>
    </div>
  );
};

export default PressArticle;

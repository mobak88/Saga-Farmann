import Head from "next/head";
import React, { useEffect, useState } from "react";
import { archieve } from "./dummyData";
import ImageSlider from "@/components/thumbSlider/ThumbSlider";
import styles from "./press.module.css";

interface PressImages {
  src: string;
  alt: string;
  downloadUrl: string;
}

const PressPage = ({ src, alt, downloadUrl }: PressImages) => {
  const [images, setImages] = useState<{ image: string }[] | []>([]);

  useEffect(() => {
    console.log(archieve);
    setImages(
      archieve.map((image) => {
        return { image: image.image };
      })
    );
    console.log(images);
  }, []);
  return (
    <>
      <Head>
        <title>{"Press page"}</title>
        <meta name="description" content={`Saga Farmann destination `} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.images}>
        {archieve.map((image) => (
          <>
            <h2>{image.caption}</h2>
            <ImageSlider
              images={images}
              alt={image.alt}
              id={image.id + Math.random()}
            />
            <a href={downloadUrl} download>
              Download
            </a>
          </>
        ))}
      </div>
      ;
    </>
  );
};

export default PressPage;

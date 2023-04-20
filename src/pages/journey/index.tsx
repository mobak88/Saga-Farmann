import React from "react";
import Header from "@/components/header/Header";
import styles from "./journeyPage.module.css";
import JourneyAnimation from "@/components/parallax/text/JourneyAnimation";
import MapAnimation from "@/components/parallax/map/MapAnimation";

interface ParallaxProps {
  parallaxData: ParallaxDataProps[];
}

interface ParallaxDataProps {
  imageHeading: string;
  imageText: { text: string }[];
  imageUrl: string;
  mapHeading: string;
  mapText: { text: string }[];
  mapUrl: string;
}

const TheJourney = ({}: ParallaxProps) => {
  const parallaxData: ParallaxDataProps[] = [
    {
      imageHeading: "Heading",
      imageText: [
        {
          text: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur esse accusamus fugit deserunt in autem recusandae eaque ad. Dolores delectus aliquid autem voluptate soluta officiis nam repellendus laboriosam nesciunt.",
        },
        {
          text: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur esse accusamus fugit deserunt in autem recusandae eaque ad. Dolores delectus aliquid autem voluptate soluta officiis nam repellendus laboriosam nesciunt.",
        },
      ],
      imageUrl:
        "https://dev.sagafarmann.com/wp/wp-content/uploads/website-core-images/DJI_0858-300x200.jpg",
      mapHeading: "Heading",
      mapText: [
        {
          text: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur esse accusamus fugit deserunt in autem recusandae eaque ad. Dolores delectus aliquid autem voluptate soluta officiis nam repellendus laboriosam nesciunt.",
        },
        {
          text: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur esse accusamus fugit deserunt in autem recusandae eaque ad. Dolores delectus aliquid autem voluptate soluta officiis nam repellendus laboriosam nesciunt.",
        },
      ],
      mapUrl:
        "https://dev.sagafarmann.com/wp/wp-content/uploads/Crew-Images/eu-c-04.png",
    },
    {
      imageHeading: "Heading",
      imageText: [
        {
          text: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur esse accusamus fugit deserunt in autem recusandae eaque ad. Dolores delectus aliquid autem voluptate soluta officiis nam repellendus laboriosam nesciunt.",
        },
        {
          text: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur esse accusamus fugit deserunt in autem recusandae eaque ad. Dolores delectus aliquid autem voluptate soluta officiis nam repellendus laboriosam nesciunt.",
        },
      ],
      imageUrl:
        "https://dev.sagafarmann.com/wp/wp-content/uploads/website-core-images/DJI_0858-300x200.jpg",
      mapHeading: "Heading",
      mapText: [
        {
          text: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur esse accusamus fugit deserunt in autem recusandae eaque ad. Dolores delectus aliquid autem voluptate soluta officiis nam repellendus laboriosam nesciunt.",
        },
        {
          text: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur esse accusamus fugit deserunt in autem recusandae eaque ad. Dolores delectus aliquid autem voluptate soluta officiis nam repellendus laboriosam nesciunt.",
        },
      ],
      mapUrl:
        "https://dev.sagafarmann.com/wp/wp-content/uploads/Crew-Images/eu-c-04.png",
    },
    {
      imageHeading: "Heading",
      imageText: [
        {
          text: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur esse accusamus fugit deserunt in autem recusandae eaque ad. Dolores delectus aliquid autem voluptate soluta officiis nam repellendus laboriosam nesciunt.",
        },
        {
          text: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur esse accusamus fugit deserunt in autem recusandae eaque ad. Dolores delectus aliquid autem voluptate soluta officiis nam repellendus laboriosam nesciunt.",
        },
      ],
      imageUrl:
        "https://dev.sagafarmann.com/wp/wp-content/uploads/website-core-images/DJI_0858-300x200.jpg",
      mapHeading: "Heading",
      mapText: [
        {
          text: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur esse accusamus fugit deserunt in autem recusandae eaque ad. Dolores delectus aliquid autem voluptate soluta officiis nam repellendus laboriosam nesciunt.",
        },
        {
          text: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur esse accusamus fugit deserunt in autem recusandae eaque ad. Dolores delectus aliquid autem voluptate soluta officiis nam repellendus laboriosam nesciunt.",
        },
      ],
      mapUrl:
        "https://dev.sagafarmann.com/wp/wp-content/uploads/Crew-Images/eu-c-04.png",
    },
  ];

  return (
    <>
      <Header header={"The Journey"} />
      <div className={styles["parallax-text-container"]}>
        {parallaxData.map((data: ParallaxDataProps, i: number) => (
          <>
            <JourneyAnimation
              imageHeading={data.imageHeading}
              imageText={data.imageText}
              imageUrl={data.imageUrl}
              i={i}
            />
            <MapAnimation
              mapHeading={data.mapHeading}
              mapText={data.mapText}
              mapUrl={data.mapUrl}
              i={i}
            ></MapAnimation>
          </>
        ))}
      </div>
    </>
  );
};

export default TheJourney;

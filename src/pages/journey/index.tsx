import React from "react";
import Header from "@/components/header/Header";
import ParallaxText from "@/components/parallax/text/ParallaxText";
import styles from "./journeyPage.module.css";

interface ParallaxProps {
  parallaxData: ParallaxDataProps[];
}

interface ParallaxDataProps {
  heading: string;
  text: string;
  url: string;
}

const TheJourney = ({}: ParallaxProps) => {
  const parallaxData: ParallaxDataProps[] = [
    {
      heading: "Heading",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur esse accusamus fugit deserunt in autem recusandae eaque ad. Dolores delectus aliquid autem voluptate soluta officiis nam repellendus laboriosam nesciunt.",
      url: "https://dev.sagafarmann.com/wp/wp-content/uploads/website-core-images/DJI_0858-300x200.jpg",
    },
    {
      heading: "Heading",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur esse accusamus fugit deserunt in autem recusandae eaque ad. Dolores delectus aliquid autem voluptate soluta officiis nam repellendus laboriosam nesciunt.",
      url: "https://dev.sagafarmann.com/wp/wp-content/uploads/website-core-images/exp-2021-127.jpg",
    },
    {
      heading: "Heading",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur esse accusamus fugit deserunt in autem recusandae eaque ad. Dolores delectus aliquid autem voluptate soluta officiis nam repellendus laboriosam nesciunt.",
      url: "https://dev.sagafarmann.com/wp/wp-content/uploads/website-core-images/exp-2021-129.jpg",
    },
  ];

  return (
    <>
      <Header header={"The Journey"} />
      <div className={styles["parallax-text-container"]}>
        {parallaxData.map((data: ParallaxDataProps) => (
          <ParallaxText
            heading={data.heading}
            text={data.text}
            url={data.url}
          />
        ))}
      </div>
    </>
  );
};

export default TheJourney;

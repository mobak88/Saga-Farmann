import React from "react";
import Header from "@/components/header/Header";
import styles from "./journeyPage.module.css";
import JourneyAnimation from "@/components/parallax/text/JourneyAnimation";
import MapAnimation from "@/components/parallax/map/MapAnimation";
import API_ENDPOINTS from "@/endpoints/endpoints";
import { JourneyProps } from "./interfaces";

const TheJourney = ({ journey }: JourneyProps) => {
  return (
    <>
      <Header header={"The Journey"} />
      <div className={styles["journey-content-container"]}>
        {journey.map((journeyData, i) => (
          <>
            {!journeyData.acf.next_year ? (
              <>
                <JourneyAnimation data={journeyData} i={i} />
                <MapAnimation data={journeyData} i={i} />
              </>
            ) : (
              ""
            )}
          </>
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(API_ENDPOINTS.stages);

  const journey = await res.json();

  return {
    props: {
      journey,
    },
    revalidate: 1,
  };
};

export default TheJourney;

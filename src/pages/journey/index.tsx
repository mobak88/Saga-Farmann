import React, { Fragment, useEffect } from "react";
import Header from "@/components/header/Header";
import styles from "./journeyPage.module.css";
import JourneyAnimation from "@/components/journey/text/JourneyAnimation";
import MapAnimation from "@/components/journey/map/MapAnimation";
import API_ENDPOINTS from "@/endpoints/endpoints";
import { JourneyProps } from "../../components/journey/interfaces/pageInterfaces";
import WaveRedBrownSmall from "@/components/waves/wavesSmallScreen/WaveRedBrownSmall";

const TheJourney = ({ journey }: JourneyProps) => {
  journey.sort(
    (a, b) => parseInt(a.acf.stage_number) - parseInt(b.acf.stage_number)
  );
  return (
    <>
      <Header journey={true} header={"The Journey"} />
      <div className={styles["journey-content-container"]}>
        {journey.map((journeyData, i) => (
          <Fragment key={i}>
            {!journeyData.acf.next_year && (
              <>
                <JourneyAnimation data={journeyData} i={i} />
                <WaveRedBrownSmall />
                <div className={styles["journeymap-container"]}>
                  <MapAnimation data={journeyData} i={i} />
                </div>
                <div className={styles["wave-bottom"]}>
                  <WaveRedBrownSmall />
                </div>
              </>
            )}
          </Fragment>
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

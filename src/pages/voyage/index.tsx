import React, { Fragment } from "react";
import Header from "@/components/header/Header";
import styles from "./voyagePage.module.css";
import VoyageAnimation from "@/components/voyage/text/VoyageAnimation";
import MapAnimation from "@/components/voyage/map/MapAnimation";
import API_ENDPOINTS from "@/endpoints/endpoints";
import { VoyageProps } from "../../components/voyage/interfaces/pageInterfaces";
import WaveRedBrownSmall from "@/components/waves/wavesSmallScreen/WaveRedBrownSmall";

const TheVoyage = ({ voyage }: VoyageProps) => {
  voyage.sort(
    (a, b) => parseInt(a.acf.stage_number) - parseInt(b.acf.stage_number)
  );
  return (
    <>
      <Header voyage={true} header={"The voyage"} />
      <div className={styles["voyage-content-container"]}>
        {voyage.map((voyageData, i) => (
          <Fragment key={i}>
            {!voyageData.acf.next_year && (
              <>
                {i === 0 ? (
                  <VoyageAnimation data={voyageData} i={i} first={true} />
                ) : (
                  <VoyageAnimation data={voyageData} i={i} />
                )}
                <WaveRedBrownSmall />
                <div className={styles["voyagemap-container"]}>
                  <MapAnimation data={voyageData} i={i} />
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

  const voyage = await res.json();

  return {
    props: {
      voyage,
    },
  };
};

export default TheVoyage;

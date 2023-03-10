import React from "react";
import destinationsData from "../../components/cards/destinationCard/data";
import DestinationCard from "../../components/cards/destinationCard/DestinationCard";
import styles from "./destinations.module.css";
import Layout from "@/components/navbar/layout";

const Destinations = () => {
  return (
    <div className={styles.wrapper}>
      <Layout />
      <div className={styles["card-container"]}>
        {destinationsData.map((value) => {
          return (
            <DestinationCard
              key={value.id}
              image={value.img}
              header={value.header}
              text={value.text}
              link={"Read more"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Destinations;

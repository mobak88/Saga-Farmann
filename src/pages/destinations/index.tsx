import React from "react";
import destinationsData from "../../components/cards/destinationCard/data";
import DestinationCard from "@/components/cards/destinationCard/destinationCard";
import styles from "./destinations.module.css";
// import Layout from "@/components/navigation/layout/layout";
import Header from "@/components/header/header";

const Destinations = () => {
  return (
    <div className={styles.wrapper}>
      {/* <Layout /> */}
      <Header header={"Destinations"} />
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

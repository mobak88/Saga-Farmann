import React from "react";
import destinationsData from "@/components/cards/destinationCard/Data";
import DestinationCard from "@/components/cards/destinationCard/DestinationCard";
import styles from "./destinations.module.css";
import Header from "@/components/header/Header";
import DarkContainer from "@/components/containers/darkContainer/DarkContainer";

const Destinations = () => {
  return (
    <>
      <Header header={"Destinations"} />
      <DarkContainer>
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
      </DarkContainer>
    </>
  );
};

export default Destinations;

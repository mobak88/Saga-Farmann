import React from "react";
import destinationsData from "../../components/cards/destinationCard/data";
import DestinationCard from "@/components/cards/destinationCard/destinationCard";
import styles from "./destinations.module.css";

import Header from "@/components/header/header";
type LinkProps = {
  links: { href: string; label: string }[];
};

const Destinations = ({ links }: LinkProps) => {
  return (
    <div className={styles.wrapper}>
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

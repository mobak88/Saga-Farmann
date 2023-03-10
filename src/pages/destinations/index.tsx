import React from "react";
import destinationsData from "../../components/cards/destinationCard/data";
import DestinationCard from "../../components/cards/destinationCard/DestinationCard";
import styles from "./destinations.module.css";
import Header from "@/components/navigation/header/header";

type LinkProps = {
  links: { href: string; label: string }[];
};

const Destinations = ({ links }: LinkProps) => {
  return (
    <div className={styles.wrapper}>
      <Header />
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

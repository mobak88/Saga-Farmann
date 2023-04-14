import React from "react";
import DestinationCard from "@/components/cards/destinationCard/DestinationCard";
import styles from "./destinations.module.css";
import Header from "@/components/header/Header";
import DarkContainer from "@/components/containers/darkContainer/DarkContainer";
import { GetStaticProps } from "next";
import API_ENDPOINTS from "@/endpoints/endpoints";
import { Destinations } from "@/components/cards/destinationCard/interfaces";

interface Props {
  destinations: Destinations[];
}

const Destinations = ({ destinations }: Props) => {
  return (
    <>
      <Header header={"Destinations"} />
      <DarkContainer>
        <div className={styles["card-container"]}>
          {destinations.map((destination: Destinations) => (
            <DestinationCard destinations={destination} key={destination.id} />
          ))}
        </div>
      </DarkContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [resDestinations] = await Promise.all([
    fetch(
      "https://dev.sagafarmann.com/wp/wp-json/wp/v2/destinations?per_page=100&acf_format=standard"
    ),
  ]);

  const [destinationsData] = await Promise.all([resDestinations.json()]);
  const filteredDestinations = destinationsData.filter(
    (destination: Destinations) =>
      destination.acf.next_year_destination === false
  );

  console.log(filteredDestinations);

  return {
    props: {
      destinations: filteredDestinations,
    },
    revalidate: 1,
  };
};

export default Destinations;

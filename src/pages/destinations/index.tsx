import React from "react";
import DestinationCard from "@/components/cards/destinationCard/DestinationCard";
import styles from "./destinations.module.css";
import Header from "@/components/header/Header";
import DarkContainer from "@/components/containers/darkContainer/DarkContainer";
import { GetStaticProps } from "next";
import API_ENDPOINTS from "@/endpoints/endpoints";
import { Destinations } from "@/components/cards/destinationCard/interfaces";
import DestinationCardSkeleton from "@/components/skeletons/destinationCardSkeleton/DestinationCardSkeleton";

interface Props {
  destinations: Destinations[];
}

const Destinations = ({ destinations }: Props) => {
  if (!destinations)
    return (
      <>
        <Header header={"Destinations"} />
        <div className={styles["destination-skeleton-wrapper"]}>
          <DestinationCardSkeleton />
        </div>
      </>
    );

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
    fetch(API_ENDPOINTS.destinations),
  ]);

  const [destinationsData] = await Promise.all([resDestinations.json()]);
  const filteredDestinations = destinationsData.filter(
    (destination: Destinations) =>
      destination.acf.next_year_destination === false
  );

  return {
    props: {
      destinations: filteredDestinations,
    },
    revalidate: 1,
  };
};

export default Destinations;

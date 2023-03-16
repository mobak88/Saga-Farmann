import StagesMap from "@/components/mapbox/stagesMap";
import React from "react";
import { StagesProps } from "@/components/mapbox/stagesMap";

const Map = ({ stages }: StagesProps) => {
  console.log(stages);
  return (
    <div>
      <h1>Map</h1>
      <StagesMap stages={stages} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://dev.sagafarmann.com/wp/wp-json/wp/v2/stages"
  );
  const stages = await res.json();

  return {
    props: {
      stages,
    },
  };
}

export default Map;
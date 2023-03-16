import StagesMap from "@/components/mapbox/stagesMap";
import React from "react";
import { StagesProps } from "@/components/mapbox/stagesMap";

interface SingleStageApiProps {
  id: number;
  title: { rendered: string };
  acf: {
    coordinates: {
      long: string;
      lat: string;
    };
    stage_number: number;
    stage: [
      {
        stage_text_area: [{ stage_text: string }];
      }
    ];
    current_destination: boolean;
  };
}

const Map = ({ stages }: StagesProps) => {
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

  const newStages = stages.map((stage: SingleStageApiProps) => {
    return {
      id: stage.id,
      title: stage.title.rendered,
      coordinates: {
        long: stage.acf.coordinates.long,
        lat: stage.acf.coordinates.lat,
      },
      stage_number: stage.acf.stage_number,
      stage_text_area: stage.acf.stage[0].stage_text_area,
      current_destination: stage.acf.current_destination,
    };
  });

  return {
    props: {
      stages: newStages,
    },
  };
}

export default Map;

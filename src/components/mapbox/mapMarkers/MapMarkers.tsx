import MapStageButton from "@/components/buttons/mapStageButton/MapStageButton";
import React from "react";
import { Marker } from "react-map-gl";
import { SingleStageProps } from "../interfaces";

interface MapMarkersProps {
  arr: SingleStageProps[];
  isNextYear: boolean;
  children?: JSX.Element;
}

const MapMarkers = ({ arr, isNextYear, children }: MapMarkersProps) => {
  return (
    <>
      {arr
        .filter((obj: SingleStageProps) => obj.next_year === isNextYear)
        .map((obj) => (
          <Marker
            key={obj.id}
            longitude={parseFloat(obj.coordinates.long)}
            latitude={parseFloat(obj.coordinates.lat)}
          >
            {children ? (
              children
            ) : (
              <MapStageButton stageNumber={obj.number} stageName={obj.title} />
            )}
          </Marker>
        ))}
    </>
  );
};

export default MapMarkers;

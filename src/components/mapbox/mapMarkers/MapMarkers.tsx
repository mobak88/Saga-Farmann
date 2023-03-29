import MapStageButton from "@/components/buttons/mapStageButton/MapStageButton";
import React from "react";
import { Marker } from "react-map-gl";
import { SingleStageProps } from "../interfaces";

interface MapMarkersProps {
  arr: SingleStageProps[];
  isNextYear: boolean;
  showModal?: (stageId: number) => void;
  children?: JSX.Element;
}

const MapMarkers = ({
  arr,
  isNextYear,
  showModal,
  children,
}: MapMarkersProps) => {
  return (
    <>
      {arr &&
        arr
          .filter((obj: SingleStageProps) => obj.next_year === isNextYear)
          .map((obj) => (
            <Marker
              key={obj.id}
              longitude={parseFloat(obj.coordinates.long)}
              latitude={parseFloat(obj.coordinates.lat)}
              onClick={() => showModal && showModal(obj.id)}
            >
              {children ? (
                children
              ) : (
                <MapStageButton
                  stageNumber={obj.number}
                  stageName={obj.title}
                  showModal={() => showModal && showModal(obj.id)}
                />
              )}
            </Marker>
          ))}
    </>
  );
};

export default MapMarkers;

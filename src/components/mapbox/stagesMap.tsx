import React, { useState } from "react";
import Map, { Marker, Source, Layer } from "react-map-gl";
import { Feature, LineString } from "geojson";
import "mapbox-gl/dist/mapbox-gl.css";
import MapMarker from "./mapMarker";
import Modal from "./modal/modal";

type GeoJSONLineString = Feature<LineString>;

interface SingleStageProps {
  id: number;
  acf: {
    coordinates: {
      long: string;
      lat: string;
    };
    stage_number: number;
  };
}
export interface StagesProps {
  stages: SingleStageProps[];
}

const StagesMap = ({ stages }: StagesProps) => {
  const [showModal, setShowModal] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: 48.1351,
    longitude: 11.582,
    zoom: 4.5,
  });

  const lineCoordinates = stages
    .sort((a, b) => a.acf.stage_number - b.acf.stage_number)
    .map((stage) => [
      parseInt(stage.acf.coordinates.long),
      parseInt(stage.acf.coordinates.lat),
    ]);

  const lineData: GeoJSONLineString = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: lineCoordinates,
    },
  };

  const handleShowModal = () => {
    setShowModal(true);
    console.log("show:", showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    console.log("close:", showModal);
  };

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      initialViewState={viewport}
      style={{ width: "100%", height: "100dvh" }}
      mapStyle="mapbox://styles/mustafabaker/clf808dwr00bt01qkc8rwflyc"
    >
      {showModal && <Modal onCloseClick={handleCloseModal} />}
      {stages &&
        stages.map((stage) => (
          <Marker
            key={stage.id}
            longitude={parseInt(stage.acf.coordinates.long)}
            latitude={parseInt(stage.acf.coordinates.lat)}
            onClick={handleShowModal}
          >
            <MapMarker />
          </Marker>
        ))}
      <Source id="polylineLayer" type="geojson" data={lineData}>
        <Layer
          id="lineLayer"
          type="line"
          layout={{
            "line-join": "round",
            "line-cap": "round",
          }}
          paint={{
            "line-color": "#bf625f",
            "line-width": 6,
          }}
        />
      </Source>
    </Map>
  );
};

export default StagesMap;

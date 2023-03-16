import React, { useState, useEffect } from "react";
import Map, { Marker, Source, Layer } from "react-map-gl";
import { Feature, LineString } from "geojson";
import "mapbox-gl/dist/mapbox-gl.css";
import MapMarker from "./mapMarker";
import Modal from "./modal/modal";

type GeoJSONLineString = Feature<LineString>;

interface SingleStageProps {
  id: number;
  title: string;
  coordinates: {
    long: string;
    lat: string;
  };
  stage_number: number;
  stage_text_area: [{ stage_text: string }];
  current_destination: boolean;
}
export interface StagesProps {
  stages: SingleStageProps[];
}

interface ShowModalProps {
  stageId: null | number;
  modalOpen: boolean;
}

const StagesMap = ({ stages }: StagesProps) => {
  const [showModal, setShowModal] = useState<ShowModalProps>({
    modalOpen: false,
    stageId: null,
  });

  const [viewport, setViewport] = useState({
    latitude: 48.1351,
    longitude: 11.582,
    zoom: 4.5,
  });

  const [modalStage, setModalStage] = useState<SingleStageProps | null>(null);

  useEffect(() => {
    if (!showModal.stageId || showModal.stageId === null) {
      return;
    }

    const stage = stages.find((stage) => stage.id === showModal.stageId);

    if (!stage) {
      return;
    }

    setModalStage(stage);
  }, [showModal.stageId]);

  const lineCoordinates = stages
    .sort((a, b) => a.stage_number - b.stage_number)
    .map((stage) => [
      parseInt(stage.coordinates.long),
      parseInt(stage.coordinates.lat),
    ]);

  const lineData: GeoJSONLineString = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: lineCoordinates,
    },
  };

  const handleShowModal = (stageId: number) => {
    setShowModal({ stageId: stageId, modalOpen: true });
  };

  const handleCloseModal = () => {
    setShowModal((prev) => ({ ...prev, modalOpen: false }));
  };

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      initialViewState={viewport}
      style={{ width: "100%", minHeight: "100dvh", height: "100rem" }}
      mapStyle="mapbox://styles/mustafabaker/clf808dwr00bt01qkc8rwflyc"
    >
      {showModal.modalOpen && modalStage && (
        <Modal
          title={modalStage.title}
          text={modalStage.stage_text_area[0].stage_text}
          onCloseClick={handleCloseModal}
        />
      )}
      {stages &&
        stages.map((stage) => (
          <Marker
            key={stage.id}
            longitude={parseInt(stage.coordinates.long)}
            latitude={parseInt(stage.coordinates.lat)}
            onClick={() => handleShowModal(stage.id)}
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

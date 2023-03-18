import React, { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapMarker from "./mapMarker";
import Modal from "./modal/modal";

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
  }, [showModal.stageId, stages]);

  const handleShowModal = (stageId: number) => {
    setShowModal({ stageId: stageId, modalOpen: true });
  };

  const handleCloseModal = () => {
    setShowModal((prev) => ({ ...prev, modalOpen: false }));
    setModalStage(null);
  };

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      initialViewState={viewport}
      style={{ width: "100%", minHeight: "100dvh", height: "100rem" }}
      mapStyle="mapbox://styles/mustafabaker/clfcpze8c00gv01mryfvd4i81"
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
            longitude={parseFloat(stage.coordinates.long)}
            latitude={parseFloat(stage.coordinates.lat)}
            onClick={() => handleShowModal(stage.id)}
          >
            <MapMarker />
          </Marker>
        ))}
    </Map>
  );
};

export default StagesMap;

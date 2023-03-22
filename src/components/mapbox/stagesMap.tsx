import React, { useState, useEffect, useRef } from "react";
import Map, { Marker, FullscreenControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapMarker from "./mapMarker";
import Modal from "./modal/modal";
import { CSSTransition } from "react-transition-group";

export interface SingleStageProps {
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
interface StagesProps {
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

  const viewport = {
    latitude: 48.1351,
    longitude: 11.582,
    zoom: 4.5,
  };

  const [modalStage, setModalStage] = useState<SingleStageProps | null>(null);

  const nodeRef = useRef<HTMLInputElement>(null);

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
  };

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      initialViewState={viewport}
      style={{ width: "100%", minHeight: "100dvh", height: "100rem" }}
      mapStyle="mapbox://styles/mustafabaker/clffw0qpm001a01o0i6m1oisp"
    >
      <FullscreenControl />

      <CSSTransition
        nodeRef={nodeRef}
        key="group"
        in={showModal.modalOpen}
        unmountOnExit
        timeout={350}
        classNames="modal"
      >
        <Modal
          ref={nodeRef}
          key="modal"
          title={modalStage?.title}
          text={modalStage?.stage_text_area[0].stage_text}
          onCloseClick={handleCloseModal}
        />
      </CSSTransition>

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

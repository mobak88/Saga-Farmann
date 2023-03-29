import React, { useState, useEffect, useRef } from "react";
import Map, { Marker, FullscreenControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapMarker from "./mapMarker";
import Modal from "./modal/modal";
import { CSSTransition } from "react-transition-group";
import { SingleStageProps } from "./interfaces";
import styles from "./StagesMap.module.css";
import MapStageButton from "../buttons/mapStageButton/MapStageButton";
import MapMarkers from "./mapMarkers/MapMarkers";

interface MapProps {
  destinations: SingleStageProps[];
  stages: SingleStageProps[];
}

interface ShowModalProps {
  destinationId: null | number;
  modalOpen: boolean;
}

const StagesMap = ({ destinations, stages }: MapProps) => {
  const [showModal, setShowModal] = useState<ShowModalProps>({
    modalOpen: false,
    destinationId: null,
  });

  const currentStage = stages.find((stage) => stage.current === true);

  const viewport = {
    latitude: parseFloat(currentStage!.coordinates.lat),
    longitude: parseFloat(currentStage!.coordinates.long),
    zoom: 5,
  };

  const [modalDestination, setModalDestination] =
    useState<SingleStageProps | null>(null);

  const nodeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!showModal.destinationId || showModal.destinationId === null) {
      return;
    }

    const destination = destinations.find(
      (destination) => destination.id === showModal.destinationId
    );

    if (!destination) {
      return;
    }

    setModalDestination(destination);
  }, [showModal.destinationId, destinations]);

  const handleShowModal = (stageId: number) => {
    setShowModal({ destinationId: stageId, modalOpen: true });
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
      cooperativeGestures
    >
      <FullscreenControl />
      <CSSTransition
        nodeRef={nodeRef}
        key="group"
        in={showModal.modalOpen}
        unmountOnExit
        timeout={700}
        classNames={{
          enter: styles["modal-enter"],
          enterActive: styles["modal-enter-active"],
          enterDone: styles["modal-enter-done"],
          exit: styles["modal-exit"],
          exitActive: styles["modal-exit-active"],
        }}
      >
        <Modal
          ref={nodeRef}
          key="modal"
          title={modalDestination?.title}
          text={modalDestination?.text_area}
          onCloseClick={handleCloseModal}
        />
      </CSSTransition>
      <MapMarkers arr={stages} isNextYear={false} />
      <MapMarkers arr={destinations} isNextYear={false}>
        <MapMarker />
      </MapMarkers>
      <MapMarkers arr={destinations} isNextYear={true}>
        <MapMarker nextYear={true} />
      </MapMarkers>
    </Map>
  );
};

export default StagesMap;

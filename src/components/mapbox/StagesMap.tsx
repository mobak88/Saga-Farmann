import React, { useState, useEffect, useRef } from "react";
import Map, { FullscreenControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapMarker from "./MapMarker";
import Modal from "./modal/Modal";
import { CSSTransition } from "react-transition-group";
import { SingleStageProps } from "./Interfaces";
import styles from "./StagesMap.module.css";
import MapMarkers from "./mapMarkers/MapMarkers";

interface MapProps {
  destinations: SingleStageProps[];
  stages: SingleStageProps[];
}

interface ShowModalProps {
  id: null | number;
  modalOpen: boolean;
}

const StagesMap = ({ destinations, stages }: MapProps) => {
  console.log(stages);
  console.log(destinations);
  const [showModal, setShowModal] = useState<ShowModalProps>({
    modalOpen: false,
    id: null,
  });

  const currentStage = stages.find((stage) => stage.current === true);

  const [modal, setModal] = useState<SingleStageProps | null>(null);

  const nodeRef = useRef<HTMLInputElement>(null);

  const viewport = {
    latitude: parseFloat(currentStage!.coordinates.lat),
    longitude: parseFloat(currentStage!.coordinates.long),
    zoom: 5,
  };

  useEffect(() => {
    if (!showModal.id || showModal.id === null) {
      return;
    }

    const destination = destinations.find(
      (destination) => destination.id === showModal.id
    );

    console.log(destination);

    if (destination) {
      setModal(destination);
    }

    if (!destination) {
      const stage = stages.find((stage) => stage.id === showModal.id);
      console.log(stage);
      if (!stage) {
        return;
      }

      setModal(stage);
    }
  }, [showModal.id, destinations, stages]);

  const handleShowModal = (stageId: number) => {
    setShowModal({ id: stageId, modalOpen: true });
  };

  const handleCloseModal = () => {
    setShowModal({ id: null, modalOpen: false });
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
          title={modal?.title}
          text={modal?.text_area}
          onCloseClick={handleCloseModal}
        />
      </CSSTransition>
      <MapMarkers arr={stages} isNextYear={false} showModal={handleShowModal} />
      <MapMarkers
        arr={destinations}
        isNextYear={false}
        showModal={handleShowModal}
      >
        <MapMarker />
      </MapMarkers>
      <MapMarkers arr={destinations} isNextYear={true}>
        <MapMarker nextYear={true} />
      </MapMarkers>
    </Map>
  );
};

export default StagesMap;

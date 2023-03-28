import React, { useState, useEffect, useRef } from "react";
import Map, { Marker, FullscreenControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapMarker from "./mapMarker";
import Modal from "./modal/modal";
import { CSSTransition } from "react-transition-group";
import { SingleStageProps, SingleDestinationProps } from "./interfaces";
import styles from "./StagesMap.module.css";
import MapStageButton from "../buttons/mapStageButton/MapStageButton";

interface MapProps {
  destinations: SingleDestinationProps[];
  stages: SingleStageProps[];
}

interface ShowModalProps {
  stageId: null | number;
  modalOpen: boolean;
}

const StagesMap = ({ destinations, stages }: MapProps) => {
  console.log(
    destinations.filter(
      (destination) => destination.next_year_destination === true
    )
  );
  const [showModal, setShowModal] = useState<ShowModalProps>({
    modalOpen: false,
    stageId: null,
  });

  const viewport = {
    latitude: 48.1351,
    longitude: 11.582,
    zoom: 4.5,
  };

  const [modalDestination, setDestination] =
    useState<SingleDestinationProps | null>(null);

  const nodeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!showModal.stageId || showModal.stageId === null) {
      return;
    }

    const destination = destinations.find(
      (destination) => destination.id === showModal.stageId
    );

    if (!destination) {
      return;
    }

    setDestination(destination);
  }, [showModal.stageId, destinations]);

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
          text={modalDestination?.destination_text_area}
          onCloseClick={handleCloseModal}
        />
      </CSSTransition>
      {stages &&
        stages
          .filter((stage) => stage.next_year === false)
          .map((stage) => (
            <Marker
              key={stage.id}
              longitude={parseFloat(stage.coordinates.long)}
              latitude={parseFloat(stage.coordinates.lat)}
            >
              <MapStageButton stageName={stage.title} />
            </Marker>
          ))}
      {destinations &&
        destinations
          .filter((destination) => destination.next_year_destination === false)
          .map((destination) => (
            <Marker
              key={destination.id}
              longitude={parseFloat(destination.coordinates.long)}
              latitude={parseFloat(destination.coordinates.lat)}
              onClick={() => handleShowModal(destination.id)}
            >
              <MapMarker />
            </Marker>
          ))}
      {destinations &&
        destinations
          .filter((destination) => destination.next_year_destination === true)
          .map((destination) => (
            <Marker
              key={destination.id}
              longitude={parseFloat(destination.coordinates.long)}
              latitude={parseFloat(destination.coordinates.lat)}
            >
              <MapMarker nextYear={true} />
            </Marker>
          ))}
    </Map>
  );
};

export default StagesMap;

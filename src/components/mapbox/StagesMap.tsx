import React, { useState, useEffect, useRef } from "react";
import Map, { FullscreenControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapMarker from "./MapMarker";
import Modal from "./modal/Modal";
import { CSSTransition } from "react-transition-group";
import { MapProps, SingleStageProps } from "./interfaces";
import styles from "./StagesMap.module.css";
import MapMarkers from "./mapMarkers/MapMarkers";

interface ShowModalProps {
  id: null | number;
  modalOpen: boolean;
}

const StagesMap = ({ destinations, stages }: MapProps) => {
  const [isDestination, setIsdestination] = useState(false);
  const [showModal, setShowModal] = useState<ShowModalProps>({
    modalOpen: false,
    id: null,
  });

  const [modal, setModal] = useState<SingleStageProps | null>(null);

  const currentStage = stages.find((stage) => stage.current === true);

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

    if (destination) {
      setModal(destination);
      setIsdestination(true);
    }

    if (!destination) {
      const stage = stages.find((stage) => stage.id === showModal.id);
      if (!stage) {
        return;
      }

      setModal(stage);
      setIsdestination(false);
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
      mapStyle={process.env.NEXT_PUBLIC_MAP_STYLE_URL}
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
        <>
          {modal && (
            <Modal
              ref={nodeRef}
              key="modal"
              title={modal?.title}
              text={modal?.text_area}
              image={modal?.image}
              destinationId={modal?.id.toString()}
              isDestination={isDestination}
              onCloseClick={handleCloseModal}
              crewId={modal?.crew.toString()}
              blogId={modal?.blogs[0].blog.toString()}
            />
          )}
        </>
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

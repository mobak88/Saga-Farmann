import React from "react";

interface StageButtonProps {
  stageName: string;
}

const MapStageButton = ({ stageName }: StageButtonProps) => {
  return (
    <>
      <button>{stageName}</button>
    </>
  );
};

export default MapStageButton;

import React from "react";

type Props = {
  currentId: number;
  totalIds: number;
  setCurrentId: (id: number) => void;
};

const SwitchIdButton = ({ currentId, totalIds, setCurrentId }: Props) => {
  const handleNext = () => {
    const nextId = (currentId + 1) % totalIds;
    setCurrentId(nextId);
  };

  const handlePrev = () => {
    const prevId = (currentId + totalIds - 1) % totalIds;
    setCurrentId(prevId);
  };

  return (
    <div>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default SwitchIdButton;

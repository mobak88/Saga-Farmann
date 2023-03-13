import React from "react";
import CrewCard from "@/components/cards/crewCard/crewCard";
import crewData from "@/components/cards/crewCard/data";

const Crew = () => {
  return (
    <>
      {crewData.map((value) => {
        return (
          <CrewCard
            key={value.id}
            imageSrc={value.img}
            name={value.name}
            role={value.role}
            about={value.about}
          />
        );
      })}
    </>
  );
};

export default Crew;

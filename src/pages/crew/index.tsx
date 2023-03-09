import React from "react";
import CrewCard from "@/components/cards/crew-card/crew-card";
import crewData from "@/components/cards/crew-card/data";

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

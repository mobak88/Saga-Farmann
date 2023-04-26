import { useState, useEffect } from "react";
import API_ENDPOINTS from "@/endpoints/endpoints";
import { CrewMember } from "@/pages/crew_members/[id]";

export const useCurrentCrewId = () => {
  const [crewId, setCrewId] = useState<String>();

  useEffect(() => {
    const getCurrentCrew = async () => {
      const [resCrewMembers] = await Promise.all([
        fetch(API_ENDPOINTS.crewMembers),
      ]);
      const [crewIds] = await Promise.all([resCrewMembers.json()]);

      const currentCrewId = crewIds.filter(
        (crew: CrewMember) => crew.acf?.current_crew === true
      );
      const currentCrew = currentCrewId.map((crew: CrewMember) =>
        crew.id.toString()
      );
      setCrewId(currentCrew);
    };
    getCurrentCrew();
  }, []);
  return crewId;
};

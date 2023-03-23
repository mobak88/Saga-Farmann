import React, { useState } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import styles from "./crew.module.css";
import Navbar from "@/components/navigation/navbar/navbar";
import Header from "@/components/header/header";
import SwitchIdButton from "@/components/buttons/switchIdButton";
import Card from "../../components/cards/crewCard/crewCard";
import HeadingTwo from "@/components/typography/headings/headingTwo";
import API_ENDPOINTS from "@/endpoints/endpoints";
// crewMembers.acf.member
type Member = {
  member_image: string;
  member_name: string;
  member_role: string;
  member_description: string;
};
// crewMember
type CrewMember = {
  id: number;
  title: { rendered: string };
  acf: { member: Member[] };
  current_crew: boolean;
};

// crewMember
type Props = {
  crewMembers: CrewMember[];
  ids: number[];
};

const CrewMemberPage = ({ crewMembers, ids }: Props) => {
  const [isCurrentCrew, setIsCurrentCrew] = useState(
    crewMembers.some((member) => member.current_crew)
  );

  const [currentId, setCurrentId] = useState(ids[0]);
  const { title, acf } = crewMembers.find(
    (member) => member.id === currentId
  ) ?? { title: { rendered: "" }, acf: { member: [] } };

  return (
    <>
      <Header header={title.rendered} />
      <div className={styles["main-wrapper"]}>
        <div className={styles["btn-link-container"]}>
          <SwitchIdButton
            currentId={currentId}
            totalIds={ids.length}
            setCurrentId={setCurrentId}
            baseUrl="/crew"
            ids={ids}
          />
        </div>

        <HeadingTwo>
          {isCurrentCrew ? "Current Crew" : "Upcoming Crew"}
        </HeadingTwo>

        <div className={styles["card-container"]}>
          {acf.member.map((member, index) => (
            <Card
              key={index}
              member_image={member.member_image}
              member_name={member.member_name}
              member_role={member.member_role}
              member_description={member.member_description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(API_ENDPOINTS.crewMembers);
  const crewMembers: CrewMember[] = await res.json();
  const ids = crewMembers.map((member) => member.id);
  return {
    props: {
      crewMembers,
      ids,
    },
  };
};

export default CrewMemberPage;

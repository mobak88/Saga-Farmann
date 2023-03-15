import React, { useState } from "react";
import Navbar from "@/components/navigation/navbar/navbar";
import Header from "@/components/header/header";
import Card from "../../components/cards/crewCard/crewCard";
import SwitchIdButton from "@/components/buttons/switchIdButton";
import styles from "./crew.module.css";
import { GetStaticProps } from "next";

type Member = {
  member_image: string;
  member_name: string;
  member_role: string;
  member_description: string;
};

type CrewMember = {
  id: number;
  title: { rendered: string };
  acf: { member: Member[] };
};

type Props = {
  crewMembers: CrewMember[];
};

const CrewMemberPage = ({ crewMembers }: Props) => {
  const [currentId, setCurrentId] = useState(0);
  const { title, acf } = crewMembers[currentId];
  const ids = [141, 142, 143, 144, 145, 146, 147, 148];

  return (
    <>
      <Navbar />
      <Header header={"Crew Page"} />
      <h1>{title.rendered}</h1>
      <SwitchIdButton
        currentId={currentId}
        totalIds={ids.length}
        setCurrentId={setCurrentId}
      />
      <div className={styles["card-container"]}>
        <div>
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
  const res = await fetch(
    `https://dev.sagafarmann.com/wp/wp-json/wp/v2/crew_members`
  );
  const crewMembers: CrewMember[] = await res.json();
  return {
    props: {
      crewMembers,
    },
  };
};

export default CrewMemberPage;

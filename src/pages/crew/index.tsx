import React from "react";
import CrewCard from "@/components/cards/crewCard/crewCard";
import styles from "./crew.module.css";
import Header from "@/components/header/header";
import Navbar from "@/components/navigation/navbar/navbar";
import { GetStaticProps, NextPage } from "next";

type Member = {
  member_image: string;
  member_name: string;
  member_role: string;
  member_description: string;
};

type CrewMember = {
  id: number;
  acf: {
    member: Member[];
  };
};

type Props = {
  crewMembers: CrewMember[];
};

const Crew: NextPage<Props> = ({ crewMembers }) => {
  return (
    <>
      <Navbar />
      <Header header={"Crew"} />

      {crewMembers.map((crewMember) => (
        <div key={crewMember.id} className={styles["card-container"]}>
          {crewMember.acf.member.map((member, index) => (
            <CrewCard
              key={index}
              member_image={member.member_image}
              member_name={member.member_name}
              member_role={member.member_role}
              member_description={member.member_description}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(
    "https://dev.sagafarmann.com/wp/wp-json/wp/v2/crew_members"
  );
  const crewMembers: CrewMember[] = await res.json();
  return { props: { crewMembers } };
};

export default Crew;

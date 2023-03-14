import React from "react";
import Navbar from "@/components/navigation/navbar/navbar";
import Header from "@/components/header/header";
import Card from "../../components/cards/crewCard/crewCard";

import styles from "./crew.module.css";
import { GetStaticProps } from "next";

type Member = {
  member_image: string;
  member_name: string;
  member_role: string;
  member_description: string;
};

type CrewMember = {
  title: { rendered: string };
  acf: { member: Member[] };
};

type Props = {
  crewMember: CrewMember;
};

const CrewMemberPage = ({ crewMember }: Props) => {
  const { title, acf } = crewMember;

  return (
    <>
      <Navbar />
      <Header header={"Crew Page"} />
      <h1>{title.rendered}</h1>
      <div className={styles["card-container"]}>
        <div>
          {acf.member.map((member, index) => (
            <Card
              key={index}
              member_image={member.member_image}
              member_name={member.member_name}
              member_role={member.member_role}
              member_description={member.member_name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(
    "https://dev.sagafarmann.com/wp/wp-json/wp/v2/crew_members/141"
  );
  const crewMember: CrewMember = await res.json();

  return {
    props: {
      crewMember,
    },
  };
};

export default CrewMemberPage;

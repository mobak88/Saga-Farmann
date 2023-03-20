import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import styles from "./crew.module.css";
import Navbar from "@/components/navigation/navbar/navbar";
import Header from "@/components/header/header";
import SwitchIdButton from "@/components/buttons/switchIdButton";
import Card from "@/components/cards/crewCard/crewCard";

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
  crewMember: CrewMember;
};

const CrewMemberDetailPage = ({ crewMember }: Props) => {
  const { title, acf } = crewMember;
  const [currentId, setCurrentId] = useState(0);
  const ids = [141, 142, 143, 144, 145, 146, 147];

  return (
    <>
      <Navbar />
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

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `https://dev.sagafarmann.com/wp/wp-json/wp/v2/crew_members`
  );
  const crewMembers: CrewMember[] = await res.json();

  const paths = crewMembers.map((crewMember) => ({
    params: { id: crewMember.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = Number(params?.id);
  const res = await fetch(
    `https://dev.sagafarmann.com/wp/wp-json/wp/v2/crew_members/${id}`
  );
  const crewMember: CrewMember = await res.json();

  return {
    props: {
      crewMember,
    },
  };
};

export default CrewMemberDetailPage;

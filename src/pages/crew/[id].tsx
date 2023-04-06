import { GetStaticPaths, GetStaticProps } from "next";
import React, { useState } from "react";
import { ParsedUrlQuery } from "querystring";
import styles from "./crew.module.css";
import Header from "@/components/header/Header";
import { useRouter } from "next/router";
import Card from "../../components/cards/crewCard/CrewCard";
import HeadingTwo from "@/components/typography/headings/HeadingTwo";
import SwitchIdButton from "@/components/buttons/SwitchIdButton";
import DarkContainer from "@/components/containers/darkContainer/DarkContainer";

type Member = {
  member_image: string;
  member_name: string;
  member_role: string;
  member_description: string;
};

interface CrewMember {
  id: number;
  title: { rendered: string };
  acf: {
    member: Member[];
    current_crew: boolean;
    crew_dates: { crew_date_from: number; crew_date_to: number };
  };
}

type Props = {
  crewMember: CrewMember;
  ids: number[];
};

interface Params extends ParsedUrlQuery {
  id: string;
}

const CrewMemberPage = ({ crewMember, ids }: Props) => {
  const [currentId, setCurrentId] = useState(ids[0]);
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const isCurrentCrew = crewMember.acf.current_crew;
  const crewDateToApi = crewMember.acf.crew_dates.crew_date_to.toString();
  const crewDateTo = parseInt(crewDateToApi);

  let date = new Date();
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");
  let currentDate = parseInt(`${year}${month}${day}`);

  const isFormerCrew = (): boolean => {
    if (crewDateTo > currentDate) {
      return true;
    }
    return false;
  };

  return (
    <>
      <Header header={crewMember.title.rendered} />
      <DarkContainer>
        <div className={styles["main-wrapper"]}>
          <div className={styles["button-heading-wrapper"]}>
            <SwitchIdButton
              currentId={currentId}
              totalIds={ids.length}
              setCurrentId={setCurrentId}
              baseUrl="/crew"
              ids={ids}
            />
            <div className={styles["heading-wrapper"]}>
              <HeadingTwo>
                {isCurrentCrew
                  ? "Current Crew"
                  : isFormerCrew()
                  ? "Upcoming Crew"
                  : "Former Crew"}
              </HeadingTwo>
            </div>
          </div>
          <div className={styles["card-container"]}>
            {crewMember.acf.member.map((member, index) => (
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
      </DarkContainer>
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
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { id } = params ?? {};
  const crewRes = await fetch(
    `https://dev.sagafarmann.com/wp/wp-json/wp/v2/crew_members/${id}`
  );
  const crewMember: CrewMember = await crewRes.json();

  const allCrewsRes = await fetch(
    `https://dev.sagafarmann.com/wp/wp-json/wp/v2/crew_members`
  );
  const allCrews: CrewMember[] = await allCrewsRes.json();
  allCrews.sort((a, b) => {
    const aDateFrom = a.acf.crew_dates.crew_date_from;
    const bDateFrom = b.acf.crew_dates.crew_date_from;
    return aDateFrom - bDateFrom;
  });
  const ids = allCrews.map((crewMember) => crewMember.id);

  return {
    props: {
      crewMember,
      ids,
    },
  };
};

export default CrewMemberPage;

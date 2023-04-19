import { GetStaticPaths, GetStaticProps } from "next";
import React, { useState } from "react";
import { ParsedUrlQuery } from "querystring";
import styles from "./crew.module.css";
import Header from "@/components/header/Header";
import Card from "../../components/cards/crewCard/CrewCard";
import HeadingTwo from "@/components/typography/headings/HeadingTwo";
import SwitchIdButton from "@/components/buttons/SwitchIdButton";
import DarkContainer from "@/components/containers/darkContainer/DarkContainer";
import API_ENDPOINTS from "@/endpoints/endpoints";
import avatarImg from "../../../public/assets/blank-profile-picture-973460_1280.png";
import { StaticImageData } from "next/image";
import CardSkeleton from "@/components/skeletons/card/CardSkeleton";
import Head from "next/head";

type Member = {
  member_image:
    | {
        sizes: {
          large: string;
        };
      }
    | StaticImageData;
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
    crew_dates: { crew_date_from: string; crew_date_to: string };
    destination: number;
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
  const [currentId, setCurrentId] = useState<number>(
    ids.indexOf(crewMember.id)
  );

  if (!ids)
    return (
      <div className={styles["crew-id-skeleton-wrapper"]}>
        <CardSkeleton />
      </div>
    );

  const isCurrentCrew = crewMember.acf.current_crew;

  function isFormerCrew(crewMember: CrewMember): boolean {
    const crewDateTo = crewMember.acf.crew_dates.crew_date_to;
    const now = new Date();
    const [day, month, year] = crewDateTo.split("/");
    const crewDateToObj = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day)
    );
    return crewDateToObj < now;
  }

  const headText = `Saga Farmann crew ${crewMember.title.rendered}`;

  return (
    <>
      <Head>
        <title>{headText}</title>
        <meta
          name="description"
          content={`Saga Farmann crew ${crewMember.title.rendered}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header={crewMember && crewMember.title.rendered} />
      <DarkContainer>
        <div className={styles["main-wrapper"]}>
          <div className={styles["button-heading-wrapper"]}>
            <SwitchIdButton
              currentId={currentId}
              totalIds={ids.length}
              setCurrentId={setCurrentId}
              baseUrl="/crew"
              ids={ids}
            >
              <div className={styles["heading-wrapper"]}>
                <HeadingTwo>
                  {isCurrentCrew
                    ? "Current Crew"
                    : isFormerCrew(crewMember)
                    ? "Former Crew"
                    : "Upcoming Crew"}
                </HeadingTwo>
              </div>
            </SwitchIdButton>
          </div>
          <div className={styles["card-container"]}>
            {crewMember &&
              crewMember.acf.member.map((member, index) => (
                <Card
                  key={index}
                  member_image={
                    typeof member.member_image === "object" &&
                    "sizes" in member.member_image &&
                    member.member_image.sizes?.large
                      ? member.member_image.sizes.large
                      : avatarImg
                  }
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
  const res = await fetch(API_ENDPOINTS.crewMembers);

  const crewMembers: CrewMember[] = await res.json();
  const paths = crewMembers.map((crewMember) => ({
    params: { id: crewMember.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const id = Number(params?.id);

  const singleCrewRespond = await fetch(API_ENDPOINTS.singleCrew(id));
  const crewMember: CrewMember = await singleCrewRespond.json();

  const allCrewsRespond = await fetch(API_ENDPOINTS.crewMembers);
  const allCrews: CrewMember[] = await allCrewsRespond.json();

  const sortedCrews = allCrews.sort(
    (a, b) => a.acf.destination - b.acf.destination
  );

  const ids = sortedCrews.map((item) => item.id);

  if (!crewMember.id) {
    return {
      redirect: {
        destination: "/crew",
        permanent: false,
      },
    };
  }

  return {
    props: {
      crewMember,
      ids,
    },
    revalidate: 1,
  };
};

export default CrewMemberPage;

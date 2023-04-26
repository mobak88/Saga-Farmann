import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import styles from "./crew.module.css";
import Header from "@/components/header/Header";
import ReactMarkdown from "react-markdown";
import DarkContainer from "@/components/containers/darkContainer/DarkContainer";
import SponsorUsSection from "@/components/sponsorUsSection/SponsorUsSection";
import { SponsorUsSectionInterface } from "@/components/sponsorUsSection/interfaces";
import API_ENDPOINTS from "@/endpoints/endpoints";
import { sponsorUsDataStructure } from "@/helpers/sponsorUsDataStructure";
import { constructDate } from "@/helpers/constructDate";
import Head from "next/head";

interface CrewMember {
  id: number;
  title: { rendered: string };
  acf: {
    crew_dates: { crew_date_from: number; crew_date_to: number };
  };
}

interface Props {
  crewMembers: CrewMember[];
  sponsorUsSection: SponsorUsSectionInterface;
}

const CrewMemberPage = ({ crewMembers, sponsorUsSection }: Props) => {
  return (
    <>
      <Head>
        <title>Saga Farmann crews</title>
        <meta name="description" content="Saga Farman crews" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header="Crews 2023" />
      <DarkContainer>
        <div className={styles["card-container"]}>
          <div className={styles["crew-links-wrapper"]}>
            {crewMembers.map((crewMember) => (
              <Link
                key={crewMember.id}
                href={`/crew_members/${crewMember.id}`}
                className={styles["crews-links"]}
              >
                <ReactMarkdown>{crewMember.title.rendered}</ReactMarkdown>
              </Link>
            ))}
          </div>
        </div>
      </DarkContainer>
      <SponsorUsSection data={sponsorUsSection} />
    </>
  );
};

export default CrewMemberPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [resCrewMembers, resSponsorUs] = await Promise.all([
    fetch(API_ENDPOINTS.crewMembers),
    fetch(API_ENDPOINTS.page(222)),
  ]);

  const [crewMembers, sponsorUs] = await Promise.all([
    resCrewMembers.json(),
    resSponsorUs.json(),
  ]);

  const filteredCrewMembers = crewMembers.filter(
    (member: CrewMember) => member.acf?.crew_dates?.crew_date_from
  );

  filteredCrewMembers.sort((a: CrewMember, b: CrewMember) => {
    const [aDateFrom, bDateFrom] = constructDate(
      a.acf.crew_dates.crew_date_from,
      b.acf.crew_dates.crew_date_from
    );

    return bDateFrom - aDateFrom;
  });

  const sponsorUsSection = sponsorUsDataStructure(sponsorUs.acf);

  return {
    props: {
      crewMembers: filteredCrewMembers,
      sponsorUsSection,
    },
  };
};

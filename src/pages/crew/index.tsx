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

interface CrewMember {
  id: number;
  title: { rendered: string };
}

interface Props {
  crewMembers: CrewMember[];
  sponsorUsSection: SponsorUsSectionInterface;
}

const CrewMemberPage = ({ crewMembers, sponsorUsSection }: Props) => {
  return (
    <>
      <Header header="Crews 2023" />
      <DarkContainer>
        <div className={styles["card-container"]}>
          <div className={styles["crew-links-wrapper"]}>
            {crewMembers.map((crewMember) => (
              <Link
                key={crewMember.id}
                href={`/crew/${crewMember.id}`}
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [resCrewMembers, resSponsorUs] = await Promise.all([
    fetch(API_ENDPOINTS.crewMembers),
    fetch(API_ENDPOINTS.page(222)),
  ]);

  const [crewMembers, sponsorUs] = await Promise.all([
    resCrewMembers.json(),
    resSponsorUs.json(),
  ]);

  const swapElements = (arr: any[], i1: number, i2: number) => {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
  };

  swapElements(crewMembers, 6, 7);

  const sponsorUsSection = sponsorUs.acf;

  return {
    props: {
      crewMembers,
      sponsorUsSection,
    },
  };
};

export default CrewMemberPage;

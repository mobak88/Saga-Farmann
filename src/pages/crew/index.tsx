import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import styles from "./crew.module.css";
import Navbar from "@/components/navigation/navbar/navbar";
import Header from "@/components/header/header";
import HeadingTwo from "@/components/typography/headings/headingTwo";
import HeadingThree from "@/components/typography/headings/headingThree";

interface CrewMember {
  id: number;
  name: string;
  role: string;
  title: { rendered: string };
}

interface Props {
  crewMembers: CrewMember[];
}

const CrewMemberPage = ({ crewMembers }: Props) => {
  return (
    <>
      <Navbar />
      <Header header="Crew Page" />
      <div className={styles["main-wrapper"]}>
        <HeadingTwo>All Crews </HeadingTwo>

        <div className={styles["card-container"]}>
          <ul>
            {crewMembers.map((crewMember) => (
              <HeadingThree key={crewMember.id}>
                <Link href={`/crew/${crewMember.id}`}>
                  {crewMember.title.rendered}
                </Link>
              </HeadingThree>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(
    `https://dev.sagafarmann.com/wp/wp-json/wp/v2/crew_members`
  );
  const crewMembers = await res.json();
  console.log(crewMembers);
  return {
    props: {
      crewMembers,
    },
  };
};

export default CrewMemberPage;

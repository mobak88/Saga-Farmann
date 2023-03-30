import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import styles from "./crew.module.css";
import Header from "@/components/header/Header";
import HeadingTwo from "@/components/typography/headings/HeadingTwo";
import HeadingThree from "@/components/typography/headings/HeadingThree";
import ReactMarkdown from "react-markdown";

interface CrewMember {
  id: number;
  title: { rendered: string };
}

interface Props {
  crewMembers: CrewMember[];
}

const CrewMemberPage = ({ crewMembers }: Props) => {
  console.log(crewMembers);

  return (
    <>
      <Header header="Crews" />
      <div className={styles["main-wrapper"]}>
        <HeadingTwo>Saga Asia 2023</HeadingTwo>

        <div className={styles["card-container"]}>
          <div className={styles["crew-links-wrapper"]}>
            {crewMembers.map((crewMember) => (
              <HeadingThree key={crewMember.id}>
                <Link
                  href={`/crew/${crewMember.id}`}
                  className={styles["crews-links"]}
                >
                  <ReactMarkdown>{crewMember.title.rendered}</ReactMarkdown>
                </Link>
              </HeadingThree>
            ))}
          </div>
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
  const swapElements = (arr: any[], i1: number, i2: number) => {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
  };
  swapElements(crewMembers, 6, 7);

  return {
    props: {
      crewMembers,
    },
  };
};

export default CrewMemberPage;

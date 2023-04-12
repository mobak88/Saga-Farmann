import BigCard from "@/components/cards/sponsorCards/BigCard";
import DarkContainer from "@/components/containers/darkContainer/DarkContainer";
import Header from "@/components/header/Header";
import React from "react";
import { GetStaticProps } from "next";
import SponsorUsSection from "@/components/sponsorUsSection/SponsorUsSection";
import { SponsorUsSectionInterface } from "@/components/sponsorUsSection/interfaces";
import API_ENDPOINTS from "@/endpoints/endpoints";
import styles from "./sponsorPage.module.css";

interface Sponsor {
  title: { rendered: string };
  acf: {
    sponsor: Array<{
      sponsor_image: string;
      sponsor_name: string;
      sponsor_description: string;
    }>;
  };
}

interface Props {
  sponsors: Sponsor[];
  sponsorUsSection: SponsorUsSectionInterface;
}
const SponsorPage = ({ sponsors, sponsorUsSection }: Props) => {
  // sponsors.forEach((post) => {
  //   const sponsorName = post.acf.sponsor[0].sponsor_name;
  //   const sponsorDescription = post.acf.sponsor[0].sponsor_description;

  //   console.log(`Sponsor Name: ${sponsorName}`);
  //   console.log(`Sponsor Description: ${sponsorDescription}`);
  // });
  return (
    <>
      <Header header="Sponsors" />
      <DarkContainer>
        <div className={styles["card-wrapper"]}>
          {sponsors.map((sponsor, index) => {
            const acf = sponsor.acf ?? {};
            const sponsorImage = acf.sponsor?.[0]?.sponsor_image ?? "";
            const sponsorName = acf.sponsor?.[0]?.sponsor_name ?? "";
            const sponsorDescription =
              acf.sponsor?.[0]?.sponsor_description ?? "";

            // console.log(`Sponsor Name: ${sponsorName}`);
            // console.log(`Sponsor Description: ${sponsorDescription}`);
            // console.log(`Sponsor image: ${sponsorImage}`);
            console.log(sponsor);

            return (
              <BigCard
                key={index}
                sponsor_image={sponsorImage}
                sponsor_name={sponsorName}
                sponsor_description={sponsorDescription}
                sponsor_link="Sponsor Link"
              />
            );
          })}
        </div>
      </DarkContainer>
      {/* <SponsorUsSection data={sponsorUsSection} /> */}
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [resSponsors, resSponsorUs] = await Promise.all([
    fetch(API_ENDPOINTS.sponsors),
    fetch(API_ENDPOINTS.page(222)),
  ]);

  const [sponsors, sponsorUs] = await Promise.all([
    resSponsors.json(),
    resSponsorUs.json(),
  ]);

  const sponsorUsSection = sponsorUs.acf;

  return {
    props: {
      sponsors,
      sponsorUsSection,
    },
  };
};
export default SponsorPage;

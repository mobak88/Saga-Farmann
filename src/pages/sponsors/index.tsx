import BigCard from "@/components/cards/sponsorCards/BigCard";
import DarkContainer from "@/components/containers/darkContainer/DarkContainer";
import Header from "@/components/header/Header";
import React from "react";
import { GetStaticProps } from "next";
import SponsorUsSection from "@/components/sponsorUsSection/SponsorUsSection";
import { SponsorUsSectionInterface } from "@/components/sponsorUsSection/interfaces";
import API_ENDPOINTS from "@/endpoints/endpoints";
import styles from "./sponsorPage.module.css";
import SmallCard from "@/components/cards/sponsorCards/SmallCard";

interface Sponsor {
  title: { rendered: string };
  acf: {
    sponsor: Array<{
      prioritized: boolean;
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
  const prioritizedSponsors = sponsors.filter((sponsor) => {
    const acf = sponsor.acf ?? {};
    return acf.sponsor?.[0]?.prioritized === true;
  });

  const nonPrioritizedSponsors = sponsors.filter((sponsor) => {
    const acf = sponsor.acf ?? {};
    return acf.sponsor?.[0]?.prioritized !== true;
  });

  return (
    <>
      <Header header="Sponsors" />
      <DarkContainer>
        <div className={styles["card-wrapper"]}>
          {prioritizedSponsors.map((sponsor, index) => {
            const acf = sponsor.acf ?? {};
            const sponsorImage = acf.sponsor?.[0]?.sponsor_image ?? "";
            const sponsorName = acf.sponsor?.[0]?.sponsor_name ?? "";
            const sponsorDescription =
              acf.sponsor?.[0]?.sponsor_description ?? "";

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

          {nonPrioritizedSponsors.map((sponsor, index) => {
            const acf = sponsor.acf ?? {};
            const sponsorImage = acf.sponsor?.[0]?.sponsor_image ?? "";
            const sponsorName = acf.sponsor?.[0]?.sponsor_name ?? "";
            const sponsorDescription =
              acf.sponsor?.[0]?.sponsor_description ?? "";

            return (
              <SmallCard
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
      <SponsorUsSection data={sponsorUsSection} />
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

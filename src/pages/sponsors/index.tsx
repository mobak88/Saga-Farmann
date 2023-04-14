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
  return (
    <>
      <Header header="Sponsors" />
      <DarkContainer>
        <div className={styles["cards-container"]}>
          <div className={styles["big-cards-wrapper"]}>
            {sponsors
              .filter((sponsor) => sponsor?.acf?.sponsor?.[0]?.prioritized)
              .map((sponsor, index) => (
                <BigCard
                  key={index}
                  sponsor_image={
                    sponsor?.acf?.sponsor?.[0]?.sponsor_image ?? ""
                  }
                  sponsor_name={sponsor?.acf?.sponsor?.[0]?.sponsor_name ?? ""}
                  sponsor_description={
                    sponsor?.acf?.sponsor?.[0]?.sponsor_description ?? ""
                  }
                  sponsor_link="Sponsor Link"
                />
              ))}
          </div>
          <div className={styles["small-cards-wrapper"]}>
            {sponsors
              .filter((sponsor) => !sponsor?.acf?.sponsor?.[0]?.prioritized)
              .map((sponsor, index) => (
                <SmallCard
                  key={index}
                  sponsor_image={
                    sponsor?.acf?.sponsor?.[0]?.sponsor_image ?? ""
                  }
                  sponsor_name={sponsor?.acf?.sponsor?.[0]?.sponsor_name ?? ""}
                  sponsor_description={
                    sponsor?.acf?.sponsor?.[0]?.sponsor_description ?? ""
                  }
                  sponsor_link="Sponsor Link"
                />
              ))}
          </div>
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

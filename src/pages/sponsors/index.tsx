import React from "react";
import { GetStaticProps } from "next";
import styles from "./sponsorPage.module.css";
import Header from "@/components/header/Header";
import BigCard from "@/components/cards/sponsorCards/BigCard";
import SmallCard from "@/components/cards/sponsorCards/SmallCard";
import DarkContainer from "@/components/containers/darkContainer/DarkContainer";
import { SponsorUsSectionInterface } from "@/components/sponsorUsSection/interfaces";
import SponsorUsSection from "@/components/sponsorUsSection/SponsorUsSection";
import API_ENDPOINTS from "@/endpoints/endpoints";

interface Sponsor {
  title: { rendered: string };
  acf: {
    sponsor: Array<{
      prioritized: boolean;
      sponsor_image: {
        url: string;
      };
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
                    sponsor?.acf.sponsor?.[0].sponsor_image.url ?? ""
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
                    sponsor?.acf.sponsor?.[0].sponsor_image.url ?? ""
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
  const sponsorUsData = {
    sponsor_us_heading: sponsorUsSection.sponsor_us_heading,
    sponsor_us_first_image: sponsorUsSection.sponsor_us_first_image.url,
    sponsor_us_first_text: sponsorUsSection.sponsor_us_first_text,
    sponsor_us_second_image: sponsorUsSection.sponsor_us_second_image.url,
    sponsor_us_card: sponsorUsSection.sponsor_us_card,
  };

  return {
    props: {
      sponsors,
      sponsorUsSection: sponsorUsData,
    },
    revalidate: 1,
  };
};
export default SponsorPage;

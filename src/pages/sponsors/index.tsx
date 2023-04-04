import BigCard from "@/components/cards/sponsorCards/BigCard";
import DarkContainer from "@/components/containers/darkContainer/DarkContainer";
import Header from "@/components/header/Header";
import React from "react";

const SponsorPage = () => {
  return (
    <>
      <Header header="Sponsors" />
      <DarkContainer>
        <BigCard
          sponsor_image="sponsor_image"
          sponsor_name="sponsor_name"
          sponsor_description="sponsor_description"
          sponsor_link="sponsor_link"
        />
      </DarkContainer>
    </>
  );
};

export default SponsorPage;

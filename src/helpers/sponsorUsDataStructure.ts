interface SponsorUsDataStructureInterface {
  sponsor_us_heading: string;
  sponsor_us_first_image: {
    url: string;
  };
  sponsor_us_first_text: string;
  sponsor_us_second_image: {
    url: string;
  };
  sponsor_us_card: {
    sponsor_us_card_heading: string;
    sponsor_us_card_text: string;
  };
}

export const sponsorUsDataStructure = (
  data: SponsorUsDataStructureInterface
) => {
  return {
    sponsor_us_heading: data.sponsor_us_heading,
    sponsor_us_first_image: data.sponsor_us_first_image.url,
    sponsor_us_first_text: data.sponsor_us_first_text,
    sponsor_us_second_image: data.sponsor_us_second_image.url,
    sponsor_us_card: data.sponsor_us_card,
  };
};

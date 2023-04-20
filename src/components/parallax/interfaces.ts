export interface JourneyComponentProps {
  i: number;
  data: ApiProps;
}

export interface ApiProps {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    dates: {
      date_from: string;
      date_to: string;
    };
    stage_number: string;
    stage: {
      stage_images: {
        stage_image: {
          url: string;
          link: string;
          width: number;
          height: number;
          sizes: {
            large: string;
            "large-width": number;
            "large-height": number;
          };
        };
      }[];
      stage_heading: string;
      stage_text_area: {
        stage_text: string;
      }[];
    }[];
    next_year: boolean;
  };
}

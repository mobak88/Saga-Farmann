export interface SingleStageApiProps {
  id: number;
  title: { rendered: string };
  acf: {
    coordinates: {
      long: string;
      lat: string;
    };
    stage_number: number;
    stage: [
      {
        stage_text_area: [{ stage_text: string }];
        stage_images: [{ stage_image: false | { url: string } }];
      }
    ];
    stages_blogs: [{ stage_blogs: string }];
    stage_crews: number;
    current_destination: boolean;
    next_year: boolean;
  };
}
export interface SingleDestinationApiProps {
  id: number;
  title: { rendered: string };
  acf: {
    destination_coordinates: {
      destination_long: string;
      destination_lat: string;
    };
    destination_number: number;
    destination_text_fields: [
      {
        destination_text: [{ stage_text: string }];
      }
    ];
    next_year_destination: boolean;
    destination_blogs: [{ destination_blog: string }];
    destination_crew: number;
    destination_images: [{ destination_image: false | { url: string } }];
  };
}

export interface SingleStageProps {
  id: number;
  title: string;
  coordinates: {
    long: string;
    lat: string;
  };
  number: number;
  text_area: string;
  current: boolean;
  next_year: boolean;
  blogs: [{ blog: string }];
  crew: number;
  image: false | string;
}

export interface MapProps {
  stages: SingleStageProps[];
  destinations: SingleStageProps[];
}

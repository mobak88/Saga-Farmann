export interface VoyageComponentProps {
  data: VoyageProps;
  i: number;
}

export interface VoyageProps {
  voyage: {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
      rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
      protected: boolean;
    };
    featured_media: number;
    template: string;
    categories: any[];
    acf: {
      dates: {
        date_from: string;
        date_to: string;
      };
      coordinates: {
        long: string;
        lat: string;
      };
      stage_number: string;
      stage: {
        stage_images: {
          stage_image: {
            sizes: {
              large: string;
              "large-width": number;
              "large-height": number;
            };
            alt: string;
          };
        }[];
        stage_heading: string;
        stage_text_area: {
          stage_text: string;
        }[];
      }[];
      stage_category: number;
      current_destination: boolean;
      next_year: boolean;
      stages_blogs: boolean;
      stage_crews: boolean;
      stage_journey_map: {
        stages_journey_map_image: {
          sizes: {
            large: string;
            "large-width": number;
            "large-height": number;
          };
          alt: string;
        };

        stages_journey_map_heading: string;
        stages_journey_map_texts: {
          stages_journey_map_text: string;
        }[];
      }[];
      journey_text_side: string;
    };
  }[];
}

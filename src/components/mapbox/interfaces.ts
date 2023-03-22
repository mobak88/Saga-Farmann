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
      }
    ];
    current_destination: boolean;
  };
}

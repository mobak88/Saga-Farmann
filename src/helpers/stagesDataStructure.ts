import { SingleStageApiProps } from "@/components/mapbox/interfaces";

export const stagesDataStructure = (data: SingleStageApiProps[]) => {
  return data.map((data: SingleStageApiProps) => {
    return {
      id: data.id,
      title: data.title.rendered,
      coordinates: {
        long: data.acf.coordinates.long,
        lat: data.acf.coordinates.lat,
      },
      number: data.acf.stage_number,
      text_area: data.acf.stage[0].stage_text_area[0].stage_text,
      current: data.acf.current_destination,
      next_year: data.acf.next_year,
      image: data.acf.stage[0].stage_images[0].stage_image
        ? data.acf.stage[0].stage_images[0].stage_image.url
        : data.acf.stage[0].stage_images[0].stage_image,
    };
  });
};

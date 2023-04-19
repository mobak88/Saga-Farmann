import { SingleDestinationApiProps } from "@/components/mapbox/interfaces";

export const destinationsDataStructure = (
  data: SingleDestinationApiProps[]
) => {
  return data.map((destination: SingleDestinationApiProps) => {
    return {
      id: destination.id,
      title: destination.title.rendered,
      coordinates: {
        long: destination.acf.destination_coordinates.destination_long,
        lat: destination.acf.destination_coordinates.destination_lat,
      },
      number: destination.acf.destination_number,
      text_area: destination.acf.destination_text_fields[0].destination_text,
      next_year: destination.acf.next_year_destination,
      blogs: Array.isArray(destination.acf.destination_blogs)
        ? destination.acf.destination_blogs.map((blog) => {
            return { blog: blog.destination_blog };
          })
        : false,
      crew: destination.acf.destination_crew,
      image: destination.acf.destination_images[0].destination_image
        ? destination.acf.destination_images[0].destination_image.url
        : destination.acf.destination_images[0].destination_image,
    };
  });
};

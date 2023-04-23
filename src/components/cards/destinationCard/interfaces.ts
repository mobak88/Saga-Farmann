export interface Destinations {
  id: number;
  title: DestinationTitle;
  acf: {
    destination_heading: string;
    destination_text_fields: DestinationTextFields[];
    destination_description: string;
    destination_images: DestinationImage[];
    next_year_destination: boolean;
    destination_number: string;
  };
}

interface DestinationTitle {
  rendered: string;
}

interface DestinationTextFields {
  destination_text: string;
}

interface DestinationImage {
  destination_image: Image;
  image: string;
}

export interface Image {
  id: number;
  alt: string;
  link: string;
  url: string;
  sizes: ImageSize;
}

interface ImageSize {
  thumbnail: string;
  thumbnail_width: number;
  thumbnail_height: number;
  medium: string;
  medium_width: number;
  medium_height: number;
  large: string;
  large_width: number;
  large_height: number;
}

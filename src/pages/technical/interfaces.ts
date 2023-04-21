export interface TechnicalInterface {
  title: { rendered: string };
  acf: {
    first_section_heading: string;
    first_section_texts: [{ first_section_text: string }];
    first_section_image: string;
    second_section_heading: string;
    second_section_texts: [{ second_section_text: string }];
    second_section_image_one: string;
    second_section_image_two: string;
    second_section_image_three: string;
    third_section_heading: string;
    third_section_texts: [{ third_section_text: string }];
    third_section_image_one: string;
    third_section_image_two: string;
    fourth_section_heading: string;
    fourth_section_texts: [{ fourth_section_text: string }];
    fourth_section_image: string;
  };
}

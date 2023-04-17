export interface GridSections {
  first_block: {
    first_block_heading: string;
    first_block_text: string;
  };
  second_block: string;
  third_block: {
    third_block_heading: string;
    third_block_text: string;
  };
  fourth_block: {
    fourth_block_heading: string;
    fourth_block_text: string;
  };
  fifth_block: string;
  sixth_block: string;
  seventh_block: {
    seventh_block_heading: string;
    seventh_block_text: string;
  };
  eighth_block: {
    eighth_block_heading: string;
    eighth_block_text: string;
  };
}

export interface GridSectionDataStructureInterface {
  first_block: {
    first_block_heading: string;
    first_block_text: string;
  };
  second_block: { url: string };
  third_block: {
    third_block_heading: string;
    third_block_text: string;
  };
  fourth_block: {
    fourth_block_heading: string;
    fourth_block_text: string;
  };
  fifth_block: { url: string };
  sixth_block: { url: string };
  seventh_block: {
    seventh_block_heading: string;
    seventh_block_text: string;
  };
  eighth_block: {
    eighth_block_heading: string;
    eighth_block_text: string;
  };
}

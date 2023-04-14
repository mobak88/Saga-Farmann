import { GridSectionDataStructureInterface } from "@/components/gridImagesAndText/interfaces";

export const gridSectionDataStructure = (
  data: GridSectionDataStructureInterface
) => {
  return {
    first_block: data.first_block,
    second_block: data.second_block.url,
    third_block: data.third_block,
    fourth_block: data.fourth_block,
    fifth_block: data.fifth_block.url,
    sixth_block: data.sixth_block.url,
    seventh_block: data.seventh_block,
    eighth_block: data.eighth_block,
  };
};

export interface PressArchiveInterface {
  acf: {
    press_archive: PressArchive[];
  };
}

export interface PressArchive {
  press_heading: string[];
  press_text_fields: string[];
  press_images: [{ press_image: string }];
}

export interface PressArchiveInterface {
  date: string;
  acf: {
    press_archive: PressArchive;
  };
}

export interface PressArchive {
  press_heading: string;
  press_text_fields: PressTextFields[];
  press_images: [{ press_image: { url: string; alt: string } }];
}

export interface PressTextFields {
  press_text_field: string;
}

export interface PressImage {
  press_image: { url: string; id: number };
}

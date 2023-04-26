import { NextApiRequest, NextApiResponse } from "next";

interface PressImage {
  press_image: {
    url: string;
    alt: string;
  };
}

interface PressArchive {
  press_heading: string;
  press_text_fields: string;
  press_images: PressImage[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PressArchive[]>
) {
  const response = await fetch(
    "https://dev.sagafarmann.com/wp-json/acf/v3/options/options"
  );
  const data = await response.json();
  const pressArchive = data.acf.press_archive as PressArchive[];

  const updatedPressArchive = pressArchive.map((pressItem) => {
    const press_images = pressItem.press_images.map((image) => ({
      ...image,
      press_image: {
        ...image.press_image,
        url: `https://your-proxy-server.com/?url=${encodeURIComponent(
          image.press_image.url
        )}`,
      },
    }));

    return {
      ...pressItem,
      press_images,
    };
  });

  res.status(200).json(updatedPressArchive);
}

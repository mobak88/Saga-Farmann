import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  try {
    const response = await fetch(url as string);
    const data = await response.text();

    res.status(200).send(data);
  } catch (error) {
    console.error(error);

    res.status(500).send((error as Error).message);
  }
}

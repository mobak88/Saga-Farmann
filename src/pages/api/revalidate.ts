import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let slug = req.query.slug;
  let path = "";

  if (req.query.type === "post") {
    path = "/blog" + slug;
  } else if (req.query.type === "page") {
    path = "/" + slug;
  }

  if (req.query.secret !== process.env.REVALIDATION_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.revalidate(path);
    return res.json({ revalidated: true, query: req.query });
  } catch (error) {
    return res
      .status(500)
      .send((error as { message?: string }).message ?? "Unknown error");
  }
}

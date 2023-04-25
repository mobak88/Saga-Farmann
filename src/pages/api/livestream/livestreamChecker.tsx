import type { NextApiRequest, NextApiResponse } from "next";

type LivestreamStatus = {
  isOnline: Boolean;
};

export default async function LivestreamStatus(
  req: NextApiRequest /*Note: The body of NextApiRequest is any because the client may include any payload. You should validate the type/shape of the body at runtime before using it.*/,
  res: NextApiResponse<LivestreamStatus>
) {
  const response = await fetch(
    `https://www.youtube.com/embed/live_stream?channel=${process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID}`
  );
  const data = await response.text();

  if (!data.includes(`"ERROR`)) {
    res.status(200).json({
      isOnline: true,
    });
  } else {
    res.status(200).json({
      isOnline: false,
    });
  }
}

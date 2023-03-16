import type { NextApiRequest, NextApiResponse } from "next";

type LivestreamStatus = {
  isOnline: Boolean;
};

export default async function LivestreamStatus(
  req: NextApiRequest /*Note: The body of NextApiRequest is any because the client may include any payload. You should validate the type/shape of the body at runtime before using it.*/,
  res: NextApiResponse<LivestreamStatus>
) {
  const response = await fetch(
    "https://www.youtube.com/embed/live_stream?channel=UCrOw0E3-URvN_y54hX9Jg6Q"
  );
  const data = await response.text();

  if (data.includes(`"ERROR`)) {
    console.log("Livestream is offline");
    res.status(200).json({ isOnline: false });
  } else {
    console.log("Livestream is online");
    res.status(200).json({ isOnline: true });
  }
}

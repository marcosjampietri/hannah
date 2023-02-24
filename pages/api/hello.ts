// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const KaviyoSdk = require("klaviyo-api");

KaviyoSdk.ConfigWrapper(process.env["KLAVIYO_PRIVATE_KEY"]);

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  var profileId = "01GR6E43F82CHVYQDXVK4NM3F0";
  var opts = {};

  try {
    const response = await KaviyoSdk.Profiles.getProfile(profileId, opts);
    console.log(response);
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
  }
}

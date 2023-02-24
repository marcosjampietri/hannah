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
  const { list_id, name, email, phone_number } = req.body;

  // /api/profiles?filter=equals(email,"johnsmith@domain.com")

  try {
    const response = await KaviyoSdk.Profiles.getProfiles({
      filter: `equals(email,"${email}")`,
    });

    // first profile with the matching email
    const profile = await response.body.data[0];

    //profile structure
    // {
    //   type: 'profile',
    //   id: '01GST5WZMC954JA262KS6AX0QZ',
    //   attributes: {
    //     email: 'soundtoart@gmail.com',
    //     phone_number: '+447541505202',
    //     external_id: null,
    //     anonymous_id: null,
    //     first_name: null,
    //     last_name: null,
    //     organization: null,
    //     title: null,
    //     image: null,
    //     created: '2023-02-21T14:26:35+00:00',
    //     updated: '2023-02-21T14:26:35+00:00',
    //     last_event_date: '2023-02-21T14:26:35+00:00',
    //     location: [Object],
    //     properties: [Object]
    //   },
    //   links: {
    //     self: 'https://a.klaviyo.com/api/profiles/01GST5WZMC954JA262KS6AX0QZ/'
    //   },
    //   relationships: { lists: [Object], segments: [Object] }
    // }

    console.log(profile);
    res.status(200).json(profile);
  } catch (e) {
    console.log(e);
  }
}

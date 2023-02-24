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
  try {
    // await KaviyoSdk.Profiles.createProfile({
    //   data: {
    //     type: "profile",
    //     attributes: { email, first_name: name },
    //   },
    // });

    // const id = response.body.data.id;

    //Example of complete object for subscribing profiles
    // const exemple = await KaviyoSdk.Profiles.subscribeProfiles({
    //   data: {
    //     type: "profile-subscription-bulk-create-job",
    //     attributes: {
    //       list_id: "Y6nRLr",
    //       custom_source: "Marketing Event", //A custom method detail or source to store on the consent records.
    //       subscriptions: [
    //         {
    //           channels: { // When provided, this will provide consent for the indicated message types on the specified channels. If omitted, we will subscribe the profile to all message types on the channels corresponding to the provided identifiers.
    //             email: ["MARKETING"],
    //             sms: ["MARKETING"],
    //           },
    //           email: "matt-kemp@KaviyoSdk-demo.com",
    //           phone_number: "+15005550006",
    //           profile_id: "01GDDKASAP8TKDDA2GRZDSVP4H",
    //         },
    //       ],
    //     },
    //   },
    // });

    const response = await KaviyoSdk.Profiles.subscribeProfiles({
      data: {
        type: "profile-subscription-bulk-create-job",
        attributes: { subscriptions: [{ email, phone_number }], list_id },
      },
    });

    // console.log(response);
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
  }
}

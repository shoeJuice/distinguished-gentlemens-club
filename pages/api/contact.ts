// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import {
  addDoc,
  query,
  collection,
  serverTimestamp,
  FieldValue,
} from "firebase/firestore";
import { firestore } from "../../config/firebaseConfig";

type ContactData = {
  "First Name": string;
  "Last Name": string;
  "Email Address": string;
  "Phone #": string;
  Message: string;
  timestamp?: FieldValue;
};

const cors = Cors({
  methods: ["POST"],
  origin: "http://localhost:3000",
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      console.log("Running");
      return resolve(result);
    });
  });
}

export default async function fetchAllContacts(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await runMiddleware(req, res, cors);
  const contact_list = collection(firestore, "contact_list");
  const { method } = req;

  const postDocument = async (data: ContactData) => {
    try {
      let formData = data;
      formData.timestamp = serverTimestamp();
      const docRef = await addDoc(contact_list, data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  };

  switch (method) {
    case "POST":
      await postDocument(req.body)
        .then(() => {
          return res.status(200).end(JSON.stringify({ message: "success" }));
        })
        .catch((e) => {
          return res
            .status(500)
            .end(JSON.stringify({ message: `error: ${e}` }));
        });
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}

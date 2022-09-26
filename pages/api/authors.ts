// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import {
  addDoc,
  query,
  collection,
  serverTimestamp,
  FieldValue,
  getDocs,
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
  methods: ["GET"],
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

export default async function fetchAllAuthors(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await runMiddleware(req, res, cors);
  const author_list = collection(firestore, "author_list");
  const allAuthors = query(author_list);
  const { method } = req;

  switch (method) {
    case "GET":
      const authors = await getDocs(allAuthors)
        .then(({docs}) => {
            let result = docs.map((author) => {
                let data = JSON.stringify(author.data())
                return JSON.parse(data);
            })
          res.status(200).json(result);
        })
        .catch((e) => {
          console.log(e);
          res.status(500).end(`Error: ${e}`);
        });
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

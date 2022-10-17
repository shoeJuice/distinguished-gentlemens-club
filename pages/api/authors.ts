// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { NextRequest } from "next/server";
import Cors from "cors";
import {
  addDoc,
  query,
  collection,
  serverTimestamp,
  FieldValue,
  getDocs,
} from "firebase/firestore";
import { firestore, getFirebaseAdmin } from "../../config/firebaseConfig";
import rateLimit from "express-rate-limit";

const cors = Cors({
  methods: ["GET", "POST"],
  origin: "http://localhost:3000",
});

const requestIP = (req : any) => {
  const userIP = req.ip || req.headers["x-forwarded-for"] || req.headers["x-real-ip"];
  console.log(userIP);
  return userIP;
};

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
      let clientIP = requestIP(req);
      rateLimit({
        keyGenerator: (req, res) => req.ip,
        windowMs: 100,
        max: 5,
        handler: (req, res) => res.status(429).send("Rate Limiter working"),
      });
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
        .then(({ docs }) => {
          let result = docs.map((author) => {
            let data = JSON.stringify(author.data());
            return JSON.parse(data);
          });
          res.status(200).json(result);
        })
        .catch((e) => {
          console.log(e);
          res.status(500).end(`Error: ${e}`);
        });
      break;

    case "POST":
      if (req.headers["authorization"]) {
        const token = req.headers["authorization"].split(" ")[1];
        const admin = getFirebaseAdmin();
        const auth = admin?.auth();
        const decodedToken = await auth
          ?.verifyIdToken(token ? token : "", true)
          .then((decodedToken) => {
            console.log("Token verified", decodedToken);
          })
          .catch((e) => {
            console.log("Error:", e);
            res.status(401).end(`Error: ${e}`);
          });
      } else {
        res.status(401).end(`Error: No token provided`);
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { NextRequest } from "next/server";
import Cors from "cors";
import {
  trackRequest,
  rejectRequest,
} from "../../modules/admin/security/utils";
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
import slowDown from "express-slow-down";

const cors = Cors({
  origin: false,
  methods: ["GET", "POST"],
});

const limiter = rateLimit({
  keyGenerator: (req, res) => {
    let cookie = req.cookies["Authentication"];
    const token = cookie?.split(" ")[1];
    console.log("Token", token);
    return token;
  },
  windowMs: 60 * 1000, // 1 minute
  max: 10, // limit each IP to 10 requests per windowMs
  handler: async (req: any, res, options: any) => {
    await trackRequest(req)
      .catch((err) => console.log(err))
      .then(() => {
        res
          .status(429)
          .send(
            "Too many requests from this IP, please try again after 1 minute"
          );
      });
  },
});

const slowdown = slowDown({
  windowMs: 60 * 1000,
  delayAfter: Math.round(10 / 2),
  delayMs: 1000,
});

function applyMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      } else {
        return resolve(result);
      }
    });
  });
}

export default async function fetchAllAuthors(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await rejectRequest(req, res);
  const middlewares = [cors, limiter, slowdown];
  await Promise.all(
    middlewares.map((middleware) => applyMiddleware(req, res, middleware))
  );

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

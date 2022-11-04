import {
  addDoc,
  getDocs,
  updateDoc,
  where,
  query,
  collection,
  serverTimestamp,
  FieldValue,
} from "firebase/firestore";
import { firestore } from "../../../config/firebaseConfig";
import requestIp from "request-ip";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

/**
 * Add identifier to list of limited users
 * @param req
 * @param res
 */
async function trackRequest(req: NextApiRequest) {

  if(!req.cookies.Authentication){
    req.cookies.Authentication = `bearer ${uuidv4()}`;
  }

  const id = req.cookies.Authentication.split(" ")[1];
  const data = {
    id,
    ip: requestIp.getClientIp(req),
    timestamp: serverTimestamp(),
    count: 0,
  };
  console.log(data);

  //Query for doc containing user id or ip
  const q = query(collection(firestore, "request_list"), where("id", "==", id));
  await getDocs(q)
    .then((doc) => {
      if (doc.empty) {
        //Add doc to request_list
        addDoc(collection(firestore, "request_list"), data);
      } else {
        //Update doc in request_list
        doc.forEach((doc) => {
          updateDoc(doc.ref, { ...data, count: doc.data().count + 1 });
        });
      }
    })
    .catch((err) => {
      return err;
    });
}

/**
 *
 * Check request against backend to verify if user is banned
 *
 * @param req
 * @param res
 */
async function rejectRequest(req: NextApiRequest, res: NextApiResponse) {
  const id = req.cookies.Authentication?.split(" ")[1];
  const q = req.cookies
    ? query(collection(firestore, "request_list"), where("id", "==", id))
    : query(collection(firestore, "request_list"), where("ip", "==", requestIp.getClientIp(req)));
  await getDocs(q)
    .then((doc) => {
      if (doc.empty) {
        console.log("Request valid");
      } else {
        doc.forEach((doc) => {
          if (doc.data().count > 5) {
            res.status(403).json({
              message:
                "You have made too many requests and the server has permanently blocked you. Contact the Distinguished Gentlemen club if you believe this is a mistake.",
            });
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export { trackRequest, rejectRequest };

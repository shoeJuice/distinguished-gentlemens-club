import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/**
 * Main firebase app instance
 */
const firebaseApp = initializeApp(
  JSON.parse(JSON.stringify(process.env.NEXT_PUBLIC_FIREBASE_CONFIG))
);

/**
 * Main firestore instance
 */
const firestore = getFirestore(firebaseApp);

export { firebaseApp, firestore };
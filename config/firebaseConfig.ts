import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


/**
 * Main firebase app instance
 */
//@ts-ignore
const firebaseApp = initializeApp(JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG));

/**
 * Main firestore instance
 */
const firestore = getFirestore(firebaseApp);

export { firebaseApp, firestore };

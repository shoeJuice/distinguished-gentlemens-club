import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import * as FirebaseAdmin from "firebase-admin";

/**
 * Main firebase app instance
 */
//@ts-ignore ignoring since env has FIREBASE_CONFIG
const firebaseApp = initializeApp(JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG));

/**
 * Main firestore instance
 */
const firestore = getFirestore(firebaseApp);

/**
 * Main Firebase admin instance
 */
const getFirebaseAdmin = () => {
    if (!FirebaseAdmin.apps.length) {
        const admin = FirebaseAdmin.initializeApp({
        credential: FirebaseAdmin.credential.cert(
            //@ts-ignore ignoring since env has FIREBASE_ADMIN_CONFIG
            JSON.parse(process.env.FIREBASE_ADMIN_CONFIG)
        ),
        });
        return admin;
    }
    return FirebaseAdmin.apps[0];
}

export { firebaseApp, firestore, getFirebaseAdmin };

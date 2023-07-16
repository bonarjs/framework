import admin from "firebase-admin"
import { initializeApp } from "firebase-admin/app"
import { Auth, getAuth } from "firebase-admin/auth"
import { Firestore, getFirestore } from "firebase-admin/firestore"

// Create Server-Side Instance of Firebase
export default function initializeFirebaseServer(): {
  app: any
  db: Firestore
  auth: Auth
} {
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
  const privateKey = (process.env.FIREBASE_PRIVATE_KEY as string).replace(
    /\\n/g,
    "\n"
  );
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  const databaseURL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL

  let app



  if (admin.apps.length === 0) {
    var serviceAccount = require("serviceAccountKey.json")
    app = initializeApp({
      databaseURL,
      credential : admin.credential.cert(serviceAccount)
      // credential: admin.credential.cert({
      //   clientEmail,
      //   privateKey,
      //   projectId,
      // })
    })
  }

  const db = getFirestore()
  const auth = getAuth()

  return {
    app,
    db,
    auth,
  };
}
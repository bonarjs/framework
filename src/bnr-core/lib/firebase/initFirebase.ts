import { FirebaseApp, getApps, initializeApp } from "firebase/app"
import { Auth, getAuth } from "firebase/auth"
import { Firestore, getFirestore } from "firebase/firestore"

import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'

// Create Client-Side Instance of Firebase
export default function initializeFirebaseClient(): {
  app: FirebaseApp;
  // db: Firestore;
  // auth: Auth;
} {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
  }

  // if (process.env.NEXT_PUBLIC_APP_DEV) {

  //   const token = process.env.NEXT_PUBLIC_FIREBASE_APPCHECK_DEBUG_TOKEN
  
  //   Object.assign(window, {
  //     FIREBASE_APPCHECK_DEBUG_TOKEN: token,
  //   })
  // }

  // const appCheck = initializeAppCheck(firebaseApp, {
  //   provider: new ReCaptchaV3Provider((process.env.NEXT_PUBLIC_FIREBASE_APP_CHECK as string)),
  
  //   // Optional argument. If true, the SDK automatically refreshes App Check
  //   // tokens as needed.
  //   isTokenAutoRefreshEnabled: true
  // })

  const firebaseApp =
  // create a new app only if it doesn't already exists
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

  const app = firebaseApp
  // const db = getFirestore(firebaseApp)
  // const auth = getAuth(firebaseApp)

  return {
    app,
    // db,
    // auth,
  }
}
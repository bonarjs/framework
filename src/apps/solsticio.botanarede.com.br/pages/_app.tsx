import '../styles/globals.css'
import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from 'src/@core/config/createEmotionCache'
import Script from 'next/script'
import type { ReactElement, ReactNode } from 'react'
import type { NextComponentType, NextPageContext } from 'next/dist/shared/lib/utils'

// ** Firebase imports
import initializeFirebaseClient from 'src/@lib/firebase/initFirebase'
import {
  initializeAuth,
  indexedDBLocalPersistence,
  connectAuthEmulator,
  inMemoryPersistence,
} from 'firebase/auth'
import { FirebaseAppProvider, AuthProvider } from 'reactfire'
import FirebaseAppCheckProvider from 'src/@lib/firebase/FirebaseAppCheckProvider'
import { isBrowser } from 'src/@lib/generic/isBrowser'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'

import { ConfirmProvider } from "material-ui-confirm";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

// ** Extend App Props with Emotion
type MyAppProps = AppProps & {
  Component: MyNextPage
  emotionCache: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // we initialize the firebase app
  // using the configuration that we defined above
  const firebase = initializeFirebaseClient()
  const firebaseApp = firebase.app

  // make sure we're not using IndexedDB when SSR
  // as it is only supported on browser environments
  const persistence = isBrowser()
    ? indexedDBLocalPersistence
    : inMemoryPersistence;

  // const persistence = indexedDBLocalPersistence

  const auth = initializeAuth(firebaseApp, { persistence });

  const emulatorConfiguration = {
    emulator: process.env.NEXT_PUBLIC_EMULATOR === 'true'
  }

  if (emulatorConfiguration.emulator && !("emulator" in auth.config)) {
    // we can get the host by
    // combining the local emulator host with the Auth port
    const authEmulator = getAuthEmulatorHost()
    const firestoreEmulatorHost = (process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_HOST as string)
    // const firestoreEmulatorPort = process.env.NEXT_PUBLIC_FIREBASE_FIRESTORE_EMULATOR_PORT]
    const firestoreEmulatorPort = 8080
    connectAuthEmulator(auth, authEmulator)
    connectFirestoreEmulator(
      getFirestore(),
      firestoreEmulatorHost,
      firestoreEmulatorPort
    )
  }

  return (
      <FirebaseAppProvider firebaseApp={firebaseApp}>
        <FirebaseAppCheckProvider>
          <AuthProvider sdk={auth}>
              <CacheProvider value={emotionCache}>
                <ConfirmProvider>
                      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

                      <Script id="bnr-google-analytics" strategy="lazyOnload">
                          {`
                              window.dataLayer = window.dataLayer || [];
                              function gtag(){dataLayer.push(arguments);}
                              gtag('js', new Date());
                              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                              page_path: window.location.pathname,
                              });
                          `}
                      </Script>
                      <Head>
                        <meta name="viewport" content="initial-scale=1, width=device-width" />
                      </Head>
                      <React.Fragment>
                        <Component {...pageProps} />
                      </React.Fragment>
                </ConfirmProvider>
              </CacheProvider>
          </AuthProvider>
        </FirebaseAppCheckProvider>
      </FirebaseAppProvider>
  )
}

function getAuthEmulatorHost() {
  const host = process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_HOST;
  const port = process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_PORT;

  return ["http://", host, ":", port].join("");
}
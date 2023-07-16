import { AppCheckProvider, useFirebaseApp } from 'reactfire'
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'
// import { isBrowser } from 'src/lib/generic/isBrowser'

// const FirebaseAppCheckProvider: React.FCC = ({ children }) => {
    const FirebaseAppCheckProvider = ({ children } : any) => {

    const pageConfiguration = {
        emulator: process.env.NEXT_PUBLIC_EMULATOR === 'true',
        appCheckDebugToken: process.env.NEXT_PUBLIC_APP_DEV === 'true'
    }

    const siteKey = 
        process.env.NEXT_PUBLIC_FIREBASE_APP_CHECK

    const app = useFirebaseApp()

    if (!siteKey || !isBrowser() || pageConfiguration.emulator) {
        return <>{children}</>
    }

    // if (pageConfiguration.appCheckDebugToken) {
        // attachAppCheckDebugToken()
    // }

    const provider = 
        new ReCaptchaV3Provider(siteKey)

    const sdk = initializeAppCheck(app, {
        provider,
        isTokenAutoRefreshEnabled: true,
    })

    return <AppCheckProvider sdk={sdk}>{children}</AppCheckProvider>
}

export default FirebaseAppCheckProvider

function attachAppCheckDebugToken() {
    const token =
        process.env.NEXT_PUBLIC_FIREBASE_APPCHECK_DEBUG_TOKEN
  
    Object.assign(window, {
        FIREBASE_APPCHECK_DEBUG_TOKEN: token,
    })
}

function isBrowser() {
    return typeof window !== "undefined";
}
  
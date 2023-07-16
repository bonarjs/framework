import Head from 'next/head'

import UserLayout from 'src/@core/layouts/UserLayout'
import { useEffect, useState } from 'react'
import BnrLoadingScreen from 'src/@shared/layouts/BnrLoadingScreen'

import { useAuth, useSigninCheck } from 'reactfire'
import { useAuthState } from 'react-firebase-hooks/auth'

import GuardedPage from 'src/@core/context/GuardedPage'

import { useRouter } from "next/router"

import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Contexts
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// import SignOutButton from "../components/SignOutButton"

export default function ContainerAdmin({ title, children }) {
    const [BnrIsLoading, setIsLoading] = useState(true)
    const auth = useAuth()
    const [ user ] = useAuthState(auth)

    const router = useRouter()

    const { data: signInCheckResult } = useSigninCheck()
  
    useEffect(() => {
      setIsLoading(true)

      if (signInCheckResult?.user === null) {
        router.push("/login")
      }
  
      async function handlePageLoader() {
          if (user) {
            setIsLoading(false)
          }
      }
  
      handlePageLoader()
    }, [user, signInCheckResult, setIsLoading, router])

    const getLayout = ((page: any) => <>{page}</>)

    // const body = document.querySelector('body');
    // body?.classList.remove('bnr-container-body');

    return (
        <>
          {BnrIsLoading ? (
              <BnrLoadingScreen/>
          ) : (
          <>
            <Head>
               <title>Bota na Rede - Painel administrativo</title>
            </Head>
            <GuardedPage whenSignedOut="/login">
                <SettingsProvider>
                    <SettingsConsumer>
                        {({ settings }) => {
                            return <ThemeComponent settings={settings}>{getLayout(<UserLayout>{ children }</UserLayout>)}</ThemeComponent>
                        }} 
                    </SettingsConsumer>
                </SettingsProvider>
            </GuardedPage>
          </>
          )}
        </>
    )
}
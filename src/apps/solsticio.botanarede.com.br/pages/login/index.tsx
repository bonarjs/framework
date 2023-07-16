import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/router"

import { useAuth } from 'reactfire'
import { useAuthState } from 'react-firebase-hooks/auth'

import EmailPasswordSignInForm from "src/@core/layouts/EmailPasswordSignInLayout"

import BnrLoadingScreen from 'src/@shared/layouts/BnrLoadingScreen'

import Image from 'next/image'
// import imgMarca from 'public/jcalhau.botanarede.com.br/images/marca.svg'
import imgMarca from '../../public/images/marca_solsticio_pb.png'
import Link from "next/link"

const LoginPage = () => {
  const [BnrIsLoading, setIsLoading] = useState(true)
  
  const router = useRouter()
  
  const auth = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [ user, loading ] = useAuthState(auth)

  const onSignIn = useCallback( () => {
    return router.push("/admin/dashboard")
  }, [router])

  useEffect(() => {
    /* Ajuste background-color do site */
    const body = document.querySelector('body');
    body?.classList.add('bnr-container-body');

    // router.events.on('routeChangeStart', () => {
    //     setIsLoading(true)
    //     body?.classList.remove('bnr-container-body')
    // })

    setIsLoading(false)

    async function handlePageLoader() {
      if (user) {
        setIsLoading(true)
        router.push("/admin/dashboard")
      } else {
        if (loading) {
          setIsLoading(true)
        }
      }
    }

    handlePageLoader()
  }, [user,loading, setIsLoading, router])

  return (
    <>
      {BnrIsLoading ? (
          <BnrLoadingScreen/>
      ) : (
        <>
        <div className="lg:flex lg:w-full lg:h-screen md:h-screen md:flex sm:pt-10">
                <div className="md:my-auto mt-[15%] lg:w-full mx-auto flex bg-white rounded-lg shadow-lg overflow-hidden max-w-sm lg:max-w-4xl">
                        <div className="hidden lg:block lg:w-1/2 lg:w-max-1/2 bg-cover bnrBgLogin"></div>
                        <div className="w-full p-8 lg:w-1/2">
                            <h2 className="text-2xl font-semibold text-gray-700 text-center">    
                                <Link href="/">
                                    <Image className="mx-auto" src={imgMarca} alt="Ir para página inicial" width={150} height={150} />
                                </Link>
                            </h2>

                            <div>
                              <EmailPasswordSignInForm onSignIn={onSignIn} />
                            </div>
                        </div>
                    </div>
                </div>
            <div>
        </div>
      </>
      )}
    </>
  );
};

export default LoginPage;

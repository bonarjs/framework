import React, { useState } from "react"
import { Transition } from "@headlessui/react"

import Image from 'next/image'
// import imgMarcaJcalhau from '/public/images/marca_jcalhau.png'
import Link from "next/link"

import { useAuth } from 'reactfire'
import { useAuthState } from 'react-firebase-hooks/auth'

import { House, SignOut } from "phosphor-react"

import SignOutButton from "src/@core/layouts/SignOutButton"

function TemplatesHeader0() {
  const [isOpen, setIsOpen] = useState(false)

  const auth = useAuth()
  const [ user ] = useAuthState(auth)

  const titulo = process.env.NEXT_PUBLIC_BNRJC_SITE_TITULO

  return (
    <div>
      <header className="bg-bnr-cor1">
          <nav className="">
            <div className="mx-auto py-3 px-4 sm:px-6 lg:px-8 border-1 border-dashed border-white">
              <div className="flex items-center h-16 ">
                <div className="w-full flex items-center justify-between">
                  <div className="flex-shrink-0">
                    <h1 className="text-white md:text-2xl">
                        <Link href="/">{ titulo }</Link>
                    </h1>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex items-baseline space-x-1">
                      <Link
                        href="/"
                        className="text-white hover:text-white hover:bg-marca-azul px-1 py-2 rounded-md md:text-md font-medium"
                      >
                        <House className="inline" /> Home
                      </Link>

                      { user && (
                        <Link
                          href="#"
                          className="text-white hover:text-white hover:bg-marca-azul px-1 py-2 rounded-md md:text-md font-medium"
                        >
                          <SignOut className="inline" /> <SignOutButton />
                          
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="bg-marca-azul inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-marca-azul-claro focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Abrir navegação</span>
                    {!isOpen ? (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <Transition
              show={isOpen}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {(ref) => (
                <div className="md:hidden" id="mobile-menu">
                  <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                      href="/"
                      className="hover:bg-marca-azul text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Home
                    </Link>

                    { user && (
                      <Link
                        href="#"
                        className="hover:bg-marca-azul text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                        <SignOutButton />
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </Transition>
          </nav>
      </header>
    </div>
  );
}

export default TemplatesHeader0
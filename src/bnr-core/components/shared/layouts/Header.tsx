import React, { useState } from "react"
import { Transition } from "@headlessui/react"

import Image from 'next/image'
import imgMarcaJcalhau from '/public/images/marca_jcalhau.png'
import Link from "next/link"

import { useAuth } from 'reactfire'
import { useAuthState } from 'react-firebase-hooks/auth'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const auth = useAuth()
  const [ user ] = useAuthState(auth)

  return (
    <div>
      <header>
          <nav className="">
            <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image src={imgMarcaJcalhau} alt="Jean Calhau | Brand & Tech" />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <a
                        href="#"
                        className="hover:text-white hover:bg-marca-azul text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Início
                      </a>

                      <a
                        href="#"
                        className="text-gray-500  hover:bg-marca-azul hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Jornada
                      </a>

                      <a
                        href="#"
                        onClick={e => {
                          let hero = document.getElementById("bnrJcalhauConteComigo");
                          e.preventDefault();  // Stop Page Reloading
                          hero && hero.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className="text-gray-500 hover:bg-marca-azul hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Conte comigo
                      </a>

                      <a
                        href="#"
                        className="text-gray-500 hover:bg-marca-azul hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Experiência na prática
                      </a>

                      <a
                      href="#"
                      className="text-gray-500 hover:bg-marca-azul hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Clientes
                      </a>

                      <a
                      href="#"
                      className="text-gray-500 hover:bg-marca-azul hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Mande um oi
                      </a>

                      <a
                      href="#"
                      className="text-gray-500 hover:bg-marca-azul hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Blog
                      </a>

                      { user && (
                        <Link
                        href="/admin/dashboard"
                        className="text-gray-500 hover:bg-marca-azul hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Painel administrativo
                        </Link>
                      )}

                      { !user && (
                        <Link
                        href="/login"
                        className="text-gray-500 hover:bg-marca-azul hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Login
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
                    <a
                      href="#"
                      className="hover:bg-marca-azul text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Início
                    </a>

                    <a
                      href="#"
                      className="text-gray-500 hover:bg-marca-azul hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Jornada
                    </a>

                    <a
                      href="#"
                      className="text-gray-500 hover:bg-marca-azul hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Conte comigo
                    </a>

                    <a
                      href="#"
                      className="text-gray-500 hover:bg-marca-azul hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Experiência na prática
                    </a>

                    <a
                    href="#"
                    className="text-gray-500 hover:bg-marca-azul hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                    Clientes
                    </a>

                    <a
                    href="#"
                    className="text-gray-500 hover:bg-marca-azul hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                    Mande um oi
                    </a>

                    <a
                    href="#"
                    className="text-gray-500 hover:bg-marca-azul hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                    Blog
                    </a>

                    { user && (
                      <Link
                      href="/admin/dashboard"
                      className="text-gray-500 hover:bg-marca-azul hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                      Painel administrativo
                      </Link>
                    )}

                    { !user && (
                      <Link
                      href="/login"
                      className="text-gray-500 hover:bg-marca-azul hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                      Login
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

export default Header
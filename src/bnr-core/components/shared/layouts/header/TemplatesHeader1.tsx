/* React,Next.JS imports */
import React, { useEffect, useState } from "react"
import Image from 'next/image'

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

import InputMask from 'react-input-mask';

import Link from 'next/link'

import { Transition } from "@headlessui/react"

import {
    // collection,
    // getDocs,
    getFirestore, collection, getDocs,
    query, doc,
    where,
    setDoc,
    Timestamp
    // getFirestore
} from "firebase/firestore"

import initializeFirebaseClient from "src/@lib/firebase/initFirebase"
import { CircleNotch } from "phosphor-react"

import imgSolsticio from '/public/images/marca_solsticio_pb.png'

function TemplatesHeader1() {

  const [faleConoscoNome, setFaleConoscoNome] = useState('');
  const [faleConoscoTelefone, setFaleConoscoTelefone] = useState('');
  const [faleConoscoRespostaClasse, setFaleConoscoRespostaClasse] = useState('');
  const [faleConoscoRespostaMensagem, setFaleConoscoRespostaMensagem] = useState('');

  const [isSendingFaleConosco, setIsSendingFaleConosco] = useState(false);
  
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const submitData = async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setIsSendingFaleConosco(true);

      try {
          let firebaseApp = initializeFirebaseClient().app
          const db = getFirestore(firebaseApp)

          const ref =
          collection(db, 'clientes/h46vPPGUeu9Wc10yzerH/tabelas/SsM7swJqejPrzS7JGrzk/itens-tabela')
          
          const q = query(ref, where('telefone', '==', faleConoscoTelefone))

          const snapshot = await getDocs(q)
          
          if (snapshot.docs.length) {
              // throw new Error('Document Exist!');
              setFaleConoscoRespostaClasse('error')
              setFaleConoscoRespostaMensagem("Telefone já cadastrado anteriormente!")
          } else {
              
              const data = {
                  nome: faleConoscoNome,
                  telefone: faleConoscoTelefone,
                  isDelivered: false,
                  created_at: Timestamp.now()
              }

              const ref =
                  collection(db, 'clientes/h46vPPGUeu9Wc10yzerH/tabelas/SsM7swJqejPrzS7JGrzk/itens-tabela')

              const addDoc = await setDoc(doc(ref), data);

              setFaleConoscoRespostaClasse('success')
              setFaleConoscoRespostaMensagem("Mensagem enviada, aguarde o contato!")
          }

      } catch (error) {
        console.error(error);
      }

      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      setOpen(true);
      setTimeout(function(){ 
          setOpen(false);
      }, 5000);
      setFaleConoscoNome('');
      setFaleConoscoTelefone('');
      
      setIsSendingFaleConosco(false);
  };
  

  return (
        <>
          { open &&
              <div className={`bnr-css-alerta bnr-css-alerta-${faleConoscoRespostaClasse}`}>
                  <Box sx={{ width: '100%' }}>
                      <Collapse in={open}>
                          <Alert
                          action={
                              <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                  setOpen(false);
                              }}
                              >
                              <CloseIcon fontSize="inherit" />
                              </IconButton>
                          }
                          sx={{ mb: 2 }}
                          severity={faleConoscoRespostaClasse == 'success' ? 'success' : 'error'}
                          >
                          {faleConoscoRespostaMensagem}
                          </Alert>
                      </Collapse>
                  </Box>
              </div>
          }

            <nav className="">
            <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="hidden lg:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <Link href="/" className="group text-sky-600 transition duration-300">
                        Início
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"></span>
                      </Link>
                      <Link href="/servicos" className="group text-sky-600 transition duration-300">
                        Serviços
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"></span>
                      </Link>
                      <Link href="/galeria" className="group text-sky-600 transition duration-300">
                        Galeria
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"></span>
                      </Link>
                      <Link href="#" className="group text-sky-600 transition duration-300" 
                        onClick={e => {
                          // document.getElementById("bnrFormContatoSolicitadoNome").focus()
                          let hero = document.getElementById("bnrFormContatoSolicitado");
                          e.preventDefault();  // Stop Page Reloading
                          hero && hero.scrollIntoView({ behavior: 'smooth' });
                        }}>
                        Contato
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"></span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex lg:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
                <div className="lg:hidden bnr-solsticio-menu-drop" id="mobile-menu">
                  <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                      href="#"
                      className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Início
                    </Link>

                    <Link
                      href="#"
                      className="text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Serviços
                    </Link>

                    <Link
                      href="#"
                      className="text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Galeria
                    </Link>

                    <Link
                      href="#"
                      className="text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Contato
                    </Link>
                  </div>
                </div>
              )}
            </Transition>
          </nav>

          <main className="relative">
          <section>
          <div className="bnr-solsticio-marca rounded-lg shadow-lg py-5 px-4 top-[-0.5em] lg:top-[-4.0em]">
                    <div className="justify-center text-center lg:text-left">
                        <div className="px-6">
                            <Image src={imgSolsticio} alt="Solstício - Serviços elétricos" width={150} height={150} />
                        </div>
                    </div>
                </div>
                <div
                className="bnr-solsticio-banner relative overflow-hidden bg-no-repeat bg-cover"
                >
                </div>
                <div className="container text-gray-800 px-4 md:px-12 mx-auto" id="bnrFormContatoSolicitado">
                <div
                    className="bnr-solsticio-banner-block block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6"
                >
                    <div className="flex flex-wrap justify-center text-center lg:text-left py-0">
                    <div className="grow-0 shrink-0 basis-auto w-full px-6">
                        <div className="grid lg:grid-cols-2 gap-x-6 items-center">
                        <div className="mb-10 lg:mb-0 xl:w-10/12">
                            <h2 className="text-3xl font-bold">
                            Preencha o formulário
                            <br />
                            <span className="text-blue-600">Entraremos em contato!</span>
                            </h2>
                        </div>

                        <div className="mb-6 md:mb-0 xl:w-full">
                            <form className="w-full text-white" onSubmit={submitData}>
                                <div className="md:flex flex-row">
                                    <input
                                        id="bnrFormContatoSolicitadoNome"
                                        type="text"
                                        onChange={(e) => setFaleConoscoNome(e.target.value)}
                                        value={faleConoscoNome}
                                        className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Nome"
                                    />

                                    <InputMask
                                        id="bnrFormContatoSolicitadoTelefone"
                                        className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        onChange={(e) => setFaleConoscoTelefone(e.target.value)}
                                        value={faleConoscoTelefone}
                                        mask="+55 99 99999-9999"
                                        // @ts-ignore:next-line
                                        maskChar={null}
                                        placeholder="Telefone"
                                    />

                                    <button
                                        type="submit"
                                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        disabled={(!faleConoscoTelefone || !faleConoscoNome) || isSendingFaleConosco }
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light">
                                            { isSendingFaleConosco ?
                                                <div className="w-13 p-0 m-0 px-4">
                                                    <CircleNotch weight="bold" className="w-5 h-5 animate-spin mx-auto" />
                                                </div>
                                            :
                                                <div className="w-13 p-0 m-0">
                                                    Enviar
                                                </div>
                                            }
                                    </button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </section>
            </main>
        </>
  );
}

export default TemplatesHeader1
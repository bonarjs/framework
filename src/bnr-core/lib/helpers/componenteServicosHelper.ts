import { FirestoreTabelaDinamicaRepository } from "src/@repositories/firestore/firestore-tabela-dinamica-repository"
import { TabelaDinamicaUseCase } from "src/@use-cases/tabela-dinamica-use-case"
import { TabelaDinamicaRepository } from "src/@repositories/tabela-dinamica-repository"

import { getApp, getApps, initializeApp } from "firebase/app"

import {
    // collection,
    // getDocs,
    getFirestore, collection, getDocs, getDoc, doc, updateDoc, deleteDoc, orderBy,
    query,
    DocumentData, 
    onSnapshot,
    Firestore,
    where,
    getDocFromServer,
    // getFirestore
} from "firebase/firestore"

import initializeFirebaseClient from "src/@lib/firebase/initFirebase"

const firestoreTabelaDinamicaRepository = new FirestoreTabelaDinamicaRepository(
  process.env.NEXT_PUBLIC_BNR_CODIGO_CLIENTE // código do site/cliente
)

const codigo_tabela = "OHIR9WNzcQ1qoOUrmU5S"

const tabelaDinamicaUseCase = new TabelaDinamicaUseCase(
  firestoreTabelaDinamicaRepository
)

export async function getCards(id) {
  const content = await tabelaDinamicaUseCase.getOneById(codigo_tabela, id)

  return content
}
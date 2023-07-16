import { getApp, getApps, initializeApp } from "firebase/app"

import {
    // collection,
    // getDocs,
    getFirestore, collection, getDocs,
    query,
    DocumentData, 
    onSnapshot,
    // getFirestore
} from "firebase/firestore"
import { useCallback, useContext, useEffect, useState } from "react"


// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

import { TabelaDinamicaRepository } from "src/@repositories/tabela-dinamica-repository"
import initializeFirebaseServer from "src/@lib/firebase/initFirebaseAdmin"


export class FirebaseAdminTabelaDinamicaRepository implements TabelaDinamicaRepository {
    getOneById: (tabela, id) => Promise<any>
    getDocument: (tabela: any, id: any) => Promise<any>
    update: (document: any, content: any) => Promise<any>
    remove: (document: any) => Promise<any>
    async getAll(tabela) {
        let content
        const app = initializeFirebaseServer()
        const db = app.db
        const dataRef = 
            db
            .collection("/clientes/fmmi7wEmlgrqJjpEskvN/sites/IubGloiw1FNL1PfRpv4o/tabelas/"+tabela+"/itens-tabela")
        content = await dataRef.get()
        return content.docs
    }
}
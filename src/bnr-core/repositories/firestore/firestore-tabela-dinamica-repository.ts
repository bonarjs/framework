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
import { useCallback, useContext, useEffect, useState } from "react"


// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

import { TabelaDinamicaRepository } from "src/@repositories/tabela-dinamica-repository"
import initializeFirebaseClient from "src/@lib/firebase/initFirebase"

export class FirestoreTabelaDinamicaRepository implements TabelaDinamicaRepository {
    cliente: string
    db: Firestore
    constructor(
        private _cliente
    ) {
        this.cliente = _cliente
        let firebaseApp = initializeFirebaseClient().app
        this.db = getFirestore(firebaseApp)
    }

    async getAll(tabela) {
        let content

        const ref =
            collection(this.db, `clientes/${this.cliente}/tabelas`, tabela, "itens-tabela")
        const q = query(ref, orderBy('created_at','asc'))

        // const q = query(ref, where('telefone', '==', faleConoscoTelefone))

        content = await getDocs(q)

        return content.docs
        
    }

    async getOneById(tabela, id) {
        const docRef = doc(this.db, `clientes/${this.cliente}/tabelas/${tabela}/itens-tabela`, id)
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data()
        } else {
            return false
        }
    }

    async getDocument(tabela, id) {

        let snapshot

        const ref = doc(this.db, `clientes/${this.cliente}/tabelas/${tabela}/itens-tabela`, id)
        
        snapshot = await getDoc(ref)

        return snapshot
    }
    
    async update(document, content) {
        const response = await updateDoc(document.ref, content)
        
        return response
    }
    
    async remove(document) {
        const response = await deleteDoc(document.ref)
        
        return response
    }
}
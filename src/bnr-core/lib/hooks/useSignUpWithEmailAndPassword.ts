import { ReactNode, useCallback } from "react";
import { useAuth } from "reactfire";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, updatePhoneNumber, UserCredential } from "firebase/auth";
import { useRequestState } from "./useRequestState";

import { collection, setDoc, getFirestore, doc } from "firebase/firestore"
import initializeFirebaseClient from "src/@lib/firebase/initFirebase"

export function useSignUpWithEmailAndPassword() {
  const auth = useAuth();

  const {state, setLoading, setData, setError} = useRequestState<UserCredential,
    FirebaseError>();

  const signUp = useCallback(async (obj) => {
    setLoading(true);
    
    await createUserWithEmailAndPassword(
        auth,
        obj.email,
        obj.password
      ).then(function(data) {
        
        setData(data)

        let firebaseApp = initializeFirebaseClient().app
        const db = getFirestore(firebaseApp)

        const ref =
            collection(db, 'users')

        obj.uid = data.user.uid
        obj.apps = Array('jcalhau-avaliacaopremiofieb')
        delete obj.email
        delete obj.password

        if (obj.porte_empresa == "") {
          delete obj.porte_empresa
          delete obj.razao_social
          delete obj.cnpj
        }

        const addDoc = setDoc(doc(ref), obj);

      }).catch(function(error) {
        console.log(error)
        setError(error as FirebaseError);
      })

  }, [auth, setData, setError, setLoading]);

  return [signUp, state] as [typeof signUp, typeof state];
}

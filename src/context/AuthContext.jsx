import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase"
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const signUp = (user) => {
        setUser(user)
        // createUserWithEmailAndPassword(auth, email, password)
        // return setDoc(doc(db, "user", email), {
        //     favorites: [],
        // })
    }
    const signIn = (user) => {
        setUser(user)
        // return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setUser(null)
        // return signOut(auth)
    }

    useEffect(()=>{
        // const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        //     setUser(currentUser)
        // })
        // return () => {
        //     unsubscribe()
        // }
    },[])

    return (
        <UserContext.Provider value={{signUp, signIn, logout, user}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}

import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase"
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Parse from 'parse/dist/parse.min.js';

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const signUp = (user) => {
        setUser(user)
    }
    const signIn = (user) => {
        setUser(user)
    }

    const logout = async () => {

        await Parse.User.logOut()

        setUser(null)


    }

    useEffect(()=>{
        async function getUser(){
                let user = await Parse.User.current()
                setUser(user)

            
        }
        getUser()
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

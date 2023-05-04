import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";    
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => { 
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => { 
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleLogin = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    const githubLogin = () => { 
        const provider = new GithubAuthProvider()
        return signInWithPopup(auth, provider)
    }

    const resetEmail = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged unsubscribe', loggedUser);
            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        LogOut,
        googleLogin,
        githubLogin,
        resetEmail
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
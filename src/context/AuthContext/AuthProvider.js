import React, { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config.js'
import { useState } from 'react';
export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    

    const googleProviderLogin = (provider) => {
        setLoading(false)
        return signInWithPopup(auth, provider)
    }

    const githubProviderLogin = (provider) => {
        setLoading(false)
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser === null || currentUser.emailVerified || currentUser.uid){
                setUser(currentUser)
            }
            setLoading(false)
        })
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = { user, loading, setUser, githubProviderLogin, setLoading, createUser, updateUserProfile, logOut, signIn,  googleProviderLogin }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

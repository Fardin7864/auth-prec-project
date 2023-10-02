import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, FacebookAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../../firebase/firebase'
import {  useNavigate } from "react-router-dom";
export const AuthContext = createContext();

const Authprovider = ({children}) =>{
    // states
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    // Provider
    const google = new GoogleAuthProvider();
    const github = new GithubAuthProvider();
    const facebook = new FacebookAuthProvider();
    
    
    const signinWithSocial = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth , provider)
    }
    const logOut = () => { 
        setLoading(true)
        return signOut(auth)
     }

    // create user with email
    const createUserWithEmail = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login with email
    const logInwithEmail = (email, password) => { 
        return signInWithEmailAndPassword(auth, email , password)
     }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
                setUser(currentUser);
                setLoading(false)
        })
        return () => unsubscribe();
    },[])

    const authInfo = {
        user,
        error,
        loading,
        signinWithSocial,
        google,
        github,
        facebook,
        logOut,
        createUserWithEmail,
        logInwithEmail,

    }

    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default Authprovider;
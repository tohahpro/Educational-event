import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";


const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {


    const [user, setUser] = useState({})

    // google Login user 
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // gitHub login 
    const gitHubLogin = () => {
        return signInWithPopup(auth, gitHubProvider)
    }

    // user signUp 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user login 
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user logOut 
    const logOut = () => {
        return signOut(auth)
    }

    // user update 
    const userUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }


    // user authentication 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser)


        });
        return () => {
            unSubscribe()
        }
    }, [])

    console.log(user);


    const authInfo = {
        user,
        googleLogin,
        gitHubLogin,
        createUser,
        userLogin,
        logOut,
        userUpdate
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;
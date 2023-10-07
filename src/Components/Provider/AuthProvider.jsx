import { createContext } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/Firebase.config";


const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {

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




    const authInfo = {
        googleLogin,
        gitHubLogin,
        createUser,
        userLogin
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
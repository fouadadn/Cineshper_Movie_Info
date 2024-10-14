import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut , signInWithEmailAndPassword, sendPasswordResetEmail , GoogleAuthProvider, signInWithPopup, deleteUser } from "firebase/auth";
import auth from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const navigate= useNavigate()
    const [currentUser, setcurrentUser] = useState()
    const [loading, setloading] = useState(true)
    const logOut = async() => {
        const result = await signOut(auth);
        navigate('/Account')
        return result
    }
    const logIn = async (email , password)=>{
        return signInWithEmailAndPassword(auth , email , password)
    }
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);  
    }
    const resetPassword = (email)=>{
        return sendPasswordResetEmail(auth , email)
    }
    const LoginWithGoogle = async ()=>{
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth , provider);
        navigate('/')
        return result
    }
    const removeUser = async ()=>{
        const result = await deleteUser(currentUser);
        navigate('/Account')
        return result
    }
    
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setcurrentUser(user)
            setloading(false)

            return () => {
                unsub()
            }
        })
    }, [])
    return <AuthContext.Provider value={{ currentUser, signup, logOut , logIn , resetPassword , LoginWithGoogle , removeUser  }}>
        {!loading && children}
    </AuthContext.Provider>
}
export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext)
}
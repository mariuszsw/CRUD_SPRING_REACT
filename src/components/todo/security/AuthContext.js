import { createContext, useState, useContext } from "react";
import LoginComponent from "../LoginComponent";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {
    const [number, setNumber] = useState(10)

    const [isAuthenticated, setAuthenticated] = useState(false)

    // setInterval(() => setNumber(number + 1),10000)    

    return (
        <AuthContext.Provider value={{number, isAuthenticated, setAuthenticated}}>
            {children}
        </AuthContext.Provider> 
    )
}

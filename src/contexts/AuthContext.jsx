import React, { createContext, useContext, useState, useEffect } from "react";

//creating the auth context
const AuthContext = createContext();

//create hook to consume context (give access to context variables)
export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}

const API_URL = 'http://127.0.0.1:5000'

//Create the Context Provider (wrapper that I will place over my app)
export const AuthProvider = ({ children }) =>{
    const [runner, setRunner] = useState(localStorage.getItem('runner') ? JSON.parse(localStorage.getItem('runner')) : null) //Runner will be an object in JSON
    const [token, setToken] =useState(localStorage.getItem('token') || null)

        //login function
    const login = async (email, password) =>{
        const response = await fetch(API_URL + '/runners/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        if (!response.ok){
            console.error('There was an issue logging in.')
        }

        const data = await response.json() // translating to js

        console.log(data)
        if ('error' in data){ // checking the login response for an error from my backend
            return false
        }
        setRunner(data.runner)
        setToken(data.token)
        localStorage.setItem('runner', JSON.stringify(data.runner))
        localStorage.setItem('token', data.token)
        return true
    }

    const value = {
        token,
        runner,
        login,
    }
        
    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}
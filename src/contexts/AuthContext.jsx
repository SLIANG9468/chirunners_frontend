import React, { createContext, useContext, useState, useEffect } from "react";

//creating the auth context
const AuthContext = createContext();

//create hook to consume context (give access to context variables)
export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}

const API_URL = import.meta.env.VITE_API_URL

//Create the Context Provider (wrapper that I will place over my app)
export const AuthProvider = ({ children }) =>{
    const [runner, setRunner] = useState(localStorage.getItem('runner') ? JSON.parse(localStorage.getItem('runner')) : null) //Runner will be an object in JSON
    const [token, setToken] =useState(localStorage.getItem('token') || null)

    //Grab already logged in runner
    useEffect(()=> {
        const savedToken = localStorage.getItem('token')
        const savedRunner = localStorage.getItem('runner')
        setToken(savedToken)
        const runnerData = JSON.parse(savedRunner)
        setRunner(runnerData) //parsing JSON object from the LS, and setting the object to our Runner
    },[])

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

    const logout = () => {
        setToken(null) //clearing saved tokens
        setRunner(null)
        localStorage.removeItem('token') //potentially want to clear entire ls
        localStorage.removeItem('runner')
    }

    //Register Runner Function
    const registerRunner = async (registerData) => {
        const response = await fetch(API_URL + '/runners',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerData)
        })

        const responseData = await response.json()
        console.log(responseData)
    }

    //Add Team Function
    const addTeam = async (teamData) => {
        const response = await fetch(API_URL + '/teams',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token
            },
            body: JSON.stringify(teamData)
        })

        const responseData = await response.json()
        console.log(responseData)
    }

    const value = {
        token,
        runner,
        login,
        logout,
        registerRunner, 
        addTeam,
        isAuthenticated: token ? true : false
    }
        
    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}
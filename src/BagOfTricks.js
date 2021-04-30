import React, {useState} from "react"
import {Route, Redirect} from "react-router-dom"
import {ApplicationViews} from "./ApplicationViews"
import {NavBar} from "./components/nav/NavBar"
import {Login} from "./components/auth/Login"
import {Register} from "./components/auth/Register"

//if the user is authenticated, render the navbar and application views
//if not, direct them to login/register
export const BagOfTricks = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("app_user_id") !== null)
    
    const setAuthUser = (user) => {
        sessionStorage.setItem("app_user_id", JSON.stringify(user.id))
        setIsAuthenticated(sessionStorage.getItem("app_user_id") !== null)
    }
    return (
        <>
    <NavBar />
    <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated}/>
    </>
    )
}
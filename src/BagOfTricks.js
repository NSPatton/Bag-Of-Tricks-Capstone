import React, {useState} from "react"
import {ApplicationViews} from "./ApplicationViews"


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
    <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated}/>
    </>
    )
}
import React from "react"
import {Route, Redirect} from "react-router-dom"
import {AppicationViews} from "./ApplicationViews"
import {NavBar} from "./nav/NavBar"
import {Login} from "./auth/Login"
import {Register} from "./auth/Register"

export const BagOfTricks = () => (
    <>
    <Route
    render={() => {
        if (sessionStorage.getItem("bagOfTricks_user")) {
            return (
                <>
                <NavBar />
                <ApplicationViews />
                </>
            )
        } else {
            return <Redirect to="/login" />;
        }
    }}
    />

    <Route path="/login">
        <Login />
    </Route>
    <Route path="/register">
        <Register />
    </Route>
    </>
)
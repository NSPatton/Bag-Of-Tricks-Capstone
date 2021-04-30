import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { CharacterList } from "./components/characters/CharacterList"



export const ApplicationViews = ({ setAuthUser, isAuthenticated }) => {
    return (
        <>
            <Route exact path="/">
                {isAuthenticated ? <CharacterList /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>
            <Route exact path="/register">
                <Register setAuthUser={setAuthUser} />
            </Route>
        </>
    )
}
import React, {useState} from "react";
import {Route, Redirect} from "react-router-dom";
import {Login} from "./components/auth/Login"
import {Register} from "./components/auth/Register"
import {CharacterList} from "./components/characters/CharacterList"
import {CharacterCard} from "./components/characters/CharacterCard"
import {CharacterForm} from "./components/characters/CharacterForm"


export const ApplicationViews = ({setAuthUser, isAuthenticated}) => {
    return (
        <>
        <Route exact path="/">
            {/* {isAuthenticated ? */}
             <CharacterList />
              {/* : <Redirect to="/login" />} */}
        </Route>
        <Route exact path="/characters/create">
            <CharacterForm />
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
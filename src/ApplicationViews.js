import React, {useState} from "react";
import {Route, Redirect} from "react-router-dom";
import {Login} from "./components/auth/Login"
import {Register} from "./components/auth/Register"
import {CharacterList} from "./components/characters/CharacterList"
import {CharacterCard} from "./components/characters/CharacterCard"
import {CharacterForm} from "./components/characters/CharacterForm"
import {NavBar} from "./components/nav/NavBar"
import {CharacterView} from "./components/characters/CharacterView"
import { FeatureList } from "./components/features/FeatureList";
import {StrategiesList} from "./components/strategies/StrategiesList"


export const ApplicationViews = ({setAuthUser, isAuthenticated}) => {
    return (
        <>
        <Route exact path="/">
            {isAuthenticated ?
            <><NavBar />
             <CharacterList /> </>
             : <Redirect to="/login" />} 
        </Route>
        <Route exact path="/characters/create">
        <NavBar />
            <CharacterForm />
        </Route>
        {/* This looks for characters by their id. the colon tells the route that this is dynamic */}
        <Route exact path="/characters/:characterId(\d+)">
                <CharacterView />
                <FeatureList />
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
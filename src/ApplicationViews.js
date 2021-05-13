import React from "react";
import {Route, Redirect} from "react-router-dom";
import {Login} from "./components/auth/Login"
import {Register} from "./components/auth/Register"
import {CharacterList} from "./components/characters/CharacterList"
import {CharacterForm} from "./components/characters/CharacterForm"
import {NavBar} from "./components/nav/NavBar"
import {CharacterView} from "./components/characters/CharacterView"
import {StrategiesForm} from "./components/strategies/StrategiesForm"
import {FeatureForm} from "./components/features/FeatureForm"
import {CharacterEdit} from "./components/characters/CharacterEdit"
import {StrategiesEdit} from "./components/strategies/StrategiesEdit"


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
            <CharacterForm />
        </Route>
        {/* This looks for characters by their id. the colon tells the route that this is dynamic */}
        <Route exact path="/characters/:characterId(\d+)">
            <NavBar />
            <CharacterView />
        </Route>
        <Route exact path="/characters/:characterId(\d+)/edit">
            <NavBar />
            <CharacterEdit />
      </Route>
        <Route exact path="/features/create/:characterId(\d+)">
            <NavBar />
            <FeatureForm />
        </Route>
        <Route exact path="/strategies/create/:characterId(\d+)">
            <NavBar />
            <StrategiesForm />
        </Route>
        <Route exact path="/strategies/:strategyId(\d+)">
            <NavBar />
            <StrategiesEdit />
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
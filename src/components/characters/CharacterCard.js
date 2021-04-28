import React from "react"
import "./CharacterCard.css"
import {Link} from "react-router-dom"

export const CharacterCard = (character, handleDeleteCharacter) => {
    return (
            <div className="cards">
                <div className="card-content">
                    <div className="characters">
                        <div className="character">
                        <h3>Name: <span className="card-character">{character.name}</span></h3>
                        <p>Level: {character.level}</p>
                        <p>Class: {character.class}</p>
                        <p>Campaign: {character.campaign}</p>
                    </div>
                </div>
            </div>
            </div>
    )
}
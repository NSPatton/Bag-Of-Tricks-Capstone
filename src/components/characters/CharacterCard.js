import React from "react"
import "./CharacterCard.css"
import { Link } from "react-router-dom"

export const CharacterCard = ({ character, handleDeleteCharacter, handleUpdateCharacter }) => {
    return (
        <div className="cards">
            <div className="card-content">
                <div className="characters">
                    <div className="character">
                        <h3>Character Name: {character.name}</h3>
                        <p>Level: {character.level}</p>
                        <p>Class: {character.class.name}</p>
                        <p>Campaign: {character.campaign}</p>
                        <div className="viewbutton">
                            <Link to={`/characters/${character.id}`}>
                                <button>View</button>
                            </Link>
                        </div>
                        <div className="editbutton">
                            <Link to={`/characters/${character.id}/edit`}>
                                <button type="button" className="btn-primary">Edit</button>
                            </Link>
                        </div>
                        <div className="deletebutton">
                            <button className="btn-primary" type="button" onClick={() => handleDeleteCharacter(character.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {CharacterCard} from "./CharacterCard";
import {updateCharacter, getCharactersByUser, deleteCharacter, getAllCharacters} from "../../modules/CharacterModule"

export const CharacterList = () => {

    currentUser = JSON.parse(sessionStorage.getItem("bagOfTricks_user"))

    const history = useHistory()

    const [characters, setCharacters] = useState([]);

    const getCharacters = () => {
        return getAllCharacters().then(charactersFromAPI => {
            setCharacters(charactersFromAPI)
        })
    }

    const handleDeleteCharacter = id => {
        deleteCharacter(id)
        .then(() => getAllCharacters().then(setCharacters))
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <>
        <section className="section-content">
            <button type="button"
            className="btn-primary"
            onClick={() => {history.push("/tasks/create") }}>
                Add A Character
            </button>
        </section>
        <div className="container-cards">
            {characters.map(character =>
                <CharacterCard key={character.id} character={character} handleDeleteCharacter={handleDeleteCharacter} /> )}
        </div>
        </>
    )


}
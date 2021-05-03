import React, {useState, useEffect} from "react";
import {getCharactersByUser} from "../../modules/CharacterModule"
import {useParams, useHistory, Link} from "react-router-dom"

export const CharacterView = () => {
    const [character, setCharacter] = useState({
        name: "",
        level: 0

    })

    const [isLoading, setIsLoading] = useState(true)
    //useParams will look for that specific character Ids information
    const {charId} = useParams();
    const history = useHistory();

    useEffect(() => {
        getCharactersByUser(charId)
        .then(character => {
            setCharacter({
                name: character.name,
                level: character.level
            })
        })
    })
}
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
            setIsLoading(false)
        })
    }, [charId])

    return (
        <section className="character">
            <h3 className="character__name">{character.name}</h3>
            <div className="character__level">{character.level}</div>
        </section>
    )
}
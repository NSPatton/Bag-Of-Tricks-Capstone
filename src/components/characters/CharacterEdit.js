import React, {useState, useEffect} from "react"
import {useHistory, useParams, Link} from "react-router-dom"
import {updateCharacter, getCharacterById} from "../../modules/CharacterModule"
import {getAllClasses} from "../../modules/ClassModule"

export const CharacterEdit = () => {

    const currentUser = JSON.parse(sessionStorage.getItem("app_user_id"))

    const [character, setCharacter] = useState({
        id: 0,
        name: "",
        level: 0,
        classId: 0,
        campaign: "",
        userId: 0
    })

    const [classes, setClasses] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    const {characterId} = useParams()
    const history = useHistory()

    const handleFieldChange = evt => {
        const stateToChange = {...character}
        stateToChange[evt.target.id] = evt.target.value
        setCharacter(stateToChange)
    }

    const updateExistingCharacter = (event) => {
        event.preventDefault()
        setIsLoading(true)

        const editedCharacter = {
            id: characterId,
            name: character.name,
            level: character.level,
            classId: character.classId,
            campaign: character.campaign,
            userId: currentUser

        }
        updateCharacter(editedCharacter)
        .then(() => history.push("/")
        )
    }

    useEffect(() => {
        getCharacterById(characterId)
        .then(character => {
            setCharacter(character)
            setIsLoading(false)
        })
    }, [characterId])

    useEffect(() => {
        getAllClasses()
        .then(classesFromAPI => {
            setClasses(classesFromAPI)
            setIsLoading(false)
        })
    }, [])

        return (
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="name">Character name: </label>
                        <input type="text" required className="form-control" onChange={handleFieldChange} id="name" value={character.name} />

                        <label htmlFor="level">Level: </label>
                        <input type="text" required className="form-control" onChange={handleFieldChange} id="level" value={character.level} />

                        <label htmlFor="class">Assign A Class</label>
                        <select value={character.classId} name="classId" id="classId" onChange={handleFieldChange}>
                            {classes.map(c => <option key={c.id} value={c.id}>{c.name}</option>
                            )}
                        </select>

                        <label htmlFor="campaign">Campaign</label>
                        <input type="text" required className="form-control" value={character.campaign} id="campaign" onChange={handleFieldChange} />
                    </div>
                    <Link to={`/`}>
                        <button className="btn-primary">Return</button>
                    </Link>
                    <div className="alignRight">
                        <button type="button" disabled={isLoading} onClick={updateExistingCharacter} className="btn-primary">Submit</button>
                    </div>
                </fieldset>
            </form>
            </>
        )
}
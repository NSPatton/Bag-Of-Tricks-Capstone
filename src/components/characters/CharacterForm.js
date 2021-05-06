import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router'
import {Link} from "react-router-dom"
import {addCharacter} from '../../modules/CharacterModule'
import {getAllClasses} from "../../modules/ClassModule"

export const CharacterForm = () => {

    const currentUser = JSON.parse(sessionStorage.getItem("app_user_id"))

    const [character, setCharacter] = useState({
        name: "",
        level: 0,
        classId: 0,
        campaign: "",
        userId: parseInt(currentUser)
    })


const [isLoading, setIsLoading] = useState(false);

const [classes, setClasses] = useState([])

const history = useHistory();

const handleControlledInputChange = (event) => {
    const newCharacter = {...character}
    let selectedVal = event.target.value
    if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
    }

    newCharacter[event.target.id] = selectedVal
    setCharacter(newCharacter)
}

useEffect(() => {
    getAllClasses()
    .then(classesFromAPI => {
        setClasses(classesFromAPI)
    })
})

    const handleClickSaveCharacter = (event) => {
        event.preventDefault()

        const classId = character.classId

        if (classId === 0) {
            window.alert("Please assign a class to your character")
        } else {
            setIsLoading(true)
            addCharacter(character)
            .then(() => history.push("/"))
        }


    }

    return (
        <form className="characterForm">
            <h2 className="characterForm_title">New Character</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Character name: </label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Character name" value={character.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="level">Level: </label>
                    <input type="text" id="level" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Character level" value={character.level} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="class">Assign a Class: </label>
                    <select value={character.classId} name="classId" id="classId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Class</option>
                        {classes.map(c => (
                            <option key={c.id} value={c.id} >
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="campaign-Form">
                    <label htmlFor="campaign">Campaign: </label>
                    <input type="text" id="campaign" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Campaign" value={character.campaign} />
                </div>
            </fieldset>
            <Link to={"/"}>
                <button className="btn-primary">Return</button>
            </Link>
            <button disabled={isLoading} className="btn btn-primary" onClick={handleClickSaveCharacter}>Save Character</button>
        </form>
    )
}





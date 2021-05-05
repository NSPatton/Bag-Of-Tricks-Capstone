import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router'
import {Link} from "react-router-dom"
import {addStrategies, addStrategy} from "../../modules/StrategiesModule"

export const StrategiesForm = () => {

    const currentUser = JSON.parse(sessionStorage.getItem("app_user_id"))
    const {characterId} = useParams()

    const [strategy, setStrategies] = useState({
        desc: "",
        userId: parseInt(currentUser),
        characterId: characterId
    })

    const [isLoading, setIsLoading] = useState(false)

    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newStrategy = {...strategy}
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
    
        newStrategy[event.target.id] = selectedVal
        setStrategies(newStrategy)
    }

    const handleClickSaveStrategy = (event) => {
        event.preventDefault()
        setIsLoading(true)
        addStrategy(strategy)
        .then(() => {
            history.push(`/characters/${characterId}`)
        })
    }

    return (
        <form className="featureForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="desc">Description: </label>
                    <input type="text" id="desc" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Description" value={strategy.desc} />
                </div>
            </fieldset>
            <button disabled={isLoading} className="btn btn-primary" onClick={handleClickSaveStrategy}>Save Strategy</button>
        </form>
    )
}

import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router'
import {Link} from "react-router-dom"
import {addFeature} from "../../modules/FeatureModule"


export const FeatureForm = () => {
    const currentUser = JSON.parse(sessionStorage.getItem("app_user_id"))
    const {characterId} = useParams()

    const [feature, setFeatures] = useState({
        name: "",
        level: "",
        desc: "",
        userId: parseInt(currentUser),
        characterId: parseInt(characterId)
    })

    

    const [isLoading, setIsLoading] = useState(false)


    const history = useHistory()

    
    const handleControlledInputChange = (event) => {
        const newFeature = {...feature}
        let selectedVal = event.target.value
        if (event.target.id.includes("Id") || event.target.id === "level") {
            selectedVal = parseInt(selectedVal)
        }
    
        newFeature[event.target.id] = selectedVal
        setFeatures(newFeature)
    }

    const handleClickSaveFeature = (event) => {
        event.preventDefault()
        setIsLoading(true)
        addFeature(feature)
        .then((data) => {
            console.log(data)
            history.push(`/characters/${feature.characterId}`)
        })
    }


    return (
        <form className="featureForm">
            <Link to="/">
                <button className="btn-primary">Return</button>
            </Link>
            <h2 className="featureForm_title">New Feature</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name"></label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Feature name" value={feature.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="level">Level: </label>
                    <input type="number" id="level" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Feature level" value={feature.level} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="desc">Description: </label>
                    <input type="text" id="desc" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Description" value={feature.desc} />
                </div>
            </fieldset>
            <button disabled={isLoading} className="btn btn-primary" onClick={handleClickSaveFeature}>Save Feature</button>
        </form>
    )
    
}
    
    

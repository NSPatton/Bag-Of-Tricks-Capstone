import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"
import {FeatureCard} from "./FeatureCard"
import {getFeatureByCharacterId, deleteFeature} from '../../modules/FeatureModule'

export const FeatureList = () => {

    const currentUser = JSON.parse(sessionStorage.getItem("app_user_id"))

    const [features, setFeatures] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const history = useHistory()

    const getFeatures = () => {
        return getFeatureByCharacterId(currentUser).then(featuresFromAPI => {
            setFeatures(featuresFromAPI)
        })
    }
    

    const handleDeleteFeature = id => {
        setIsLoading(true)
        deleteFeature(id)
        .then(() => getFeatures())
    }

    useEffect(() => {
        getFeatures(currentUser)
    }, [])
    
    return (
        <>
    <section className="section-content">
        <button type="button" className="btn-primary" onClick={() => {history.push("/features/create")}}>New Feature</button>
    </section>
        <div className="container-cards">
            {features.map(feature => 
            <FeatureCard key={feature.id} feature={feature} handleDeleteFeature={handleDeleteFeature}/>
            )}
        </div>
    </>
)
}
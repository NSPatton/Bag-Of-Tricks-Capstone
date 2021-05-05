import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"

export const StrategiesList = ({characterId}) => {

    const currentUser = JSON.parse(sessionStorage.getItem("app_user_id"))

    const [strategy, setStrategies] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const history = useHistory()

    const getStrategies = () => {
        return getStrategiesOfCharacterId(currentUser)
        .then(strategiesFromAPI => {
            setStrategies(strategiesFromAPI)
        })
    }

    const handleDeleteStrategy = id => {
        setIsLoading(true)
        deleteStrategy(id)
        .then(() => getStrategies())
    }

    useEffect(() => {
        getStrategies(currentUser)
    }, [])

    return (
        <>
        <section className="section-content">
            <button type="button" className="btn-primary" onClick={() => {history.push(`/strategies/create/${characterId}`)}}>Add A Strategy</button>
        </section>
        <div className="container-cards">
            {strategies.map(strategy =>
                <StrategiesCard key={strategy.id} strategy={strategy} handleDeleteStrategy={handleDeleteStrategy}/>)}
        </div>
        </>
    )
}
import React, {useState, useEffect} from "react"
import {useHistory, useParams, Link} from "react-router-dom"
import {updateStrategy, getStrategyById} from "../../modules/StrategiesModule"

export const StrategiesEdit = () => {

    // const currentUser = JSON.parse(sessionStorage.getItem("app_user_id"))

    const [strategy, setStrategy] = useState({
        id: 0,
        desc: "",
        characterId: 0,
        userId: 0
    })

    const [isLoading, setIsLoading] = useState(false)

    const {strategyId} = useParams()
    const history = useHistory()

    const handleFieldChange = event => {
        const stateToChange = {...strategy}
        stateToChange[event.target.id] = event.target.value
        setStrategy(stateToChange)
    }

    const updateExistingStrategy = event => {
        event.preventDefault()
        setIsLoading(true)

        const editedStrategy = {
            id: strategyId,
            desc: strategy.desc,
            characterId: strategy.characterId,
            userId: strategy.userId
        }
        updateStrategy(editedStrategy)
        .then(() => history.push(`/characters/${strategy.characterId}`)
        )
    }

    useEffect(() => {
        getStrategyById(strategyId)
        .then(strategy => {
            setStrategy(strategy)
            setIsLoading(false)
        })
    }, [strategyId])

    return (
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <label htmlFor="desc">Strategy description: </label>
                    <input type="text" required className="form-control" onChange={handleFieldChange} id="desc" value={strategy.desc} />

                    <div className="alignRight">
                        <button type="button" disabled={isLoading} onClick={updateExistingStrategy} className="btn-primary">Submit</button>
                    </div>
                </div>
            </fieldset>
        </form>
        </>
    )
}
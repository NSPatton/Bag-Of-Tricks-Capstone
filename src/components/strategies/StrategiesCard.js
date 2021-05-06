import React from "react"
import {Link} from "react-router-dom"

export const StrategiesCard = ({strategy, handleDeleteStrategy}) => {
    return (
        <div className="cards">
            <div className="card-content">
                <div className="strategies">
                    <div className="strategy">
                        <h4>Strategy: {strategy.desc}</h4>
                        <Link to={`/strategies/${strategy.id}`}>
                            <button type="button">
                                Edit
                            </button>
                        </Link>
                        <button className="btn-primary" type="button" onClick={() => handleDeleteStrategy(strategy.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from "react"
import "./FeatureCard.css"
import {Link} from "react-router-dom"

export const FeatureCard = ({feature, handleDeleteFeature}) => {
    return (
            <div className="cards">
                <div className="card-content">
                    <div className="features">
                        <div className="feature">
                        <h3>{feature.name}</h3>
                        <p>Level: {feature.level}</p>
                        <p>Description: {feature.desc}</p>
                        <button className="btn-primary" type="button" onClick={() => handleDeleteFeature(feature.id)}>Delete</button>
                    </div>
                </div>
            </div>
            </div>
    )
}
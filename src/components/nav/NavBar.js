import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">My Characters</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/characters/create">Add A Character</Link>
            </li>
        </ul>
    )
}
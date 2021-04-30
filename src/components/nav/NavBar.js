import React from "react"
import { Link, withRouter } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({isAuthenticated, clearUser}) => {
    return (
        <>
        {isAuthenticated
        ?
        <ul className="navbar">
            {isAuthenticated
            ? <li className="navbar__item active">
                <Link className="navbar__link" to="/">My Characters</Link>
            </li>
            : null}
        </ul>
        : null}
        </>
    )
}

export default withRouter(NavBar)
import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import Logo from "./bag.png"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <div className="inner_nav">
                <div className="my_characters">
                    <li className="navbar__item active">
                        <Link className="navbar__link1" to="/">My Characters</Link>
                    </li>
                </div>
                <div className="logo_img">
                    <img className="logo" src={Logo} />
                    <h2>BAG OF TRICKS</h2>
                </div>
                <div className="character_add">
                    <li className="navbar__item active">
                        <Link className="navbar__link2" to="/characters/create">+ Add A Character</Link>
                    </li>
                </div>
            </div>
            <div className="logout">
            <i class="bi bi-person-circle"></i>
                <li className="navbar__item active">
                    <Link className="navbar__link" onClick={() => sessionStorage.clear()} to="/login">Logout</Link>
                </li>
            </div>
        </ul>
    )
}
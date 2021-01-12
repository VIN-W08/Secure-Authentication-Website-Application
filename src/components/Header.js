import React from "react"
import "../styles/header.css"
import {Link} from "react-router-dom"

function Header(){
    return(
        <div id="header-container">
            <h1 id="app-name">chatter</h1>
            <div id="nav">
                <Link to="/login" id="nav-login">Login</Link>
                <Link to="/sign-up" id="nav-signUp">Sign Up</Link>
            </div>
        </div>
    )
}

export default Header
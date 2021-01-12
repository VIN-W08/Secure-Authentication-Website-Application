import React, {useState} from "react"
import "../styles/login.css"
import {Link} from "react-router-dom"
import axios from "axios"

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");

    function onChangeInput(e){
        if(e.target.name == "email"){
            setEmail(e.target.value);
        }
        else{
            setPassword(e.target.value);
        }
    }

    async function onSubmit(e){
        e.preventDefault();

        axios.post("http://localhost:3500/app/login", {
            email: email,
            password: password
        });
        
        setEmail("");
        setPassword("");
    }

    return(
        <div className="login-container">
            <form onSubmit={onSubmit} className="login-form">
                <h2>Login</h2>
                <label htmlFor="email" value={email}>Email</label>
                <input onChange={onChangeInput} type="email" id="email" name="email" value={email}/>
                <label htmlFor="password">Password</label>
                <input onChange={onChangeInput} type="password" id="password" name="password" value={password}/>
                <button type="submit" id="btn-login">Login</button>
                <span>Or</span>
                <Link to="/sign-up"><button id="create-account" type="submit">Create Account</button></Link>
            </form>
        </div>
    )
}

export default Login
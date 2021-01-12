import React, {useState} from "react"
import "../styles/SignUp.css"
import {Link} from "react-router-dom"
import axios from "axios"

function SignUp(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onChangeInput(e){
        if(e.target.name == "username"){
            setUsername(e.target.value);
        }
        else if(e.target.name == "email"){
            setEmail(e.target.value);
        }
        else{
            setPassword(e.target.value);
        }
    }

    function onSubmit(e){
        e.preventDefault();
        axios.post("http://localhost:3500/app/sign-up", {
            username: username,
            email: email,
            password: password
        });
        setUsername("");
        setEmail("");
        setPassword("");
    }

    return(
        <div className="signUp-container">
            <form onSubmit={onSubmit} className="signUp-form">
                <h2>Sign Up</h2>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" onChange={onChangeInput} value={username}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={onChangeInput} value={email}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={onChangeInput} value={password}/>
                <Link to="/login" id="already-have-an-account">Already have an account?</Link>
                <button type="submit" id="btn-signUp">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
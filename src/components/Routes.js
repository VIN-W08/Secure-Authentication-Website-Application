import React from "react"
import {Route} from "react-router-dom"
import Login from "./Login.js"
import SignUp from "./SignUp.js"

function Routes(){
    return(
        <div>
            <Route path="/login" component={Login}/>
            <Route path="/sign-up" component={SignUp}/>
        </div>  
    )
}

export default Routes
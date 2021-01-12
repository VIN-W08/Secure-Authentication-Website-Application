import React, { useCallback } from "react";
import Header from "./Header"
import Footer from "./Footer"
import Routes from "./Routes"
import "../App.css"
import {BrowserRouter as Router} from "react-router-dom"

function App(){
  return(
    <Router>
      <div className="App">
        <Header/>
        <Routes/>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
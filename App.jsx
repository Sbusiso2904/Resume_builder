import React from "react";
import './designCSS.css';


function App() {
    return(
        <div>
            <h1>Rusume Builder SA</h1>

            <nav className="TopNav">
                <a href="#Signin">Sign in</a>
                <a href="#Login">Login</a>
                <a href="#Builder">Builder</a>
                <a href="#Upload">Upload</a>
                <a href="#Contacts">Contacts</a>
                <a href="#About">About</a>
            </nav>

            <div className="split left">
                <div className="left-side">
                    <p>Create New-Resume/CV</p>
                </div>
            </div>

            <div className="split right">
                <div className="centered">
                    <p>Improve Your existing Resume/CV</p>
                </div>
            </div>

        </div>
    );

}

export default App
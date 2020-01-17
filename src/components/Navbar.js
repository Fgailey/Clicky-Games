import React, { Component } from 'react';
import "./navbar.css"
class Navbar extends Component {


    render(){
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light game-nav">
            <h1 className="navbar-brand">Clicky Game</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item mx-3">
                <a className="nav-item nav-link" href="https://github.com/Fgailey/clicky-game">GitHub</a>
                </li>
                <li className="nav-item mx-3">
                <a className="nav-item nav-link" href="https://github.com/Fgailey/Portfolio-2">Portfolio</a>
                </li>
                <li className="nav-item mx-3">
                <a className="nav-item nav-link" href="https://www.linkedin.com/in/foster-gailey-391292165/">LinkedIn</a>
                </li>
            </ul>
            </div>
        </nav>
    </div>
  );
}
}

export default Navbar;
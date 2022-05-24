import React from "react";
import Navigation from "../Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light" 
            style={{"backgroundColor": "#e3f2fd"}}>
                <a className="navbar-brand img-fluid" href="https://github.com/Prolix19/" target="_blank" rel="noreferrer">
                    <span>Daniel Birmingham</span>
                </a>
                <Navigation />
            </nav>
        </header>
    );
};

export default Header;
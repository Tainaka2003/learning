import React from "react";
import './style.css';

const Header = () => {
    return (
        <header className="header">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Your_name_movie_logo.svg/1200px-Your_name_movie_logo.svg.png" alt="logo"/>
            <button className="button">
                Profile
            </button>
            <button className="button">
                Messages
            </button>
            <button className="button">
                News
            </button>
            <button className="button">
                Settings
            </button>
        </header>
    )
}

export default Header;

import React from "react";
import './style.css';

const Menu = () => {
    return (
        <nav className="nav">
            <a className={"anchor"} href="#">
                Profile
            </a>
            <a className={"anchor"} href="#">
                Messages
            </a>
            <a className={"anchor"} href="#">
                News
            </a>
            <a className={"anchor"} href="#">
                Settings
            </a>
        </nav>
    )
}

export default Menu;

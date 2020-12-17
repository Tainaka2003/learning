import React from 'react';
import './styles.css'
import Logo from "./Logo";

function Header() {
    return (
        <header className={"header"}>
            <div className={"headerLeftPart"}>
                <Logo />
                <div className={"headerCaption"}>
                    LaslesVPN
                </div>
            </div>
            <div className={"headerCenterPart"}>
                <ul className={"navMenu"}>
                    <li className={"navElement"}>About</li>
                    <li className={"navElement"}>Features</li>
                    <li className={"navElement"}>Pricing</li>
                    <li className={"navElement"}>Help</li>
                </ul>
            </div>
            <div className={"headerRightPart"}>
                <button className={"rightOffer"}>
                    Offer
                </button>
            </div>
        </header>
    );
}

export default Header;

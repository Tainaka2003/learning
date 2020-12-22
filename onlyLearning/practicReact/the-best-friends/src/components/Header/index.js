import React from 'react';
import './styles.css'
import Logo from "./Logo";

function Header() {
    return (
        <header className={"header"}>
            <div className={"headerLeftPart"}>
                <Logo />
                <div className={"headerCaption"}>
                    <span className={"headerCaptionName"}>
                        Крутая
                    </span>
                    <span className={"headerCaptionName"}>
                        музыка
                    </span>
                </div>
            </div>
            <div className={"headerCenterPart"}>
                <ul className={"navMenu"}>
                    <li className={"navElement"}><a className={"navAnchor"} href="#">История</a></li>
                    <li className={"navElement"}><a className={"navAnchor"} href="#">Хиты</a></li>
                    <li className={"navElement"}><a className={"navAnchor"} href="#">О нас</a></li>
                    <li className={"navElement"}><a className={"navAnchor"} href="#">Контакты</a></li>
                </ul>
            </div>
            <div className={"headerRightPart"}>
                <button className={"rightOffer"}>
                    Стать крутым
                </button>
            </div>
        </header>
    );
}

export default Header;

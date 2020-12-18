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
                        Лучшие
                    </span>
                    <span className={"headerCaptionName"}>
                        друзья
                    </span>
                </div>
            </div>
            <div className={"headerCenterPart"}>
                <ul className={"navMenu"}>
                    <li className={"navElement"}><a className={"navAnchor"} href="#">Новости</a></li>
                    <li className={"navElement"}><a className={"navAnchor"} href="#">Состав</a></li>
                    <li className={"navElement"}><a className={"navAnchor"} href="#">Проекты</a></li>
                    <li className={"navElement"}><a className={"navAnchor"} href="#">Другое</a></li>
                </ul>
            </div>
            <div className={"headerRightPart"}>
                <button className={"rightOffer"}>
                    Подружиться
                </button>
            </div>
        </header>
    );
}

export default Header;

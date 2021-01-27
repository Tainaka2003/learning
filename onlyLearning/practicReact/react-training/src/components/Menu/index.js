import React from "react";
import './style.css';

const Menu = () => {
    return (
        <nav className="nav">
            <a className={"anchor"} href="#">
                Проекты
            </a>
            <a className={"anchor"} href="#">
                Новости
            </a>
            <a className={"anchor"} href="#">
                Состав
            </a>
            <a className={"anchor"} href="#">
                Помощь
            </a>
        </nav>
    )
}

export default Menu;

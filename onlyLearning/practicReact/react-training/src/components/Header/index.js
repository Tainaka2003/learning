import React from "react";
import './style.css';

const Header = (props) => {
    return (
        <header className="header">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Your_name_movie_logo.svg/1200px-Your_name_movie_logo.svg.png" alt="logo"/>
            <button className="button">
                Проекты
            </button>
            <button className="button">
                Новости
            </button>
            <button className="button">
                Состав
            </button>
            <button className="button">
                Помощь
            </button>
        </header>
    )
}

export default Header;

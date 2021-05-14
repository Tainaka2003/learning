import React from "react";
import './style.css'

const HeroesItem = (props) => {
    return (
        <div className={"heroesItem"}>
            <div className={"heroWrap"}>
                <div className={"heroImg"}>
                    <div className={"heroImg2"}>
                        <img className={"img"} src={props.cover} alt="картинка"/>
                    </div>
                </div>
                <div className={"heroStart"}>
                    <p className={"persona"}>{props.name}</p>
                    <p className={"description"}>Возраст: {props.age}</p>
                    <p className={"description"}>Род деятельности: {props.did}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroesItem;

import React from "react";
import './style.css';

const ContentItem = (props) => {

    return (
        <div className={"contentItem"}>
            <div className={"contentWrap"}>
                <img className={"contentImg"} src={props.cover} alt="картинка"/>
            </div>
            <div className={"contentText"}>
                <p className={"paragraph"}>{props.name}</p>
                <p className={"paragraph"}>Сезон: {props.year}</p>
                <p className={"paragraph"}>Теги: {props.type}</p>
                <p className={"paragraph"}>Конкурсная оценка: {props.mark}</p>
                <p className={"description"}>{props.description}</p>
            </div>
        </div>
    )
}

export default ContentItem;

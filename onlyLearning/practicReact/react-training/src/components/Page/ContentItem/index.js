import React from "react";
import './style.css';

const ContentItem = (props) => {

    return (
        <div className={"contentItem"}>
            <div className={"contentImg"} />
            <div className={"contentText"}>
                <p className={"paragraph"}>{props.name}</p>
                <p className={"paragraph"}>Год: {props.year}</p>
                <p className={"paragraph"}>Жанр: {props.type}</p>
                <p className={"description"}>{props.description}</p>
            </div>
        </div>
    )
}

export default ContentItem;

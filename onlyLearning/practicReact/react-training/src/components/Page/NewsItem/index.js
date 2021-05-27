import React from "react";
import './style.css'

const NewsItem = (props) => {
    return (
        <div className={"newsWrap"}>
            <div className={"newsItem"}>
                <p className={"title"}>{props.date}</p>
                <p className={"paragraph"}>{props.message}</p>
            </div>
        </div>
    )
}

export default NewsItem;

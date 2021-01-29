import React from "react";
import './style.css'

const NewsItem = (props) => {
    return (
        <div className={"newsItem on"}>
            <div className={"newsText"}>
                <p className={"paragraph"}>{props.date}</p>
                <p className={"paragraph"}>{props.message}</p>
            </div>
        </div>
    )
}

export default NewsItem;

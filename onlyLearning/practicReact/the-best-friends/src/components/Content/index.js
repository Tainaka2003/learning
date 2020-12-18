import React from 'react';
import './styles.css'
import Illustration from "./Picture";


function Content() {
    return (
        <main className={"main"}>
            <div className={"mainLeftPart"}>
                <span className={"mainContentCaption"}>
                    Лучшие друзья всегда тебе помогут!
                </span>
                <span className={"mainContentText"}>
                    У нас есть, чем тебя можно удивить)
                </span>
                <div className={"mainButton"}>
                    <button className={"mainOffer"}>
                        К проектам
                    </button>
                </div>
            </div>
            <div className={"mainRightPart"}>
                <Illustration/>
            </div>
        </main>
    )
}

export default Content;
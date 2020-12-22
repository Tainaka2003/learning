import React from 'react';
import './styles.css'
import Illustration from "./Picture";


function Content() {
    return (
        <main className={"main"}>
            <div className={"mainLeftPart"}>
                <span className={"mainContentCaption"}>
                    Слушайте крутую музыку с нами!
                </span>
                <span className={"mainContentText"}>
                    Более тысячи человек уже оценили подборку самых интересных композиций. Попробуйте и Вы - и станете крутым!
                </span>
                <div className={"mainButton"}>
                    <button className={"mainOffer"}>
                        Стать крутым
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
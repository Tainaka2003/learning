import React, {Component} from "react"
import './styles.css'

function Card() {
    return (
        <div key={cards.name}>
            <img src={cards.img} alt="sport"/>
            <p>{cards.name}</p>
            <span>{cards.description}</span>
        </div>
    )
}

export default Card;
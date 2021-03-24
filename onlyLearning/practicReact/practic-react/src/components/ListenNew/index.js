import React from 'react'
import './style.css'

const ListenNew = (props) => {
    return <div className={"newMusic"}>
        <div className={"img"}>
            <img src="#" alt="#"/>
        </div>
        <p className={"name"}>
            {props.name}
        </p>
        <p className={"description"}>
            {props.type},{props.year}
        </p>
    </div>
}

export default ListenNew;

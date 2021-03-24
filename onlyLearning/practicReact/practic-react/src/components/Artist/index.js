import React from 'react'
import './style.css'

const Artist = (props) => {
    return <p className={"description"}>
            {props.description}
        </p>
}

export default Artist;

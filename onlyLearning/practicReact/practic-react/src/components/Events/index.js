import React from 'react'
import './style.css'

const Events = (props) => {
    return (
    <div className={"eventsItem"}>
        <div className={"date"}>
            <div className={"number"}>
                {props.number}
            </div>
            <div className={"month"}>
                {props.month}
            </div>
        </div>
        <div className={"city"}>
            {props.city}
        </div>
        <div className={"place"}>
            {props.place}
        </div>
    </div>
    )
}

export default Events;

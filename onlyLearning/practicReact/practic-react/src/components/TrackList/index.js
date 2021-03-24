import React from 'react'
import './style.css'

const TrackList = (props) => {
    return (
        <div className={"songs"}>
            <div className={"item"}>
                <div className={"count"}>
                    {props.count}
                </div>
                <div className={"title"}>
                    {props.title}
                </div>
                <div className={"feat"}>
                    {props.feat}
                </div>
                <div className={"duration"}>
                    {props.duration}
                </div>
            </div>
        </div>
    )
}

export default TrackList;

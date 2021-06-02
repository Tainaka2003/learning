import React from "react";
import './style.css'

const MemberItem = (props) => {
    return (
        <div className={"memberItem"}>
            <p className={"paragraph"}>{props.member}</p>
            <p className={"paragraph"}>{props.role}</p>
        </div>
    )
}

export default MemberItem;

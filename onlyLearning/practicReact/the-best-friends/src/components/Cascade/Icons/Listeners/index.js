import React, {Component} from "react";
import Listeners from "./listeners.svg";

export default class CascadeElement1 extends Component {
    render() {
        return (
            <div className="cascadeSvg">
                <img src={Listeners} className={"cascadeSvgImg"} alt="fireSpot"/>
            </div>
        );
    }
}
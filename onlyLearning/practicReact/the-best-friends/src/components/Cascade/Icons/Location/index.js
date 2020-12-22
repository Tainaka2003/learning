import React, {Component} from "react";
import Location from "./location.svg";

export default class CascadeElement2 extends Component {
    render() {
        return (
            <div className="cascadeSvg">
                <img src={Location} className={"cascadeSvgImg"} alt="fireSpot"/>
            </div>
        );
    }
}
import React, {Component} from "react";
import Vector from './Vector.svg'
import './styles.css'

export default class Logo extends Component {
    render() {
        return (
            <div className="headerLogo">
                <img src={Vector} className={"headerLogoImg"} alt="fireSpot"/>
            </div>
        );
    }
}
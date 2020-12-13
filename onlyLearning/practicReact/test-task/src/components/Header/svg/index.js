import React, {Component} from "react";
import Logo from './Logo.svg'
import './styles.css';

export default class Svg extends Component {
    render() {
        return (
            <div className="container">
                <img src={Logo} className={"logo"} alt="fireSpot"/>
            </div>
        );
    }
}
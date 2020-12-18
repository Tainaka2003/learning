import React, {Component} from "react";
import illustration from './Illustration.png'
import './styles.css'

export default class Illustration extends Component {
    render() {
        return (
            <div className="mainPicture">
                <img src={illustration} className={"mainImg"} alt="fireSpot"/>
            </div>
        );
    }
}
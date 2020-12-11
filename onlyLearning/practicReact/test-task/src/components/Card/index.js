import React, {Component} from "react"
import PropTypes from 'prop-types';
import './styles.css'

const Card = (props) => {
    const {
        img,
        name,
        description,
    } = props;

    return <div>
        <img src={img} alt="sport"/>
        <p>{name}</p>
        <span>{description}</span>
    </div>;
};

Card.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
};


export default Card;
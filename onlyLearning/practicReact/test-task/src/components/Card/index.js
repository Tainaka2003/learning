import React from "react"
import PropTypes from 'prop-types';
import './styles.css'

const Card = (props) => {
    const {
        img,
        name,
        isNew,
        description,
    } = props;

    return <div className={"json"}>
        <img className={"img"} src={img} alt="sport"/>
        <div className={"caption"}>
            <p className={"name"}>{name}</p>
            {isNew === true ? <p className={"isNew"}>New</p> : ``}
        </div>

        <span className={"description"}>{description}</span>
    </div>;
};

Card.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    isNew: PropTypes.string,
    description: PropTypes.string,
};


export default Card;
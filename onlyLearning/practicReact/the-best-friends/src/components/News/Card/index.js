import React from "react"
import PropTypes from 'prop-types';

const Card = (props) => {
    const {
        newsArticle
    } = props;

    return <div className={"json"}>
        <div className={"newsArticle"}>
            <p className={"name"}>{newsArticle}</p>
        </div>
    </div>;
};

Card.propTypes = {
    news: PropTypes.string
};


export default Card;
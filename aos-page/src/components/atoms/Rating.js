import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import "../../styles/atoms/Rating.css";

const Rating = ({ratingValue, votesValue}) => {
    const votes = "ocen";

    return (
        <div className="Rating">
            <div className="ratingContainer">
                <FontAwesomeIcon icon={faStar} className="star"/>
                <p> {ratingValue} </p>
            </div>
            <div className="reviewsContainer">
                <span> {votesValue} </span>
                <span> {votes} </span>
            </div>
        </div>
    );
}

export default Rating;
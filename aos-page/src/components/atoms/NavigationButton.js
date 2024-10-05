import React from "react";

import "../../styles/atoms/NavigationButton.css";

const NavigationButton = ({value, onClick}) => {

    return (
        <button className="NavigationButton" onClick={onClick}>{value}</button>
    );
}

export default NavigationButton;
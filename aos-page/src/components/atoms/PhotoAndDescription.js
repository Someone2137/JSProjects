import React from "react";

import "../../styles/atoms/PhotoAndDescription.css";

const PhotoAndDescription = ({image, name}) => {

    return (
        <div className="PhotoAndDescription">
            <div className="photo" style={{backgroundImage: `url(${image})`}}/>
            <p className="description">{name}</p>
        </div>
    );
}

export default PhotoAndDescription;

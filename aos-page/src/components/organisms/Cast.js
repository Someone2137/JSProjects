import React from "react";

import "../../styles/organisms/Cast.css";
import PhotoAndDescription from "../atoms/PhotoAndDescription";

const Cast = ({castData}) => {
    const h2Value = "Obsada serialu";
    return (
        <div className="Cast">
            <h2> {h2Value}</h2>
            <div className="mainContainer">
                {castData.map((member, index) => (
                    <PhotoAndDescription key={index} image={member.image} name={member.name} />
                ))}
            </div>
        </div>
    );
}

export default Cast;
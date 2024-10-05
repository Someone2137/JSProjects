import React from "react";

import "../../styles/organisms/VideoAndDescription.css";

const VideoAndDescription = ({video, description}) => {

    return (
        <div className="VideoAndDescription">
            <video className="video" controls="controls">
                <source src={video} type="video/mp4"/>
            </video>
            <div className="textContainer">
                <p> {description} </p>
            </div>
        </div>
    );
}

export default VideoAndDescription;
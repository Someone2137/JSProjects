import React from "react";
import {useNavigate} from "react-router-dom";
import { Helmet } from "react-helmet";

import "../../styles/pages/MindHunterPage.css";
import Rating from "../atoms/Rating";
import VideoAndDescription from "../organisms/VideoAndDescription";
import Cast from "../organisms/Cast";
import NavigationButton from "../atoms/NavigationButton";

const MindHunterPage = () => {
    const title = "Mindhunter";
    const pageTitle = "Mindhunter";
    const screeningYears = "2017 - 2019";
    const ratingValue = "8,0";
    const votesValue = "106 000";
    const description = "Agenci FBI Holden Ford i Bill Tench niestrudzenie próbują przeniknąć mroczne zakamarki umysłów przestępców, którzy dopuścili się przerażających zbrodni. Wspólnie z psycholog Wendy Carr wykorzystują przełomowe techniki analizy behawioralnej, aby dopaść seryjnych zabójców.";
    const navigate = useNavigate();
    const changePage = () => {
        navigate("/agentsOfShield");
    };

    const mindhunterCast = [
        {image: "/JonathanGroff.jpg", name: "Jonathan Groff"},
        {image: "/HoltMcCallany.jpg", name: "Holt McCallany"},
        {image: "/AnnaTorv.jpg", name: "Anna Torv"}
    ]

    return (
        <div className="MindHunterPage">
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <NavigationButton value="Zmień stronę" onClick={changePage}/>
            <h1> {pageTitle} </h1>
            <h3> {screeningYears} </h3>
            <Rating ratingValue={ratingValue} votesValue={votesValue}/>
            <VideoAndDescription video="/trailer2.mp4" description={description}/>
            <Cast castData={mindhunterCast}/>
        </div>
    );
}

export default MindHunterPage;
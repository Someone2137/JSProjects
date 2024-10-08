import React from "react";
import {useNavigate} from "react-router-dom";
import { Helmet } from "react-helmet";

import "../../styles/pages/AgentsOfShieldPage.css";
import Rating from "../atoms/Rating";
import VideoAndDescription from "../organisms/VideoAndDescription";
import Cast from "../organisms/Cast";
import NavigationButton from "../atoms/NavigationButton";

const AgentsOfShieldPage = () => {
    const title = "Agents of Shield";
    const pageTitle = "Agents of S.H.I.E.L.D";
    const screeningYears = "2013 - 2020";
    const changePageButtonText = "Zmień stronę";
    const ratingValue = "7,4";
    const votesValue = "28 113";
    const description = "Akcja serialu 'Agenci T.A.R.C.Z.Y.' rozpoczyna się tuż po wydarzeniach przedstawionych w filmie Jossa\n" +
        "                    Whedona 'Avengers'. Phil Coulson (Clark Gregg) - prawa ręka dyrektora organizacji T.A.R.C.Z.A.,\n" +
        "                    wraca do służby. Musi stworzyć zespół wyselekcjonowanych, oddanych agentów, których zadaniem będzie\n" +
        "                    wyjaśnianie dziwnych, nadzwyczajnych zjawisk i ochrona ludzkości przed nowymi zagrożeniami.\n" +
        "                    W drużynie Coulsona służą superszpieg Grant Ward (Brett Dalton), mistrzyni sztuk walki Melinda May\n" +
        "                    (Ming-Na Wen) oraz dwóch genialnych młodych naukowców - Jemma Simmons (Elizabeth Henstridge) i Leo\n" +
        "                    Fitz (Iain De Caestecker). Do zespołu dołącza również hakerka Sky (Chloe Bennet).";
    const navigate = useNavigate();
    const changePage = () => {
        navigate("/mindhunter");
    };

    const agentsCast = [
        { image: "/ChloeBennet.jpg", name: "Chloe Bennet" },
        { image: "/BrettDalton.jpg", name: "Brett Dalton" },
        { image: "/ElizabethHenstridge.jpg", name: "Elizabeth Henstridge" },
        { image: "/IainDeCaestecker.jpg", name: "Iain De Caestecker" },
        { image: "/MingNaWen.jpg", name: "Ming Na Wen" },
        { image: "/ClarkGregg.jpg", name: "Clark Gregg" },
    ];

    return (
        <div className="AgentsOfShieldPage">
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <NavigationButton value={changePageButtonText} onClick={changePage}/>
            <h1> {pageTitle} </h1>
            <h3> {screeningYears} </h3>
            <Rating ratingValue={ratingValue} votesValue={votesValue}/>
            <VideoAndDescription video="/trailer.mp4" description={description}/>
            <Cast castData={agentsCast}/>
        </div>
    );
}

export default AgentsOfShieldPage;
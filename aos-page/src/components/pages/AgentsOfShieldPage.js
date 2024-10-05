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
    const h1Value = "Agents of S.H.I.E.L.D";
    const h3Value = "2013 - 2020";
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
            <NavigationButton value="Zmień stronę" onClick={changePage}/>
            <h1> {h1Value} </h1>
            <h3> {h3Value} </h3>
            <Rating ratingValue="7,4" votesValue="28 113"/>
            <VideoAndDescription video="/trailer.mp4" description="Akcja serialu 'Agenci T.A.R.C.Z.Y.' rozpoczyna się tuż po wydarzeniach przedstawionych w filmie Jossa
                    Whedona 'Avengers'. Phil Coulson (Clark Gregg) - prawa ręka dyrektora organizacji T.A.R.C.Z.A.,
                    wraca do służby. Musi stworzyć zespół wyselekcjonowanych, oddanych agentów, których zadaniem będzie
                    wyjaśnianie dziwnych, nadzwyczajnych zjawisk i ochrona ludzkości przed nowymi zagrożeniami.
                    W drużynie Coulsona służą superszpieg Grant Ward (Brett Dalton), mistrzyni sztuk walki Melinda May
                    (Ming-Na Wen) oraz dwóch genialnych młodych naukowców - Jemma Simmons (Elizabeth Henstridge) i Leo
                    Fitz (Iain De Caestecker). Do zespołu dołącza również hakerka Sky (Chloe Bennet)."/>
            <Cast castData={agentsCast}/>
        </div>
    );
}

export default AgentsOfShieldPage;
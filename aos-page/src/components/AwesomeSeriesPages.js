import React from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import "../styles/AwesomeSeriesPages.css";
import AgentsOfShieldPage from "./pages/AgentsOfShieldPage";
import MindHunterPage from "./pages/MindHunterPage";

const AwesomeSeriesPages = () => {
    const router = createBrowserRouter([
        {
            path: "agentsOfShield",
            element: <AgentsOfShieldPage/>
        },
        {
            path: "mindhunter",
            element: <MindHunterPage/>
        }
    ]);

    return (
        <div className="AwesomeSeriesPages">
            <RouterProvider router={router}/>
        </div>
    );
}

export default AwesomeSeriesPages;
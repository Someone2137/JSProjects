import React, {useState} from "react";
import {Helmet} from "react-helmet";
import "../styles/CatsPage.css"

const CatsPage = () => {

    const title = "Koty"
    const pageTitle = "Ranking kotów z kawiarni Miau Cafe";
    const firstColumnHeaderValue = "Numer w rankingu";
    const secondColumnHeaderValue = "Imię kota";
    const thirdColumnHeaderValue = "Zdjęcie kota";
    const fourthColumnHeaderValue = "Liczba punktów";

    const cats = [
        {position: 1, name: "Tysio", image: "/Tysio.jpg", points: 8},
        {position: 2, name: 'Benio', image: '/Benio.jpg', points: 7},
        {position: 3, name: 'Oczko', image: '/Oczko.jpg', points: 6},
        {position: 4, name: 'Oczka', image: '/Oczka.jpg', points: 5},
        {position: 5, name: 'Oreo', image: '/Oreo.jpg', points: 4},
        {position: 6, name: 'Zosia', image: '/Zosia.jpg', points: 3},
        {position: 7, name: 'Kola', image: '/Kola.jpg', points: 2}
    ];

    const [catPoints, setCatPoints] = useState(cats);

    const decrementCatPoints = (index) => {
        const updatedCats = [...catPoints];
        if (updatedCats[index].points > 0) {
            updatedCats[index].points -= 1;
        }
        setCatPoints(updatedCats);
    }

    const incrementCatPoints = (index) => {
        const updatedCats = [...catPoints];
        if (updatedCats[index].points < 10){
            updatedCats[index].points += 1;
        }
        setCatPoints(updatedCats);
    }

    return (
        <div className="CatsPage">
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <h1>{pageTitle}</h1>
            <table>
                <thead>
                <tr>
                    <td>{firstColumnHeaderValue}</td>
                    <td>{secondColumnHeaderValue}</td>
                    <td>{thirdColumnHeaderValue}</td>
                    <td>{fourthColumnHeaderValue}</td>
                </tr>
                </thead>
                <tbody>
                {catPoints.map((cat, index) => (
                    <tr key={index}>
                        <td>{cat.position}</td>
                        <td>{cat.name}</td>
                        <td><img src={cat.image} alt={cat.name}/></td>
                        <td>
                            <button onClick={ () => incrementCatPoints(index)}>+</button>
                            {cat.points}/10
                            <button onClick={ () => decrementCatPoints(index)}>-</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default CatsPage;
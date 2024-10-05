import React from "react";
import { Helmet } from "react-helmet";
import "../styles/CatsPage.css"

const CatsPage = () => {
    const title = "Koty"
    const h1Value = "Ranking kotów z kawiarni Miau Cafe";
    const firstColumnHeaderValue = "Numer w rankingu";
    const secondColumnHeaderValue = "Imię kota";
    const thirdColumnHeaderValue = "Zdjęcie kota";
    const fourthColumnHeaderValue = "Liczba punktów";
    const cats = [
        { position: 1, name: "Tysio", image: "/Tysio.jpg", points: "8/10"},
        { position: 2, name: 'Benio', image: '/Benio.jpg', points: '7/10' },
        { position: 3, name: 'Oczko', image: '/Oczko.jpg', points: '6/10' },
        { position: 4, name: 'Oczka', image: '/Oczka.jpg', points: '5/10' },
        { position: 5, name: 'Oreo', image: '/Oreo.jpg', points: '4/10' },
        { position: 6, name: 'Zosia', image: '/Zosia.jpg', points: '3/10' },
        { position: 7, name: 'Kola', image: '/Kola.jpg', points: '2/10' }
    ];

    return (
        <div className="CatsPage">
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <h1>{h1Value}</h1>
            <table>
                <thead>
                    <tr>
                        <td> {firstColumnHeaderValue}</td>
                        <td> {secondColumnHeaderValue}</td>
                        <td> {thirdColumnHeaderValue}</td>
                        <td> {fourthColumnHeaderValue}</td>
                    </tr>
                </thead>
                <tbody>
                {cats.map((cat, index) => (
                    <tr key={index}>
                        <td>{cat.position}</td>
                        <td>{cat.name}</td>
                        <td><img src={cat.image} alt={cat.name}/></td>
                        <td>{cat.points}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default CatsPage;
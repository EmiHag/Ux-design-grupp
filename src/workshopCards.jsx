import React from "react";
import { Link } from 'react-router-dom'; // Importera Link-komponenten från react-router-dom
const WorkshopCards = () => {
    return (
        <>
        <div className="workshop-wrapper"> 
        <h1 id="workshoprubrik">Månadens workshop: Klimatförändring</h1>
        <div className="workshop-container">
            
            {/*Månadens workshop presenteras i boxar som är stylade i css, en box för varje ämne.*/}
            <Link to="/co2page" className="box" id="co2page">
                <img src="resource-scarcity-9137760_1280.jpg" alt="fossilbild" />
                <h2>Fossila bränslen</h2>
            </Link>

            <Link to="/globaltemperaturepage" className="box" id="globaltemperaturepage">
                <img src="global-warming-1494965_1280.jpg" alt="globalbild"/>
                <h2>Global temperatur</h2>
            </Link>

            <Link to="/glacierpage" className="box" id="glacierpage">
                <img src="earth-hour-4535985_1280.jpg" alt="glaciarbild"/>
                <h2>Glaciärer</h2>
            </Link>

            <Link to="/SeaLevelPage1" className="box" id="vatten">
                <img src="drop-of-water-578897_1280.jpg" alt="vattenbild"/>
                <h2>Vattennivåer</h2>
            </Link>

        {/*Eftersom länkarna inte ska vara klickbara så har vi valt att lägga tidigare workshops som en bild*/}
                <img id="tidigare-workshop" src="tidigare.workshop.png" alt="tidigare workshops"/>
</div>
        </div>
        </>
        
    );
};

export default WorkshopCards;
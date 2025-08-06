import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate för att navigera med knappen till olika vyer
import { Button } from 'react-bootstrap'; // Importerar knapp från react-bootstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importerar ikon till knappen
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function BackButton({ to }) { // Komponenten tar emot en to prop för destinationen
    const navigate = useNavigate();
    return ( // Funktionen returnerar en knapp från react-bootstrap
        <Button
            className="backward"
            variant="warning" style={{ backgroundColor: "#5D5656", color: "white", border: "none" }}
            onClick={() => (to ? navigate(to) : navigate(-1))} // Vid knapptryck navigeras användaren till definierad destination via 'to' ifall den används, annars ett steg bakåt
        >
            BAKÅT <FontAwesomeIcon icon={faArrowLeft} style={{ marginLeft: "8px", color: "white" }} /> {/*Ikon från fontawesome*/}
        </Button>
    );
}

export default BackButton;

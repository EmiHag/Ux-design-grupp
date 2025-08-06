import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate för att navigera med knappen till olika vyer
import { Button } from 'react-bootstrap'; // Importerar knapp från react-bootstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importerar ikon till knappen
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function SlutforButton({ to }) { // Komponenten tar emot en to prop för destinationen
    const navigate = useNavigate();
    return ( // Funktionen returnerar en knapp från react-bootstrap
        <Button className="forward" variant="success" onClick={() => navigate(to)}> {/*Vid knapptryck navigeras användaren till ny vy som definieras separat i den komponent som används*/}
            SLUTFÖR
            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "8px" }} /> {/*Ikon från fontawesome*/}
        </Button>
    );
}

export default SlutforButton;

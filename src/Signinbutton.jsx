import React from 'react';
import { useNavigate } from 'react-router-dom'; // Hanterar navigering
import { Button } from 'react-bootstrap'; // Importerar knapp från bootstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importerar ikon från Fontawesome
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

// Definierar knappen
function SigninButton({ to }) {
    const navigate = useNavigate();

    const handleClick = () => { // Funktion som hanterar klick på knappen
        if (to) { // Kontrollerar om en destination har angivits
            navigate(to); // Navigerar till destination om det finns en
        }
    };

    return (
        <Button
            className="signin"
            variant="success"
            type="submit"
            onClick={handleClick}
        >
            LOGGA IN
            <FontAwesomeIcon icon={faRightToBracket} style={{ marginLeft: "8px" }} />
        </Button>
    );
}

export default SigninButton;

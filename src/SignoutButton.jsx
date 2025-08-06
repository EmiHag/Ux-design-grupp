import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hanterar navigering
import Button from 'react-bootstrap/Button'; // Importerar knapp från bootstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importerar ikon från Fontawesome
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

// Definierar knappen
function SignoutButton() {
    const [isVisible, setIsVisible] = useState(true); // State för att styra knappens synlighet
    const navigate = useNavigate();

    const handleClick = () => { // Vid knapptryck rensas data, knappen döljs och användaren navigeras tillbaka till inloggningssidan
        localStorage.clear();
        setIsVisible(false);
        navigate('/signin');

    };

    if (!isVisible) { // Knappen visas inte om isVisible är false
        return null;
    }

    return ( // Returnerar knappen
        <>
            <Button
                className="signout"
                variant="success"
                type="submit"
                onClick={handleClick} // Vid knapptryck körs handleClick
            >
                LOGGA UT
                <FontAwesomeIcon icon={faRightFromBracket} style={{ marginLeft: "8px" }}>
                </FontAwesomeIcon>
            </Button>
        </>

    );
}

export default SignoutButton;
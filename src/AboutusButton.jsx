import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AboutusButton({ to }) {
    const navigate = useNavigate();

    const handleClick = () => { // Funktion som hanterar klick på knappen
        if (to) { // Kontrollerar om en destination har angivits
            navigate(to); // Navigerar till destination om det finns en
        }
    };
    return (
        <Button
            className="aboutus"
            variant="success"
            type="submit"
            onClick={handleClick}
        >
            OM OSS
        </Button>
    );
}

export default AboutusButton;

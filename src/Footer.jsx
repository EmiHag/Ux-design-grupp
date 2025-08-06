import React from 'react';
import { Link } from 'react-router-dom'; // Importerar link till navigationsmenyn i footern

export const Footer = () => { // Arrow function för footer
    return (

        <footer> {/*Anger sidans footer*/}
    <div className="footer">
        <div className="adress"> {/*Lista med kontaktuppgifter*/}
            <h3>Kontaktuppgifter</h3>
            <div className="adress-container">
                <div className="address-column">
                    <h4>Adress:</h4>
                    <p>Seniorakademin<br />Hattstigen 3<br />10012 Stockholm</p>
                </div>
                <div className="contact-column">
                    <h4>Telefonnummer:</h4>
                    <p>+4670-123 45 67</p>
                    <h4>Mail:</h4>
                    <p>info@seniorakademin.se</p>
                </div>
            </div>
        </div>
        <nav className="navlinks"> {/*Navigationsmeny med länkar som navigerar användaren till olika vyer i applikationen*/}
            <ul>
                <li><Link to="/Signin">Inloggning</Link></li>
                <li><Link to="/workshopCards">Workshop</Link></li>
                <li><Link to="/Aboutus">Om oss | Kontakt</Link></li>
            </ul>
        </nav>
        <div className="logo"> {/*Logo i footer*/}
            <img src="logogra.png" alt="Logotyp" />
        </div>
    </div>
</footer>
    );
}

export default Footer; 


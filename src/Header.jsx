import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'; //Importerar komponenter från react-bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importerar fontawesomebibliotek och ikoner som används
import { faRightToBracket, faCalendarDays, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() { // Funktion som returnerar headern
    return (
        <div style={{ backgroundColor: '#ffffff' }}>
            <div style={{ textAlign: 'center', padding: '10px 0' }}> {/*Logotyp i headern med länk till startsidan, centrerar innehållet och lägger till padding*/}
                <Link to="/start"><img src="logovit.png" alt="Logotyp" style={{ maxWidth: '150px', height: 'auto' }} /></Link>
            </div>
            <Navbar expand="lg" style={{ backgroundColor: '#146F41', height: '40px', padding: '0 20px' }}> {/*Navbar från React-Bootstrap*/}
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav style={{ width: '100%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <Nav.Link href="/Signin" style={{ color: 'white', padding: '10px 20px' }}><FontAwesomeIcon icon={faRightToBracket} alt="inloggning" style={{ marginRight: '8px' }} />INLOGGNING</Nav.Link> {/*Länk med ikon till inloggningssidan*/}
                            <Nav.Link href="/workshopCards" style={{ color: 'white', padding: '10px 20px' }}>
                                <FontAwesomeIcon icon={faCalendarDays} alt="kalender" style={{ marginRight: '8px' }} />
                                WORKSHOP
                            </Nav.Link> {/*Länk med ikon till workshopsidan*/}

                            <Nav.Link href="/Aboutus" style={{ color: 'white', padding: '10px 20px' }}><FontAwesomeIcon icon={faEnvelope} alt="brev" style={{ marginRight: '8px' }} />KONTAKT | OM OSS</Nav.Link> {/*Länk med ikon till kontakt / om oss sidan*/}
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
}

export default Header;
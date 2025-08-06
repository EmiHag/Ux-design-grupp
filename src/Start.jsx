import './App.css';
import React from "react";
import SigninButton from './Signinbutton.jsx';
import AboutusButton from './AboutusButton.jsx';
import { useNavigate } from 'react-router-dom';



const Homepage = () => {
    const navigate = useNavigate(); // Använder useNavigate för att enklare navigera till andra vyer
    return (
        <div className="homepage">
            <main>
                <div style={{ backgroundColor: '#ffffff' }}> {/* Logo med styling istället för header på startsidan */}
                    <div style={{ textAlign: 'center', padding: '10px 0' }}>
                        <img src="logovit.png" alt="Logotyp" style={{ maxWidth: '150px', height: 'auto' }} />
                    </div>
                </div>
                <div className="startimage">
                    <img src="seniorerstart.png" alt="pensionärspar" /> {/* Startsidans bild */}
                </div>
                <div className="textcontent"> {/* Textinnehållet på startsidan */}
                    <h1>Välkommen till Seniorakademin - en läroplattform för äldre!</h1>
                    <p>Välkommen till Seniorakademins webbplats!
                        Här har du möjlighet att lära dig om olika ämnen som sociala medier,
                        fysisk - och psykisk hälsa och klimatförändringar.

                        Vi lär oss tillsammans genom informativa workshops, quiz
                        och gemensamma diskussioner.
                        Är du intresserad kontakta oss för att anmäla dig och få tillgång till våra workshops.

                        Vi finns här för att hjälpa dig med alla frågor du kan ha.
                        Tack och lycka till med ditt lärande!
                    </p>

                    <div className="homepage-buttons"> {/* Importerar knapparna som navigerar till olika vyer*/}
                        <SigninButton to="/Signin" />
                        <AboutusButton to="/Aboutus" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Homepage;

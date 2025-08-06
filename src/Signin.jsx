import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hanterar navigationen
import SigninButton from './Signinbutton';

const SigninForm = () => { // Formulär för hantering av inloggningen
    const [username, setUsername] = useState(''); // Hanterar inmatning av användarnamn
    const [password, setPassword] = useState(''); // Hanterar inmatning av lösenord
    const navigate = useNavigate();

    const handleSubmit = (e) => { // Hanterar inskickande av formuläret
        e.preventDefault(); // Ser till att sidan inte laddas om vid inskickande av formuläret
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: 'none' }}>
            <h1>Logga in till Seniorakademin</h1>
            <form onSubmit={handleSubmit}> {/* Formulär */}
                <div style={{ marginBottom: '10px' }}>
                    {/* Inmatningsfält för användarnamn */}
                    <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', textAlign: 'left' }}>Användarnamn:</label>
                    <input
                        type="username"
                        id="username"
                        value={username} // Kopplar ihop state-variabeln till inmatningsfältet
                        onChange={(e) => setUsername(e.target.value)} // Uppdaterar state medans användaren skriver
                        required // Obligatoriskt fält
                        style={{ width: '100%', padding: '8px', backgroundColor: '#D9D9D9', border: 'none', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                      {/* Inmatningsfält för lösenord */}
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', textAlign: 'left' }}>Lösenord:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}  // Kopplar ihop state-variabeln till inmatningsfältet 
                        onChange={(e) => setPassword(e.target.value)} // Uppdaterar state medans användaren skriver
                        required // Obligatoriskt fält
                        style={{ width: '100%', padding: '8px', backgroundColor: '#D9D9D9', border: 'none', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginTop: '30px' }}>
                <SigninButton to="/workshopCards" /> {/* Importerar inloggningsknapp */}
                </div>
            </form>
        </div>
    );
};

export default SigninForm;
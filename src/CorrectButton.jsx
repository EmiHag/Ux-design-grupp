import React from 'react';

// Komponent för rättaknapp som anropas när användaren vill rätta sina svar
function CorrectButton({ onClick }) {
  return (
    // Button som triggar onClick-funktionen när användaren klickar på den
    <button type="button" onClick={onClick}>
      Rätta frågorna! {/* Texten på knappen */}
    </button>
  );
}

export default CorrectButton; // Exporterar komponenten så att den kan användas i andra delar av applikationen

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SlutforButton from './SlutforButton';
import BackButton from './BackButton';
import CorrectButton from './CorrectButton'; // Import av CorrectButton för att aktivera rättning av quizet
import './App.css';

function CO2Quiz() {
  // Definierar de korrekta svaren för varje fråga i quizet.
  const correctAnswers = {
    q1: 'b',
    q2: 'b',
    q3: 'a',
    q4: 'a',
    q5: 'a'
  };

  // State som lagrar användarens svar
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: ''
  });

  // State som kontrollerar om quizet är rättat och om feedback ska visas
  const [isCorrected, setIsCorrected] = useState(false);

  // Uppdaterar svar baserat på användarens val i radio-knappar
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value
    }));
  };

  // När användaren klickar på Rätta-knappen, sätts 'isCorrected' till true
  const checkAnswers = () => {
    setIsCorrected(true);
  };

  // Räknar antalet korrekta svar genom att jämföra användarens svar med de definierade korrekta svaren
  const countCorrectAnswers = () => {
    let correctCount = 0;
    for (const question in correctAnswers) {
      if (correctAnswers[question] === answers[question]) {
        correctCount++;
      }
    }
    return correctCount;
  };

  // Genererar en feedbackmeddelande baserat på antalet korrekta svar
  const getFeedbackMessage = () => {
    const correctCount = countCorrectAnswers();
    if (correctCount === 5) {
      return "Fantastiskt! Du fick alla rätt!";
    } else if (correctCount >= 3) {
      return "Bra jobbat! Du har fått de flesta rätt.";
    } else if (correctCount >= 1) {
      return "Det var en bra insats men det finns utrymme för förbättring.";
    } else {
      return "Försök igen! Du kan läsa igenom materialet och försöka en gång till.";
    }
  };

  // Returnerar en CSS-klass för att markera rätta och felaktiga svar efter att quizet är rättat
  const getAnswerClass = (question, answer) => {
    if (!isCorrected) return ''; // Ingen klass appliceras innan rättning
    if (answer === correctAnswers[question]) {
      return 'correct'; // Rätt svar får en "correct"-klass som kan användas för att ändra stil (t.ex. grön färg)
    } else if (answers[question] === answer) {
      return 'incorrect'; // Felaktiga svar får en "incorrect"-klass som kan användas för att ändra stil (t.ex. röd färg)
    }
    return ''; // Inga ändringar för alternativa svar
  };

  return (
    <div className="page">
      <div className="container-co2-page">
        <header className="header">
          <h1 className="heading">Quiz</h1>
        </header>

        <div className="main-content">
          <aside className="sidebar">
            <h2>Innehåll:</h2>
            {/* Sidomeny med länkar till olika sidor i quizet */}
            <ol className="sidebar-list">
              <li><Link to="/CO2Page">Vad är fossila bränslen?</Link></li>
              <li><Link to="/CO2Page2">Hur används fossila bränslen?</Link></li>
              <li><Link to="/CO2Page3">Klimatpåverkan från fossila bränslen</Link></li>
              <li><Link to="/CO2Page4">Alternativ till fossila bränslen</Link></li>
              <li><Link to="/CO2Page5">Globala åtgärder för att minska användningen</Link></li>
              <li><Link to="/CO2Quiz"><strong>Quiz</strong></Link></li>
            </ol>
          </aside>
             
          <section className="content-section">
            <div className="quiz-section">
              <form>
                {/* Dynamisk rendering av frågorna och svarsalternativen */}
                {[...Array(5)].map((_, i) => {
                  const questionNumber = `q${i + 1}`;
                  const questionText = [ // Frågor som ska visas
                    "Vad är fossila bränslen?",
                    "Vilket är ett vanligt sätt att använda fossila bränslen?",
                    "Vad är en effekt av förbränning av fossila bränslen?",
                    "Vilket är ett alternativ till fossila bränslen?",
                    "Vad är syftet med Parisavtalet?"
                  ];
                  const options = [ // Alternativ för varje fråga
                    ["a) Material från levande träd och buskar", "b) Organiskt material som lagrats i miljontals år", "c) Energi från solen"],
                    ["a) Tillverka solpaneler", "b) Köra bilar och värma hus", "c) Bygga vägar"],
                    ["a) Det släpper ut koldioxid som bidrar till global uppvärmning", "b) Det gör att temperaturen på jorden sjunker", "c) Det förbättrar luftkvaliteten"],
                    ["a) Vindkraft", "b) Bensin", "c) Plast"],
                    ["a) Att minska användningen av fossila bränslen och begränsa klimatförändringarna", "b) Att bygga fler kraftverk som använder kol", "c) Att göra bensin billigare"]
                  ];

                  return (
                    <div className="question" key={i}>
                      <p>Fråga {i + 1}: {questionText[i]}</p>
                      {/* Renderar varje svarsalternativ som en radio-knapp */}
                      {options[i].map((option, index) => (
                        <label
                          key={index}
                          className={getAnswerClass(questionNumber, String.fromCharCode(97 + index))}
                        >
                          <input
                            type="radio"
                            name={questionNumber}
                            value={String.fromCharCode(97 + index)}
                            checked={answers[questionNumber] === String.fromCharCode(97 + index)} // Kontrollera om användaren har valt detta alternativ
                            onChange={handleChange} // Hantera ändring av svar
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  );
                })}
              </form>

              {/* Korrekt knapp som rättar quizet */}
              <CorrectButton onClick={checkAnswers} />

              {/* Visa resultat efter att quizet rättats */}
              {isCorrected && (
                <div className="result">
                  <h2>Resultat</h2>
                  <p>Du fick {countCorrectAnswers()} av 5 rätt.</p>
                  <p>{getFeedbackMessage()}</p>
                </div>
              )}

              {/* Navigeringsknappar som länkar framåt eller bakåt */}
              <div className="navigation-buttons">
                <BackButton to="/CO2Page5" />
                <SlutforButton to="/WorkshopCards" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CO2Quiz;

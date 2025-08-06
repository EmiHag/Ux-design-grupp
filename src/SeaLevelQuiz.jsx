import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SlutforButton from './SlutforButton';
import BackButton from './BackButton';
import CorrectButton from './CorrectButton';
import './App.css';

function SeaLevelQuiz() {
  // Definierar de korrekta svaren för varje fråga i quizet
  const correctAnswers = {
    q1: 'a',
    q2: 'b',
    q3: 'b',
    q4: 'c',
    q5: 'b',
  };

  // State som lagrar användarens svar
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
  });

  // State som kontrollerar om quizet är rättat och om feedback ska visas
  const [isCorrected, setIsCorrected] = useState(false);

  // Uppdaterar svar baserat på användarens val i radio-knappar
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
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
      return 'Fantastiskt! Du fick alla rätt!';
    } else if (correctCount >= 3) {
      return 'Bra jobbat! Du har fått de flesta rätt.';
    } else if (correctCount >= 1) {
      return 'Det var en bra insats, men det finns utrymme för förbättring.';
    } else {
      return 'Försök igen! Du kan läsa igenom materialet och försöka en gång till.';
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
      <div className="container-sealevel-page">
        <header className="header">
          <h1 className="heading">Quiz</h1>
        </header>
        <div className="main-content">
          <aside className="sidebar">
            <h2>Innehåll:</h2>
            {/* Sidomeny med länkar till olika sidor i quizet */}
            <ol className="sidebar-list">
              <li>
                <Link to="/SeaLevelPage1">Varför stiger vattennivåerna?</Link>
              </li>
              <li>
                <Link to="/SeaLevelPage2">Landhöjningen påverkar havsnivån</Link>
              </li>
              <li>
                <Link to="/SeaLevelPage3">Tillfälligt förhöjda havsnivåer</Link>
              </li>
              <li>
                <Link to="/SeaLevelPage4">Klimatets påverkan på framtiden</Link>
              </li>
              <li>
                <Link to="/SeaLevelPage5">Vattennivån i sjöar</Link>
              </li>
              <li>
                <Link to="/SeaLevelQuiz">
                  <strong>Quiz</strong>
                </Link>
              </li>
            </ol>
          </aside>

          <section className="content-section">
            <div className="quiz-section">
              <form>
                {/* Dynamisk rendering av frågorna och svarsalternativen */}
                {[...Array(5)].map((_, i) => {
                  const questionNumber = `q${i + 1}`;
                  const questionText = [
                    'Vad kallas det när havet värms upp och expanderar?',
                    'Vad är landhöjningen?',
                    'Vad kan tillfälligt förhöjda havsnivåer orsakas av?',
                    'Hur mycket har vattennivån i Sverige stigit sedan 1800-talets slut?',
                    'Vad kan höga vattenstånd orsaka?',
                  ];
                  const options = [
                    [
                      'a) Termisk expansion',
                      'b) Landhöjning',
                      'c) Vågutbredning',
                    ],
                    [
                      'a) Att trädgårdslandet skördas',
                      'b) Att jordskorpan återgår till sitt jämviktsläge',
                      'c) Att havsnivån stiger snabbare än normalt',
                    ],
                    [
                      'a) Vulkanutbrott',
                      'b) Stormar och lågtryck',
                      'c) Fossila utsläpp',
                    ],
                    ['a) Ca 10 cm', 'b) Ca 20 cm', 'c) Ca 15 cm'],
                    [
                      'a) Jordbävning',
                      'b) Översvämningar',
                      'c) Dricksvattenförsöjning',
                    ],
                  ];

                  return (
                    <div className="question" key={i}>
                      <p>
                        Fråga {i + 1}: {questionText[i]}
                      </p>
                      {/* Renderar varje svarsalternativ som en radio-knapp */}
                      {options[i].map((option, index) => (
                        <label
                          key={index}
                          className={getAnswerClass(
                            questionNumber,
                            String.fromCharCode(97 + index)
                          )}
                        >
                          <input
                            type="radio"
                            name={questionNumber}
                            value={String.fromCharCode(97 + index)}
                            checked={
                              answers[questionNumber] ===
                              String.fromCharCode(97 + index)
                            }
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

              {/* Navigeringsknappar som länkar användaren vidare eller bakåt */}
              <div className="navigation-buttons">
                <BackButton to="/SeaLevelPage5" />
                <SlutforButton to="/WorkshopCards" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SeaLevelQuiz;

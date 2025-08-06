import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SlutforButton from './SlutforButton';
import BackButton from './BackButton';
import CorrectButton from './CorrectButton';
import './App.css';

function GlacierQuiz() {
  // Definierar de korrekta svaren för varje fråga i quizet
  const correctAnswers = {
    q1: 'b',
    q2: 'c',
    q3: 'a',
    q4: 'a',
    q5: 'a',
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
      return 'Det var en bra insats men det finns utrymme för förbättring.';
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
      <div className="container-Glacier-page">
        <header className="header">
          <h1 id="heading">Quiz</h1>
        </header>

        <div className="main-content">
          <aside className="sidebar">
            <h2>Innehåll:</h2>
            {/* Sidomeny med länkar till olika sidor i quizet */}
            <ol className="sidebar-list">
              <li><Link to="/GlacierPage">Vad är glaciärer?</Link></li>
              <li><Link to="/GlacierPage2">Olika typer av glaciärer</Link></li>
              <li><Link to="/GlacierPage3">Världens största sötvattenreserv</Link></li>
              <li><Link to="/GlacierPage4">Glaciärernas rörelse</Link></li>
              <li><Link to="/GlacierPage5">Klimatförändring</Link></li>
              <li><Link to="/GlacierQuiz"><strong>Quiz</strong></Link></li>
            </ol>
          </aside>

          <section className="content-section">
            <div className="quiz-section">
              <form>
                {/* Dynamisk rendering av frågorna och svarsalternativen */}
                {[...Array(5)].map((_, i) => {
                  const questionNumber = `q${i + 1}`;
                  const questionText = [
                    'Vad är en glaciär?',
                    'Vad är specifikt för en dalglaciär?',
                    'Glaciärer är världens största och viktigaste sötvatten reserv. Hur mycket rymmer dem?',
                    'Vilka två sätt kan glaciärer röra sig på?',
                    'Enligt forskare förutspås över hälften av världens glaciärer försvinna trots att den globala uppvärmningen hålls under 1.5 grader celsius. När tror forskarna att det kommer vara borta?',
                  ];
                  const options = [
                    [
                      'a) En stor skål med glass',
                      'b) En ismassa som skapas av snö som komprimeras under lång tid',
                      'c) Vatten som rinner ner för ett berg',
                    ],
                    [
                      'a) Är en glaciär som ligger i en gryta- eller skålformad fördjupning',
                      'b) Är glaciärer som breder ut sig i låglandsområden',
                      'c) Är en glaciär som flyter fram genom dalgång och påverkar landskapet genom nötning',
                    ],
                    [
                      'a) 27 miljoner kubikkilometer',
                      'b) 30 miljoner kubikkilometer',
                      'c) 30 miljoner miljarder kubikmeter',
                    ],
                    [
                      'a) Intern rörelse och basal glidning',
                      'b) Basal rörelse och intern glidning',
                      'c) Kana och glida',
                    ],
                    ['a) 2100', 'b) 2075', 'c) 2095'],
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

              {/* Navigeringsknappar som länkar användaren framåt eller bakåt */}
              <div className="navigation-buttons">
                <BackButton to="/GlacierPage5" />
                <SlutforButton to="/WorkshopCards" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default GlacierQuiz;

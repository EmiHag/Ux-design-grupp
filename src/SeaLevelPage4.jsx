import React from 'react'; 
import { Link } from 'react-router-dom'; // Importera Link från react-router-dom för navigering
import BackButton from './BackButton';
import ForwardButton from './ForwardButton';
import './App.css'; 

function SeaLevelPage4() {

    // Rendera JSX-strukturen för sidan
    return (
        <div className="page">
            <div className="container-sealevel-page">
                <header className="header">
                    <h1 className="heading">Klimatets påverkan på framtiden</h1>

                </header>
                <div className="main-content">
                    <aside className="sidebar">  {/*Sidebar med länkar i en lista för att navigera mellan workshopsidorna*/}
                        <h2>Innehåll:</h2>
                        <ol className="sidebar-list">
                            <li><Link to="/SeaLevelPage1">Varför stiger vattennivåerna?</Link></li>
                            <li><Link to="/SeaLevelPage2">Landhöjningen påverkar havsnivån</Link></li>
                            <li><Link to="/SeaLevelPage3">Tillfälligt förhöjda havsnivåer</Link></li>
                            <li><Link to="/SeaLevelPage4"><strong>Klimatets påverkan på framtiden</strong></Link></li>
                            <li><Link to="/SeaLevelPage5">Vattennivån i sjöar</Link></li>
                            <li><Link to="/SeaLevelQuiz">Quiz</Link></li>
                        </ol>
                    </aside>


                    <section className="content-section"> {/*Text och bildinnehåll på sidan*/}
  <article>
    <div className="content-wrapper">
      <div className="content-text">
        <p>
          Nu stiger havet snabbare än vad det gjort på flera tusentals år med en markant skillnad under de senaste årtiondena. I Sverige har vattennivån stigit cirka 10 cm på 40 år och 15 cm sedan 1800-talets slut.
          Nivåerna hade kunnat vara mycket högre om det inte vore för landhöjningen.
        </p>
        <h2>Fossila utsläpp påverkar medelvattenståndet</h2>
        <p>
          Enligt den globala data som samlades mellan åren 1880 och 2013 har den globala medelhavsnivån ökat med cirka 51 mm.
          Det globala medelvattenståndet kommer troligen att stiga 28-55 cm till år 2100 beroende på om fossila utsläpp kommer att minska eller öka. Vid mycket höga halter utsläpp kan nivån närma sig 2 meter till år 2100.
        </p>
      </div>
      <div className="image-container">
      <img src="/fossila utsläpp.jpg" alt="fossila utsläpp" className="rightside-image" />
      <p>Bildtext: Fossila utsläppen är en av orsakerna till att medelvattenståndet ökar</p>
      </div>
    </div>
  </article>


                        <div className="navigation-buttons"> {/*Importerar fram- och bakåtknapp för att navigera mellan sidorna*/}
                            <BackButton to="/SeaLevelPage3" />
                            <ForwardButton to="/SeaLevelPage5" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default SeaLevelPage4; // Exportera komponenten för användning i andra delar av appen
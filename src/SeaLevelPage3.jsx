import React from 'react'; 
import { Link } from 'react-router-dom'; // Importera Link från react-router-dom för navigering
import BackButton from './BackButton';
import ForwardButton from './ForwardButton';


import './App.css'; 

function SeaLevelPage3() {

    // Rendera JSX-strukturen för sidan
    return (
        <div className="page">
            <div className="container-sealevel-page">
                <header className="header">
                    <h1 className="heading">Tillfälligt förhöjda havsnivåer</h1>

                </header>
                <div className="main-content">
                    <aside className="sidebar"> {/*Sidebar med länkar i en lista för att navigera mellan workshopsidorna*/}
                        <h2>Innehåll:</h2>
                        <ol className="sidebar-list">
                            <li><Link to="/SeaLevelPage1">Varför stiger vattennivåerna?</Link></li>
                            <li><Link to="/SeaLevelPage2">Landhöjningen påverkar havsnivån</Link></li>
                            <li><Link to="/SeaLevelPage3"><strong>Tillfälligt förhöjda havsnivåer</strong></Link></li>
                            <li><Link to="/SeaLevelPage4">Klimatets påverkan på framtiden</Link></li>
                            <li><Link to="/SeaLevelPage5">Vattennivån i sjöar</Link></li>
                            <li><Link to="/SeaLevelQuiz">Quiz</Link></li>
                        </ol>
                    </aside>



                    <section className="content-section"> {/*Text och bildinnehåll på sidan*/}
                        <article>
                            <p>
                                Stormar och lågtryck kan orsaka snabba, tillfälliga höjningar av vattenståndet till havs, ibland över en och en halv meter över medelvattennivån. Detta kan skapa problem för både landbaserad verksamhet och sjöfart.

                                Längs Sveriges kuster inträffar sådana höjningar främst
                                under höst och vinter. Om medelvattenståndet stiger i framtiden kommer även nivåerna vid högvattenhändelser att bli högre.

                            </p>
                        </article>

                        <article>
                            <img src="/storm.jpg" alt="storm på havet" className="content-image"/>
                            <p>Bildtext: Stormar till havs kan göra att havsnivån stiger tillfälligt</p>
                        </article>

                        <div className="navigation-buttons"> {/*Importerar fram- och bakåtknapp för att navigera mellan sidorna*/}
                            <BackButton to="/SeaLevelPage2" />
                            <ForwardButton to="/SeaLevelPage4" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default SeaLevelPage3; // Exportera komponenten för användning i andra delar av appen
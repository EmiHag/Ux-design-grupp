import React from 'react'; 
import { Link } from 'react-router-dom'; // Importera Link från react-router-dom för navigering
import BackButton from './BackButton';
import ForwardButton from './ForwardButton';


import './App.css'; 

function SeaLevelPage2() {

    // Rendera JSX-strukturen för sidan
    return (
        <div className="page">
            <div className="container-sealevel-page">
                <header className="header">
                    <h1 className="heading">Landhöjningen påverkar havsnivån</h1>

                </header>
                <div className="main-content">
                    <aside className="sidebar"> {/*Sidebar med länkar i en lista för att navigera mellan workshopsidorna*/}
                        <h2>Innehåll:</h2>
                        <ol className="sidebar-list">
                            <li><Link to="/SeaLevelPage1">Varför stiger vattennivåerna?</Link></li>
                            <li><Link to="/SeaLevelPage2"><strong>Landhöjningen påverkar havsnivån</strong></Link></li>
                            <li><Link to="/SeaLevelPage3">Tillfälligt förhöjda havsnivåer</Link></li>
                            <li><Link to="/SeaLevelPage4">Klimatets påverkan på framtiden</Link></li>
                            <li><Link to="/SeaLevelPage5">Vattennivån i sjöar</Link></li>
                            <li><Link to="/SeaLevelQuiz">Quiz</Link></li>
                        </ol>
                    </aside>


                    <section className="content-section"> {/*Text och bildinnehåll på sidan*/}
  <article className="content-wrapper">
    <div className="content-text">
      <h2>Vad är landhöjningen?</h2>
      <p>
        Nivåerna skiljer sig åt på olika platser på grund av landhöjningen. Landhöjningen innebär att jordskorpan
        återgår till sitt jämviktsläge. Under istiden, som började för ungefär 110 000 år sedan, täcktes jorden av
        ett kilometertjockt islager. Isen tryckte ner jordskorpan. När isen började smälta för cirka 20 000 år
        sedan lättade trycket och landet började höja sig. Det fenomenet kallas för landhöjning.
      </p>
    </div>
    <div className="image-container">
      <img src="/fran-havsbotten-till-lerslatt_310.gif" alt="Från havsbotten till lerslätt" className="rightside-image"/>
      <p>Bildtext: Ett område som har förändrats från havsbotten till lerslätt. Bild: Anna Åberg, SGU</p>
    </div>
  </article>

  <article className="content-wrapper">
    <div className="content-text">
      <h2>Vattennivåer och landhöjning i Sverige</h2>
      <p>
        Ibland kan vattennivåerna vara lägre än på andra platser där landhöjningen är högre, som exempelvis
        Norrlandskusten i Sverige, till skillnad mot söderut där vattenhöjningen är högre än landhöjningen.
        Men när klimatet blir allt varmare i snabbare takt hotas även de tidigare opåverkade platserna av
        förhöjda vattennivåer.
      </p>
    </div>
    </article>
    <div>
      <img src="/landhöjning.jpg" alt="landhöjning" className='content-image' />
      <p>Bildtext: Följder av landhöjningen. Bild: Agnes Säterberg</p>
    </div>
                        <div className="navigation-buttons"> {/*Importerar fram- och bakåtknapp för att navigera mellan sidorna*/}
                            <BackButton to="/SeaLevelPage1" />
                            <ForwardButton to="/SeaLevelPage3" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default SeaLevelPage2; 
import React from 'react'; 
import { Link } from 'react-router-dom'; // Importera Link från react-router-dom för navigering
import BackButton from './BackButton';
import ForwardButton from './ForwardButton';
import './App.css'; 

function SeaLevelPage5() {

  return (
    <div className="page">
      <div className="container-sealevel-page">
        <header className="header">
          <h1 className="heading">Vattennivån i sjöar</h1>
        </header>
        <div className="main-content">
          <aside className="sidebar"> {/*Sidebar med länkar i en lista för att navigera mellan workshopsidorna*/}
            <h2>Innehåll:</h2>
            <ol className="sidebar-list">
              <li><Link to="/SeaLevelPage1">Varför stiger vattennivåerna?</Link></li>
              <li><Link to="/SeaLevelPage2">Landhöjningen påverkar havsnivån</Link></li>
              <li><Link to="/SeaLevelPage3">Tillfälligt förhöjda havsnivåer</Link></li>
              <li><Link to="/SeaLevelPage4">Klimatets påverkan på framtiden</Link></li>
              <li><Link to="/SeaLevelPage5"><strong>Vattennivån i sjöar</strong></Link></li>
              <li><Link to="/SeaLevelQuiz">Quiz</Link></li>
            </ol>
          </aside>

          <section className="content-section"> {/*Text och bildinnehåll på sidan*/}
            <article className="content-wrapper">
              <div className="content-text">
                <p>
                  Vattennivåerna i sjöar påverkas av tillrinning, avrinning, nederbörd och avdunstning.
                  Reglering, särskilt i älvar för kraftproduktion, kan också styra nivåerna.
                </p>

              <img src="/regn.jpg" alt="Regn" className="content-image" />
              <p>Bildtext: Nederbörd är en faktor som påverkar vattennivån i sjöarna</p>
              </div>
      
            </article>

            <article className="content-wrapper">
              <div className="content-text">
                <h2>Vattennivåerna påverkar samhället</h2>
                <p>
                  Höga vattenstånd kan orsaka översvämningar som påverkar samhällen, jordbruk och elförsörjning.
                  Låga nivåer kan i sin tur påverka strandlinjen, sjöfart och dricksvattenförsörjning.
                </p>
               
                <img src="/översvämning.jpg" alt="Översvämning" className="content-image" />
                <p>Bildtext: Förhöjda vattennivåer kan orsaka översvämning</p>
                <img src="/dricksvatten.jpg" alt="Dricksvatten" className="content-image" />
                <p>Bildtext: För låga vattennivåer kan påverka dricksvattenförsörjningen</p>
              </div>
              
            
            
            </article>

            <article className="content-wrapper">
              <div className="content-text">
                <h2>Årstiderna kan påverkas av klimatförändringen</h2>
                <p>
                  I framtida klimatförändringar kan vissa sjöar få högre nivåer medan andra, särskilt i sydöstra Sverige,
                  kan drabbas av lågvatten, med förändrade årstidsvariationer som följd.
                </p>
              </div>
              <div className="image-container">
                <img src="/dimma.jpg" alt="Dimma" className="rightside-image" />
                <p>Bildtext: Klimatförändringen kan leda till att vattennivån i sjöar påverkas</p>
              </div>
            </article>

            <div className="navigation-buttons"> {/*Importerar fram- och bakåtknapp för att navigera mellan sidorna*/}
              <BackButton to="/SeaLevelPage4" />
              <ForwardButton to="/SeaLevelQuiz" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SeaLevelPage5;

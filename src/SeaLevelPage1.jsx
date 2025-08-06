import React from 'react'; 
import { Link } from 'react-router-dom'; // Importera Link från react-router-dom för navigering
import BackButton from './BackButton';
import ForwardButton from './ForwardButton';

import './App.css'; 
import SeaLevelChart from './WaterlevelChart';

function SeaLevelPage1() {
    
    // Rendera JSX-strukturen för sidan
    return (
       <div className="page">
            <div className="container-sealevel-page">
                <header className="header">
                    <h1 className="heading">Varför stiger vattennivåerna?</h1>

                </header>
                <div className="main-content">
                    <aside className="sidebar"> {/*Sidebar med länkar i en lista för att navigera mellan workshopsidorna*/}
                        <h2>Innehåll:</h2>
                        <ol className="sidebar-list">
                            <li><Link to="/SeaLevelPage1"><strong>Varför stiger vattennivåerna?</strong></Link></li>
                            <li><Link to="/SeaLevelPage2">Landhöjningen påverkar havsnivån</Link></li>
                            <li><Link to="/SeaLevelPage3">Tillfälligt förhöjda havsnivåer</Link></li>
                            <li><Link to="/SeaLevelPage4">Klimatets påverkan på framtiden</Link></li>
                            <li><Link to="/SeaLevelPage5">Vattennivån i sjöar</Link></li>
                            <li><Link to="/SeaLevelQuiz">Quiz</Link></li>
                        </ol>
                    </aside>

                    <section className="content-section"> {/*Text och bildinnehåll på sidan*/}
    <article>
    
    
                <p>
                    En stigande medelhavsnivå beror mestadels på att klimatet blir varmare, vilket i sin tur
                    värmer upp havet och det expanderar, det kallas termisk expansion.
                    Smältande glaciärer och stora inlandsisar är också en bidragande faktor till att den globala havsnivån stiger. 
                    Det kommer att pågå i flera hundratals år framöver och oavsett om den globala uppvärmningen skulle begränsas några få grader, 
                    så kommer havet fortfarande att stiga, då det reagerar långsammare än atmosfären.
                </p>
           
  

</article>
<article>
       
                <h2>Historiska förändringar av havsnivån</h2>
                <div className="content-wrapper">
            <div className="content-text">
                <p>
                    Enligt tidigare mätningsdata har den globala medelhavsnivån, som även förkortas GMSL, stigit över tid. 
                    År 1880 var havsnivån -158,7 mm under referensnivån och den har stigit succesivt fram till idag till följd av den globala uppvärmningen.
                    De senaste uppgifterna för 2013 visar att havsnivån är cirka -107,8 mm under referensnivån.
                </p>
                </div>
                <div className="image-container">
                    <img src="glaciar.jpg" alt="smältande glaciärer" className="rightside-image" />
                    <p>Bildtext: Glaciärerna smälter till följd av den globala uppvärmningen</p>
                </div>
            </div>
        
    </article>

    <SeaLevelChart /> {/*Importerar diagrammet med data från API */}

    <div className="navigation-buttons"> {/*Importerar fram- och bakåtknapp för att navigera mellan sidorna*/}
        <BackButton to="/workshopCards" />
        <ForwardButton to="/SeaLevelPage2" />
    </div>
</section>

             </div>
          </div>
        </div>
    );
}

export default SeaLevelPage1; 
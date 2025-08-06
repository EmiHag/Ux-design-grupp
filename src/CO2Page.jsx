import React from 'react'; // Importera React och hooks (useState) för att hantera komponentens tillstånd
import { Link} from 'react-router-dom'; // Importera navigeringsverktyg från react-router-dom
import ForwardButton from './ForwardButton'; // Importera komponent för navigering framåt
import BackButton from './BackButton'; // Importera komponent för navigering bakåt

import './App.css'; // Importera CSS-stilar 
import CO2Chart from './CO2Chart'; // Importera komponent för att visa ett diagram över koldioxidutsläpp

  // Rendera JSX-strukturen för sidan
function CO2Page() {
  return (
    <div className="page"> 
      <div className="container-co2-page"> 
        <header className="header"> 
          <h1 className="heading">Vad är fossila bränslen?</h1> 
        </header>

        <div className="main-content"> {/* Innehållscontainer för sidomeny och huvudinnehåll */}
          <aside className="sidebar"> 
            <h2>Innehåll:</h2>
            <ol className="sidebar-list"> 
              <li><Link to="/CO2Page"><strong>Vad är fossila bränslen?</strong></Link></li>
              <li><Link to="/CO2Page2">Hur används fossila bränslen?</Link></li>
              <li><Link to="/CO2Page3">Klimatpåverkan från fossila bränslen</Link></li>
              <li><Link to="/CO2Page4">Alternativ till fossila bränslen</Link></li>
              <li><Link to="/CO2Page5">Globala åtgärder för att minska användningen</Link></li>
              <li><Link to="/CO2Quiz">Quiz</Link></li>
            </ol>
          </aside>

          {/* Huvudinnehåll */}
          <section className="content-section">
            <article> 
              <div className="content-wrapper">
                <div className="content-text"> 
                  <p>
                    Fossila bränslen är energi som kommer från organiskt material, som exempelvis växter och djur, som lagrats under miljontals år i jordens skorpa. Genom högt tryck och värme omvandlas detta material till kol, olja och naturgas.
                  </p>
                  <ul> {/* Lista med typer av fossila bränslen */}
                    <li><strong>Olja:</strong> Flytande kolväten som används främst till bränslen och plasttillverkning.</li>
                    <li><strong>Kol:</strong> En fast energikälla som används i industrin och för elproduktion.</li>
                    <li><strong>Naturgas:</strong> Ett gasformigt bränsle som används för uppvärmning och elproduktion.</li>
                  </ul>
                  <p>
                    Fossila bränslen är icke-förnybara, vilket innebär att de tar miljontals år att bildas och därmed inte kan förnyas i människans tidsskala.
                  </p>
                </div>
                <div className="image-container"> 
                  <img src="Coal.jpg" alt="Glödande Kol" className="rightside-image" />
                  <p>Bildtext: AI genererad bild på glödande kol</p>
                </div>
              </div>
            </article>

           
            <article>
              <h2>Hur koldioxidutsläppen från fossila bränslen har ökat</h2>
              <CO2Chart /> {/* Diagram som visualiserar utsläpp */}
              <p>
                Diagrammet visar hur mycket koldioxid vi människor släpper ut i luften på grund av att vi använder fossila bränslen som kol, olja och naturgas. För länge sedan på 1700-talet var utsläppen mycket små eftersom det inte fanns några fabriker, bilar eller eldrivna maskiner.
              </p>
              <p>
                När vi började använda maskiner och fabriker i större skala under 1800-talet ökade utsläppen, och under 1900-talet sköt de i höjden. Efter andra världskriget började ännu fler länder använda olja och naturgas för energi, och våra utsläpp blev mycket större. Idag släpper vi ut ungefär 34 miljarder ton koldioxid varje år, vilket bidrar till att klimatet blir varmare.
              </p>
            </article>

            {/* Navigeringsknappar */}
            <div className="navigation-buttons">
              <BackButton to="/WorkshopCards" />
              <ForwardButton to="/CO2Page2" /> 
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CO2Page; // Exportera komponenten för att användas i andra delar av applikationen

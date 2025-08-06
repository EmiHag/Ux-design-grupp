import React from 'react'; // Importera React och hooks (useState) för att hantera komponentens tillstånd
import { Link } from 'react-router-dom'; // Importera navigeringsverktyg från react-router-dom
import ForwardButton from './ForwardButton'; // Importera komponent för navigering framåt
import BackButton from './BackButton'; // Importera komponent för navigering bakåt


import './App.css'; // Importerar applikationens CSS-stilar


function CO2Page2() {
// Rendera JSX-strukturen för sidan
  return (
    <div className="page"> {/* Övergripande container för sidan */}
      <div className="container-co2-page"> 
        <header className="header">
          <h1 className="heading">Hur används fossila bränslen</h1> {/* Huvudrubrik */}
        </header>

        <div className="main-content"> {/* Innehållscontainer för sidomeny och huvudinnehåll */}
          <aside className="sidebar">
            <h2>Innehåll:</h2>
            <ol className="sidebar-list"> {/* Lista med länkar till relaterade sidor */}
              <li><Link to="/CO2Page">Vad är fossila bränslen?</Link></li>
              <li><Link to="/CO2Page2"><strong>Hur används fossila bränslen</strong></Link></li>
              <li><Link to="/CO2Page3">Klimatpåverkan från fossila bränslen</Link></li>
              <li><Link to="/CO2Page4">Alternativ till fossila bränslen</Link></li>
              <li><Link to="/CO2Page5">Globala åtgärder för att minska användningen</Link></li>
              <li><Link to="/CO2Quiz">Quiz</Link></li>
            </ol>
          </aside>

          {/* Huvudinnehåll*/}
          <section className="content-section">
            <article> 
              <h2>Transporter</h2>
              <p>
                En stor del av världens transporter såsom bilar, lastbilar, bussar, flygplan och fartyg drivs av fossila bränslen som bensin och diesel. Dessa bränslen används för att driva motorer och möjliggöra att människor och varor kan färdas över stora avstånd. För pensionärer kan det vara viktigt att förstå att fossila bränslen fortfarande är den främsta drivkraften bakom kollektivtrafik och bilresor, även om elektriska alternativ börjar ta marknadsandelar.
              </p>
              <img src="Cars.jpg" alt="Trafikerad bilväg" className="content-image" /> 
              <p>Bildtext: Trafikerad bilväg.</p>

              <h2>Elproduktion</h2>
              <p>
                Fossila bränslen används i stor utsträckning för att producera elektricitet. Kolkraftverk och naturgasverk är de vanligaste källorna för elproduktion i många delar av världen. Dessa kraftverk fungerar genom att bränna fossila bränslen för att värma upp vatten, vilket skapar ånga som driver turbiner och producerar elektricitet. Det är viktigt att notera att även om förnybar energi, som sol- och vindkraft, ökar, så är fossil energi fortfarande en dominerande källa för elproduktion.
              </p>
              <img src="power-plant.jpg" alt="Kärnkraftverk" className="content-image" /> 
              <p>Bildtext: Bild på ett kärnkraftverl.</p>

              <h2>Uppvärming av hem och byggnader</h2>
              <p>
                Naturgas och olja används ofta för att värma upp bostäder och byggnader. I många delar av världen, särskilt i kallare klimat, är det fortfarande vanligt att använda olja eller gas för att värma hemmet under vintermånaderna. Detta är särskilt viktigt för äldre människor, som ofta tillbringar mer tid hemma och är mer beroende av att hålla sina bostäder varma och bekväma.
              </p>
              <img src="house.jpg" alt="Bostadshus vid kusten" className="content-image" /> 
              <p>Bildtext: Bostadshus som är vid kusten.</p>

              <h2>Industriell produktionen</h2>
              <p>
                Fossila bränslen används också i många industrier för att tillverka viktiga material, som cement, stål och kemikalier. Till exempel vid tillverkning av cement används ofta kol för att hetta upp kalksten och vid stålproduktion används kol i form av koks för att smälta järnmalm. Industrins användning av fossila bränslen är stor och är en viktig del av ekonomin även om nya teknologier börjar ersätta vissa av dessa processer för att minska utsläppen.
              </p>
              <img src="factory.jpg" alt="Industriell fabrik" className="content-image" /> 
              <p>Bildtext: En industriell fabrik.</p>
            </article>

            {/* Navigeringsknappar */}
            <div className="navigation-buttons">
              <BackButton to="/CO2page" />
              <ForwardButton to="/CO2Page3" /> 
              
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CO2Page2; // Exporterar komponenten så att den kan användas i applikationen

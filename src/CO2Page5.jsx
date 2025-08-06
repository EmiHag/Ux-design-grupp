import React from 'react'; // Importera React och hooks (useState) för att hantera komponentens tillstånd
import { Link} from 'react-router-dom'; // Importera navigeringsverktyg från react-router-dom
import ForwardButton from './ForwardButton'; // Importera komponent för navigering framåt
import BackButton from './BackButton'; // Importera komponent för navigering bakåt


import './App.css'; // Importera CSS-stilar


// Rendera JSX-strukturen för sidan
function CO2Page5() {
  
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
            <li><Link to="/CO2Page">Vad är fossila bränslen?</Link></li>
            <li><Link to="/CO2Page2">Hur används fossila bränslen?</Link></li>
            <li><Link to="/CO2Page3">Klimatpåverkan från fossila bränslen</Link></li>
            <li><Link to="/CO2Page4">Alternativ till fossila bränslen</Link></li>
            <li><Link to="/CO2Page5"><strong>Globala åtgärder för att minska användningen</strong></Link></li>
            <li><Link to="/CO2Quiz">Quiz</Link></li>
          </ol>
        </aside>
        {/* Huvudinnehåll */}
        <section className="content-section">
        <article>
        <p>
  För att minska användningen av fossila bränslen och bromsa klimatförändringarna görs många viktiga insatser runt om i världen. Ett av de största stegen är Parisavtalet, där över 190 länder har lovat att samarbeta för att begränsa temperaturökningen på jorden. Målet är att den globala uppvärmningen ska hållas under 2 grader, och helst under 1,5 grader. För att klara detta måste vi minska utsläppen av växthusgaser som koldioxid.
</p>
<p>
En viktig åtgärd som många länder använder är att införa en koldioxidskatt. Det betyder att det kostar pengar att släppa ut koldioxid, vilket gör att både företag och privatpersoner har större anledning att välja alternativ som är bättre för miljön. Samtidigt satsar många länder på att stänga kolkraftverk och ersätta dem med renare energikällor som sol- och vindkraft.
  </p>
  
  <img src="polar-bear.jpg" alt="Isbjörn som går på isen" className="content-image"/>
  <p>Bildtext: Isbjörn som går på ett isblock.</p>
</article>
          
          <article className="co2-article">
          <h2>Minskade utsläpp genom hållbara lösningar och individulla val</h2>
        
     
          <p>
          Transporterna är en stor källa till utsläpp, och därför är det viktigt att minska beroendet av bensin och diesel. Fler och fler bilar blir eldrivna, och kollektivtrafik, som bussar och tåg, görs mer miljövänlig. Detta är en stor förändring som pågår i hela världen.
Det pågår också mycket forskning för att hitta nya lösningar som kan hjälpa oss. En idé är att fånga in koldioxid från fabriker och kraftverk och lagra den under marken så att den inte når atmosfären. En annan viktig förändring är att använda mer energieffektiva maskiner och lampor, vilket minskar mängden energi vi behöver använda.
</p>
<p>
Även vi som privatpersoner kan bidra. Om vi väljer grön el, använder kollektivtrafik eller köper eldrivna fordon och minskar vår energiförbrukning, hjälper vi till att minska utsläppen. Små saker som att stänga av apparater vi inte använder eller byta till energisnåla lampor gör också skillnad.
</p>
<p>
Allt detta arbete är viktigt för att vi ska kunna lämna över en friskare och mer hållbar planet till våra barn och barnbarn. Det handlar om att vi alla, både regeringar och vanliga människor, gör vårt bästa för att skapa en bättre framtid
          </p>
          </article>

 {/* Navigeringsknappar */}
          <div className="navigation-buttons">
    <BackButton to="/CO2Page4" />
    <ForwardButton to="/CO2Quiz" />
          </div>

        </section>
      </div>
    </div>
 </div>
  );
};

export default CO2Page5; // Exporterar komponenten så att den kan användas i applikationen


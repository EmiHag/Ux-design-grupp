import React from 'react'; // Importera React och hooks (useState) för att hantera komponentens tillstånd
import { Link} from 'react-router-dom'; // Importera navigeringsverktyg från react-router-dom
import ForwardButton from './ForwardButton'; // Importera komponent för navigering framåt
import BackButton from './BackButton'; // Importera komponent för navigering bakåt


import './App.css'; // Importera CSS-stilar

function CO2Page4() {

 // Rendera JSX-strukturen för sidan
  return (
    <div className="page">
      <div className="container-co2-page">
        <header className="header">
           <h1 className="heading">Alternativ till fossila bränslen</h1>
      </header>
    
        <div className="main-content"> {/* Innehållscontainer för sidomeny och huvudinnehåll */}
        <aside className="sidebar">
          <h2>Innehåll:</h2>
          <ol className="sidebar-list">
            <li><Link to="/CO2Page">Vad är fossila bränslen?</Link></li>
            <li><Link to="/CO2Page2">Hur används fossila bränslen?</Link></li>
            <li><Link to="/CO2Page3">Klimatpåverkan från fossila bränslen</Link></li>
            <li><Link to="/CO2Page4"><strong>Alternativ till fossila bränslen</strong></Link></li>
            <li><Link to="/CO2Page5">Globala åtgärder för att minska användningen</Link></li>
            <li><Link to="/CO2Quiz">Quiz</Link></li>
          </ol>
        </aside>
        {/* Huvudinnehåll */}
        <section className="content-section">
        <article>
  <p>
  För att minska vårt beroende av fossila bränslen och skydda miljön har världen börjat satsa på andra energikällor som är både renare och mer hållbara. En av de mest lovande alternativen är solenergi, där solpaneler fångar upp solljuset och omvandlar det till elektricitet. Detta är en lösning som blir allt vanligare, inte bara i stora kraftverk utan också på villatak och i mindre installationer som kan förse enskilda hushåll med el.
  <h2>Vattenkraftverk</h2>
  </p>
  Vattenkraft har länge varit en av de mest använda förnybara energikällorna, utnyttjar floder och vattenfall för att driva turbiner som genererar el. I Sverige har vattenkraften varit en hörnsten i vår energiförsörjning i över hundra år och fortsätter att vara en viktig del av vår elproduktion.
  <img src="waterenergi.jpg" alt="Vattenkraftverk" className="content-image"/>
  <p>Bildtext: Bild på ett vattenkraftverk.</p>
 <h2>Vindkraftverk</h2>
  <p>
  Vindkraft är en annan viktig energikälla. Stora vindkraftverk, som ofta placeras på öppna fält eller till havs, använder vindens kraft för att producera elektricitet. Vindkraften har blivit allt mer effektiv och spelar idag en betydande roll i att minska utsläppen av växthusgaser.
  </p>
  <img src="turbines.jpg" alt="Vindkraftverk" className="content-image"/>
  <p>Bildtext: Bild på ett vindkraftverk.</p>
  <h2>Biobränsle</h2>
  <p>
  Biobränslen, som framställs av organiskt material som trä, avfall och vissa grödor, är också ett alternativ till fossila bränslen. Biobränslen används ofta för uppvärmning och i vissa fall för att driva fordon. Fördelen med biobränslen är att de inte tillför ny koldioxid till atmosfären, utan bara frigör den som redan finns lagrad i växterna.
  </p>
  <img src="biofuel.jpg" alt="Bil som ska tanka biobränsle" className="content-image"/>
  <p>Bildtext: AI genererad bild på en bil som går på biobränsle.</p>
</article>
          
<article className="co2-article">
          <p>
          Utöver dessa förnybara energikällor spelar kärnkraft en viktig roll i många länder. Även om kärnkraft inte är förnybar, har den fördelen att den inte släpper ut koldioxid under själva elproduktionen. Att övergå till dessa alternativ är en viktig del i kampen mot klimatförändringarna. För att vi ska kunna lämna en friskare planet till framtida generationer är det avgörande att fler länder och människor tar steget mot mer hållbara energilösningar. Som privatperson kan man bidra genom att använda grön el, vara energismart och stödja initiativ som främjar en renare framtid.
          </p>
          </article>

          {/* Navigeringsknappar */}
          <div className="navigation-buttons">
    <BackButton to="/CO2Page3" />
    <ForwardButton to="/CO2Page5" />
          </div>

        </section>
      </div>
    </div>
 </div>
  );
};

export default CO2Page4; // Exporterar komponenten så att den kan användas i applikationen


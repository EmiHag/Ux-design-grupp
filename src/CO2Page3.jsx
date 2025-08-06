import React from 'react'; // Importera React och hooks (useState) för att hantera komponentens tillstånd
import { Link} from 'react-router-dom'; // Importera navigeringsverktyg från react-router-dom
import ForwardButton from './ForwardButton'; // Importera komponent för navigering framåt
import BackButton from './BackButton'; // Importera komponent för navigering bakåt


import './App.css'; // Importera CSS-stilar


function CO2Page3() {

 // Rendera JSX-strukturen för sidan
  return (
    <div className="page">
      <div className="container-co2-page">
        <header className="header">
           <h1 className="heading">Klimatpåverkan från fossila bränslen</h1>
      </header>
    
        <div className="main-content"> {/* Innehållscontainer för sidomeny och huvudinnehåll */}
        <aside className="sidebar">
          <h2>Innehåll:</h2>
          <ol className="sidebar-list">
            <li><Link to="/CO2Page">Vad är fossila bränslen?</Link></li>
            <li><Link to="/CO2Page2">Hur används fossila bränslen?</Link></li>
            <li><Link to="/CO2Page3"><strong>Klimatpåverkan från fossila bränslen</strong></Link></li>
            <li><Link to="/CO2Page4">Alternativ till fossila bränslen</Link></li>
            <li><Link to="/CO2Page5">Globala åtgärder för att minska användningen</Link></li>
            <li><Link to="/CO2Quiz">Quiz</Link></li>
          </ol>
        </aside>
        <section className="content-section">
  <article>
        <p>
        När vi bränner fossila bränslen som kol, olja och naturgas för att få energi, släpper vi ut stora mängder koldioxid och andra växthusgaser i luften. Dessa gaser fungerar som ett täcke runt jorden som håller kvar värmen, vilket påverkar klimatet negativt. Här är några exempel på vad som händer.
        </p>
        <div className="content-wrapper">
      <div className="content-text">
        <ul>
          <li><strong>Global uppvärmning -</strong> Jorden blir varmare, sedan 1800-talet har jordens temperatur ökat med 1,1 °C. Även om det låter som en liten siffra, har denna uppvärmning redan påverkat vädret och naturen kraftigt. Hetare somrar, ovanligt milda vintrar och fler värmeböljor är några av resultaten. För äldre människor kan detta innebära större risker för hälsan, särskilt under värmeböljor.</li>
          <li><strong>Havsnivåhöjningar -</strong> När havsvattnet blir varmare expanderar det, vilket betyder att det tar upp mer plats. Dessutom smälter isar och glaciärer i snabb takt, vilket gör att havsnivån stiger. För lågt liggande områden, som många kuststäder, innebär detta en ökad risk för översvämningar. Tänk på hur detta kan påverka samhällen runt om i världen – kanske till och med dina favoritresmål nära havet.</li>
          <li><strong>Luftföroreningar -</strong> När vi bränner kol och olja släpper vi inte bara ut koldioxid, utan också andra skadliga ämnen som svaveldioxid och kväveoxider. Dessa ämnen förorenar luften och kan leda till problem med andning, särskilt för äldre eller de med astma och hjärtproblem. Har du märkt att luften ibland känns tung i stora städer? Det är en direkt följd av luftföroreningar.</li>
          <li><strong>Naturförändrngar -</strong> Klimatförändringarna sker så snabbt att många djur och växter inte hinner anpassa sig. Det kan leda till att arter försvinner helt. Korallrev bleks och dör, och djur som isbjörnar har svårare att hitta mat när isen smälter. Detta påverkar hela ekosystemen och i slutändan även oss människor.</li>
        </ul>
      </div>
      <div className="image-container">
        <img src="power-station.jpg" alt="Utsläpp" className="rightside-image" />
        <p>Bildtext: Utsläpp från en kraftsation </p>
        <img src="Ice.jpg" alt="Smältande is" className="rightside-image" />
        <p>Bildtext: Smält glaciär.</p>
      </div>
    </div>
  </article>


          
          <article className="co2-article">
          <h2>Fossila bränslen är den största boven</h2>
          <p>
          Ungefär 75% av alla växthusgaser som släpps ut i världen kommer från användningen av fossila bränslen. Därför är det så viktigt att vi börjar använda mer förnybara energikällor som sol, vind och vatten. Genom att minska utsläppen kan vi bromsa klimatförändringarna och skapa en bättre framtid för både oss själva och våra barnbarn. Kom ihåg att även små steg, som att spara energi hemma eller välja mer miljövänliga alternativ, kan göra skillnad!
          </p>
          <img src="skyscrapers.jpg" alt="skyskarpa och ett flygplan" className="content-image" />
          <p>Bildtext: Ett flygplan bland skyskraperna.</p>
          </article>

 {/* Huvudinnehåll */}
          <div className="navigation-buttons">
    <BackButton to="/CO2Page2" />
    <ForwardButton to="/CO2Page4" />
          </div>

        </section>
      </div>
    </div>
 </div>
  );
};

export default CO2Page3;


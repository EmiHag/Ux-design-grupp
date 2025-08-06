import React from 'react'; // Importera React och hooks för att hantera state och side-effects
import { Link } from 'react-router-dom'; // Importera Link från react-router-dom för navigering
import ForwardButton from './ForwardButton';
import BackButton from './BackButton';

import './App.css'; // Importera CSS-stilar

function GlacierPage () {

  return (
    <div className="page">
    <div className="container-Glacier-page">
      <header className="header">
        <h1 className="heading">Vad är glaciärer?</h1>
      </header>
{/*Navigeringsmeny mellan sidorna i workshop-materialet*/}
      <div className="main-content">
        <aside className="sidebar">
          <h2>Innehåll:</h2>
          <ol className="sidebar-list">
            <li><Link to="/GlacierPage"><strong>Vad är glaciärer?</strong></Link></li>
            <li><Link to="/GlacierPage2">Olika typer av glaciärer</Link></li>
            <li><Link to="/GlacierPage3">Världens största sötvattenreserv</Link></li>
            <li><Link to="/GlacierPage4">Glaciärernas rörelse</Link></li>
            <li><Link to="/GlacierPage5">Klimatförändring</Link></li>
            <li><Link to="/GlacierQuiz">Quiz</Link></li>
          </ol>
        </aside>
        {/* Main Content */}

{/*Texten är indelad i article, för varje nytt textinnehåll*/}
        <section className="content-section">
<article>

            <p>Glaciärer är stora massor av is som bildas på land när snö packas och komprimeras över lång tid. De uppstår i kalla klimat där vinterns snöfall är större än sommarens avsmältning. När snön packas ihop av trycket omvandlas den till iskristaller, som med tiden blir till en stenhård ismassa. Glaciärer rör sig långsamt nedför bergssluttningar eller sprider sig utåt på lägre höjder, drivna av sin egen tyngd och gravitationen.</p>

        <h2>Glaciärernas roll i jordens vattenkretslopp</h2>
            <p>Glaciärer är viktiga för jordens vattenkretslopp eftersom de lagrar omkring 75 % av världens sötvatten och är den näst största ansamlingen vatten efter oceanerna. Omkring tio procent av jordens yta täcks av glaciärer och det finns glaciärer på alla kontinenter förutom Australien.</p>

        <h2>Konsekvenser av smältande glaciärer</h2>
        <div className="content-wrapper">
            <div className="content-text">
            <p>Uppskattningsvis finns det omkring 215 000 till 300 000 glaciärer i världen, och 97 % av all is finns på Grönland och i Antarktis. I Sverige finns det tillexempel nästan 300 glaciärer, de flesta små. Största är Storglaciären vid Kebenekaise, vars is är över 2000år gammal.</p>

            <p>Om alla glaciärer skulle smälta skulle havsnivån stiga med cirka 120 meter, vilket skulle innebära katastrofala följder för många länder som skulle läggas under vatten. Om bara all is på Grönland och Antarktiskt skulle smälta stiger havsnivån med ungefär 80 meter. Då skulle stora kuststäder som New York och Tokyo dränkas tillsammans med alla andra kustnära städer på jorden. Flera miljarder människor skulle bli hemlösa.</p>
</div>
  <div className="image-container">
  <img src="glaciaralaska.jpg" alt="En glaciär i Alaska med en kanotist i förgrunden" className="rightside-image" />
  <p>Bildtext: Glaciär i Alaska</p>
</div>
</div>

        <h2>Hur glaciärer formar landskapet</h2>
        <p>Glaciärer påverkar sin omgivning kraftigt genom rörelser och sin tyngd. De formar landskapet genom att nöta ner och flytta material, vilket skapat många av de naturtyper vi ser idag, som dalar och fjordar. Till exempel formades hela Skandinavien av inlandsisen som täckte området för cirka 15 000 år sedan.</p>                                 
                    
        <h2>Glaciärernas betydelse för klimatet</h2>
            <p>Förutom sin påverkan på landskapet spelar glaciärer också en viktig roll i klimatsystemet. De reflekterar solens strålar, lagrar värdefullt sötvatten och fungerar som indikatorer på klimatförändringar. När glaciärer smälter påverkar det inte bara havsnivån utan också ekosystem och samhällen som är beroende av glaciärernas vatten.</p>
  
        <img src="fore.efter.png" alt="En före och efterbild som visar glaciär i Alaska som dragit sig tillbaka" className="content-image" /> 
          <p>Bildtext: Glaciär i “Glacier National Park och Preserve i Alaska” bilden till vänster tagen 1941 och bilden till höger tagen 2004. Glaciären hade då dragit sig tillbaka 12 kilometer och tunnat ut med mer än 800meter.</p>

  </article>
{/*Navigeringskappar längst ner på sidan*/}
        <div className="navigation-buttons">
            <BackButton to="/workshopCards" />
            <ForwardButton to="/GlacierPage2" />
        </div>
</section>
      </div>
    </div>
 </div>
  );
};

export default GlacierPage;
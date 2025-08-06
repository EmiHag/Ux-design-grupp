import React from 'react'; // Importera React och hooks för att hantera state och side-effects
import { Link} from 'react-router-dom'; // Importera Link från react-router-dom för navigering
import ForwardButton from './ForwardButton';
import BackButton from './BackButton';

import './App.css'; // Importera CSS-stilar
import GlacierChart from './GlacierChart';

function GlacierPage3 () {

  return (
    <div className="page">
    <div className="container-Glacier-page">
      <header className="header">
        <h1 className="heading">Världens största sötvattenreserv</h1>
      </header>
{/*Navigeringsmeny mellan sidorna i workshop-materialet*/}
      <div className="main-content">
        <aside className="sidebar">
          <h2>Innehåll:</h2>
          <ol className="sidebar-list">
            <li><Link to="/GlacierPage">Vad är glaciärer?</Link></li>
            <li><Link to="/GlacierPage2">Olika typer av glaciärer</Link></li>
            <li><Link to="/GlacierPage3"><strong>Världens största sötvattenreserv</strong></Link></li>
            <li><Link to="/GlacierPage4">Glaciärernas rörelse</Link></li>
            <li><Link to="/GlacierPage5">Klimatförändring</Link></li>
            <li><Link to="/GlacierQuiz">Quiz</Link></li>
          </ol>
        </aside>
        {/* Main Content */}
<section className="content-section">
{/*Texten är indelad i article, för varje nytt textinnehåll*/}
  <article>
          <p>Glaciärer är en av världens viktigaste sötvattenreserver och spelar en avgörande roll för både klimat och ekosystem. Med en uppskattad volym på cirka 27 miljoner kubikkilometer is innehåller glaciärerna en betydande del av jordens sötvatten. Deras gradvisa avsmältning och förändringar påverkar havsnivåer, klimatmönster och livsmiljöer världen över.</p>

        <h2>Glaciärernas minskning sedan 1850</h2>
          <p>Sedan mitten av 1800-talet har glaciärerna förlorat över 9 biljoner ton is, vilket är en följd av ökade globala temperaturer och klimatförändringar. Denna avsmältning har bidragit med cirka 25% av den globala havsnivåhöjningen, som idag sker med en takt av 1-1,5 millimeter per år. Avsmältningen har dessutom accelererat under de senaste decennierna, särskilt sedan 1990-talet. En annan viktig process är kalvningen, där stora isblock bryts av glaciärer och flyter ut i haven. Detta fenomen är särskilt framträdande i områden som Grönland och Västantarktis.</p>
  </article>

  <article>
        <h2>Grönlands glaciärer</h2>
          <p>Grönlands glaciärer har genomgått stora förändringar, med över 3,8 biljoner ton isförlust mellan 1992 och 2018. Denna avsmältning sker både på ytan och vid basen av inlandsisen, där varmare havsvatten påskyndar processen. Grönlands glaciärer har blivit en av de största bidragsgivarna till havsnivåhöjningen, och vissa av dem, som Jakobshavn Isbræ, visar en ökad hastighet i isflödet.</p>

      <div className="image-container">     
        <img src="gronland.jpg" alt="En glaciär" className="content-image" /> 
          <p>Bildtext: Glaciär på Grönland</p>
      </div>
  </article>

  <article>
        <h2>Antarktis glaciärer</h2>
          <p>Hela Antarktis täcks av is här återfinns även <strong>världens största glaciär.</strong> På det tjockaste stället är isen cirka 4 000 meter tjock. Antarktis glaciärer uppvisar stora skillnader mellan den östra sidan och den västra sidan. Västantarktis har förlorat över <strong>1 500 miljarder ton</strong> is mellan 1992 och 2017, främst från instabila glaciärer som Pine Island och Thwaites. Detta har bidragit med 7,6 millimeter till den globala havsnivåhöjningen. Östantarktis, däremot, är relativt stabilt, med vissa områden som till och med har ökat i isvolym på grund av ökat snöfall.</p>

          <p>Antarktis är hem för över 100 vulkaner, där vulkanisk aktivitet under isen har en särskilt viktig roll. Vulkanisk värme kan smälta is under glaciärerna, vilket skapar smältvattenfickor som destabiliserar isen och accelererar dess rörelse mot havet. Dessutom minskar vulkanisk aska isens förmåga att reflektera solljus, vilket påskyndar avsmältningen ytterligare.</p>

      <div className="image-container">   
        <img src="antarktisk.jpg" alt="En glaciär" className="content-image" /> 
          <p>Bildtext: Glaciär på Antarktis</p>
      </div>
  </article>

  <article>
        <h2>Glaciärernas roll för vattenförsörjning och natur</h2>
          <p>Glaciärerna fungerar som viktiga sötvattenreservoarer för miljontals människor och ekosystem:</p>
        <ul>
            <li>Himalaya smälter till floder som Ganges och Indus, vilka är livsviktiga för miljontals människor, jordbruk och ekosystem av Asiens befolkning.</li>
            <li>Anderna bidrar med smältvatten till bevattning, dricksvatten och vattenkraft i länder som Peru, Bolivia och Chile.</li>
            <li>Alperna förser Europa med vatten till jordbruk och industri samt stöder turismen.</li>
        </ul>

        <h2>Inverkan på haven</h2>
          <p>Avsmältning från glaciärer påverkar haven på flera sätt, några exempel är:</p>
        <ul>
            <li>Havsnivåhöjning: Glaciärerna i Grönland och Antarktis tillför enorma mängder sötvatten till haven, vilket kan leda till översvämningar, nötning och påverka livsmiljöer både för människor och djur.</li>
            <li>Salthalt och näringsämnen: Smältvatten förändrar havens salthalt vilket kan påverka marina livsformer som är känsliga för förändringar av saltnivåerna. De smältande glaciärerna påverkar även tillförseln av mineraler och näringsämnen i haven vilka kan stimulera vissa marina ekosystem.</li>
            <li>Havscirkulation: Glaciärsmältvatten påverkar cirkulationen i haven genom att förändra strömsystemen som distribuerar värme runt planeten.</li>
        </ul>
{/*Importerar diagrammet*/}
<GlacierChart/>
          <p>Diagrammet visar hur tjockleken på glaciärer har ändrat under åren sen mätningen började genomföras.</p>
  </article>
{/*Navigeringskappar längst ner på sidan*/}
        <div className="navigation-buttons">
            <BackButton to="/GlacierPage2" />
            <ForwardButton to="/GlacierPage4" />
        </div>
</section>
      </div>
    </div>
 </div>
  );
};

export default GlacierPage3;
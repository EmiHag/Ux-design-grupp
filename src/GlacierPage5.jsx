import React from 'react'; // Importera React och hooks för att hantera state och side-effects
import { Link } from 'react-router-dom'; // Importera Link från react-router-dom för navigering
import ForwardButton from './ForwardButton';
import BackButton from './BackButton';
import './App.css'; // Importera CSS-stilar

function GlacierPage5 () {

  return (
    <div className="page">
    <div className="container-Glacier-page">
      <header className="header">
        <h1 className="heading">Glaciärernas rörelse</h1>
      </header>

{/*Navigeringsmeny mellan sidorna i workshop-materialet*/}
      <div className="main-content">
        <aside className="sidebar">
          <h2>Innehåll:</h2>
          <ol className="sidebar-list">
            <li><Link to="/GlacierPage">Vad är glaciärer?</Link></li>
            <li><Link to="/GlacierPage2">Olika typer av glaciärer</Link></li>
            <li><Link to="/GlacierPage3">Världens största sötvattenreserv</Link></li>
            <li><Link to="/GlacierPage4">Glaciärernas rörelse</Link></li>
            <li><Link to="/GlacierPage5"><strong>Klimatförändring</strong></Link></li>
            <li><Link to="/GlacierQuiz">Quiz</Link></li>
          </ol>
        </aside>
        {/* Main Content */}
<section className="content-section">
{/*Texten är indelad i article, för varje nytt textinnehåll*/}
  <article>
        <p>Klimatförändringarna har haft en markant påverkan på glaciärerna världen över, vilket fått allvarliga konsekvenser för både miljö och samhällen. Under de senaste 60 åren har medeltemperaturen i Antarktis stigit, vilket tros vara en följd av växthuseffekten. Den globala uppvärmningen har resulterat i snabb avsmältning av glaciärer, vilket bidrar till höjda havsnivåer och ökar risken för extrema väderhändelser som orkaner och tyfoner. Glaciärernas smältning förändrar också jordens havsströmmar, vilket ytterligare kan påverka klimatet globalt.</p>

        <h2>Glaciärsmältning</h2>
        <p>Enligt forskarna förutspås över hälften av världens 215 000 glaciärer smälta innan 2100, även om den globala uppvärmningen hålls under 1,5 grader Celsius. Detta innebär att regioner som Himalaya, Anderna, och Alperna kommer att förlora stora delar av sina glaciärer inom en nära framtid. Smältningen påverkar inte bara havsnivåerna utan har också konsekvenser för vattenresurser, ekosystem och samhällen. För de människor som är beroende av smältvatten från glaciärer för sin vattenförsörjning innebär detta en minskad tillgång på färskvatten efter en initial ökning. På längre sikt hotar även låglandsområden och kuststäder att dränkas.</p>

            
        <img src="smaltande.glaciar.jpg" alt="En smältande glaciär" className="content-image" /> 
        <p>Bildtext: Glaciär som håller på att smälta.</p>
    
  </article>

  <article>
        <h2>Naturkatastrofer</h2>
        <p>Förutom att bidra till havsnivåhöjningen skapar smältande glaciärer risk för naturkatastrofer som översvämningar, jordskred och laviner. När glaciärer smälter kan det bildas sjöar som riskerar att brista och orsaka översvämningar nedströms, särskilt i bergsområden som Himalaya och Anderna. Den minskade is mängden gör bergssidor ostabila, vilket kan leda till jordskred och laviner som hotar samhällen och infrastruktur.</p>

        <img src="Tornado.jpg" alt="Förstörelse efter tornado" className="content-image" /> 
        <p>Bildtext: Förstörelse efter tornado.</p>


        <h2>Ekosystem och biologisk mångfald</h2>
        <p>Glaciärernas smältning påverkar också lokala ekosystem och biologisk mångfald. Förändrade vattenflöden kan skada akvatiska ekosystem, påverka fiskbestånd och därmed även ekoturism. Dessutom riskerar arter som är beroende av kalla miljöer att förlora sina livsmiljöer. Glaciärer spelar också en viktig roll i att reglera det lokala klimatet genom att reflektera solljus och kyla atmosfären via is avdunstning och snösmältning. När glaciärerna försvinner minskar denna effekt, vilket kan leda till ytterligare klimatförändringar i området.</p>

        <h2>Ekonomisk påverkan</h2>
        <p>Ekonomiskt påverkas flera sektorer av glaciärernas minskning. Turismen, särskilt i Alperna och Himalaya, riskerar att minska då besökare lockas till områden med imponerande glaciärer. Jordbruket, som är beroende av smältvatten för bevattning, kan också drabbas av vattenbrist, vilket påverkar skördarna negativt. Glaciärer spelar en komplex och viktig roll för både miljön och ekonomin, och deras minskning kommer att få långtgående konsekvenser för vattenförsörjning, ekosystem, klimat och samhällen globalt.</p>
  </article>

{/*Navigeringskappar längst ner på sidan*/}
        <div className="navigation-buttons">
          <BackButton to="/GlacierPage4" />
          <ForwardButton to="/GlacierQuiz" />
        </div>
</section>
      </div>
    </div>
 </div>
  );
};        

export default GlacierPage5;
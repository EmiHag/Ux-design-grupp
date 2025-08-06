import React from 'react'; // Importera React och hooks för att hantera state och side-effects
import { Link } from 'react-router-dom'; // Importera Link från react-router-dom för navigering
import ForwardButton from './ForwardButton';
import BackButton from './BackButton';
import './App.css'; // Importera CSS-stilar

function GlacierPage2 () {

  return (
    <div className="page">
    <div className="container-Glacier-page">
      <header className="header">
        <h1 className="heading">Olika typer av glaciärer</h1>
      </header>
{/*Navigeringsmeny mellan sidorna i workshop-materialet*/}
      <div className="main-content">
        <aside className="sidebar">
          <h2>Innehåll:</h2>
          <ol className="sidebar-list">
            <li><Link to="/GlacierPage">Vad är glaciärer?</Link></li>
            <li><Link to="/GlacierPage2"><strong>Olika typer av glaciärer</strong></Link></li>
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
            <p>Glaciärer kan delas in i olika typer beroende på hur de bildas, ser ut och beter sig. De två huvudtyperna är inlandsisar och dalglaciärer. <strong>Inlandsisar</strong> är massiva glaciärer som täcker stora landområden, som Grönland och Antarktis. Medan <strong>dalglaciärer</strong> är mindre och flyter genom dalgångar i bergsområden.</p>

  
        <img src="antarktis.jpg" alt="En glaciär med en stor segelbåt i förgrunden" className="content-image" /> 
        <p>Bildtext: Glaciär på Antarktis.</p>
    
    </article>

    <article>
        <h2>Klassificering av glaciärer</h2>
            <p>Glaciärer klassificeras ofta som tempererade eller polära beroende på temperaturförhållanden. De <strong>tempererade glaciärerna</strong> kan också kallas varma glaciärer och finns på lägre breddgrader. Hela ismassan är nära smältpunkten, vilket innebär att rinnande vatten alltid är tillgängligt inom och runt glaciären. Det gör att de nöter ner och formar landskapet på ett tydligt sätt.</p>

            <p><strong>Polära glaciärer</strong> kan också kallas för kalla glaciärer och finns i polarområdena. Här är ismassan helt frusen, med lite eller inget vatten tillgängligt. Dessa glaciärer är bottenfrusna, vilket innebär att de inte nöter ner underlaget i någon större utsträckning.</p>

           
        <img src="olika_typer.png" alt="olika typer av glaciärer" className="content-image" /> 
        <p>Bildtext: Olika typer av glaciärer</p>
        

        <h2>Olika former av glaciärer</h2>
        <ul>
            <li>Toppglaciärer – är en glaciär på en bergstopp</li>
            <li>Nischglaciär – är en glaciär som ligger i en gryta- eller skålformad fördjupning</li>
            <li>Dalglaciär – är en glaciär som flyter fram genom en dalgång och påverkar landskapet genom nötning</li>
            <li>Isfält eller platåis – är stora ismassor som sprider sig i flera riktningar och inte begränsas av dalar</li>
            <li>Piedmontglaciärer – är glaciärer som breder ut sig i låglandsområden</li>
            <li>Inlandsis – är stora isfält som täcker hela kontinenter med rörelser som påverkas lite av underliggande terräng</li>
        </ul>

      
        <img src="rhone.jpg" alt="En dalglaciär" className="content-image" /> 
        <p>Bildtext: Dalglaciär i Rhôneglaciären i Alperna</p>
       

       
        <img src="toppglaciar.jpg" alt="En toppglaciär" className="content-image" /> 
        <p>Bildtext: Toppglaciär Breithorn i Alperna.</p>
      
  </article>

  <article>
        <h2>Var finns glaciärerna?</h2>
        <ul>
            <li>Antarktis – här finns världens största glaciärsystem och ungefär 60 % av jordens sötvattensreserv.</li>
            <li>Grönland - här finns världens näst största ismassa.</li>
            <li>Alaska och Kanada - innehåller många glaciärer, särskilt i Klippiga bergen och Alaska.</li>
            <li>Himalaya – finns i Asien och är världens högsta bergskedja, med stora glaciärer som bidrar till Asiens vattensystem.</li>
            <li>Anderna – finns i Sydamerika och är världens längsta bergskedja, med många glaciärer.</li>
            <li>Alperna – finns i Europa och är tätas i Europa av glaciärer.</li>
        </ul>

        
        <img src="karta.png" alt="En karta med glaciärer" className="content-image" /> 
                <p>Bildtext: Världskarta med glaciärer i blått och vitt.</p>
              
  </article>
{/*Navigeringskappar längst ner på sidan*/}
        <div className="navigation-buttons">
            <BackButton to="/GlacierPage" />
            <ForwardButton to="/GlacierPage3" />
        </div>
</section>
      </div>
    </div>
 </div>
  );
};

export default GlacierPage2;
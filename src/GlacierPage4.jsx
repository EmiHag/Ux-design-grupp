import React from 'react'; // Importera React och hooks för att hantera state och side-effects
import { Link } from 'react-router-dom'; // Importera Link från react-router-dom för navigering
import ForwardButton from './ForwardButton';
import BackButton from './BackButton';

import './App.css'; // Importera CSS-stilar

function GlacierPage4 () {

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
            <li><Link to="/GlacierPage4"><strong>Glaciärernas rörelse</strong></Link></li>
            <li><Link to="/GlacierPage5">Klimatförändring</Link></li>
            <li><Link to="/GlacierQuiz">Quiz</Link></li>
          </ol>
        </aside>
        {/* Main Content */}
<section className="content-section">
{/*Texten är indelad i article, för varje nytt textinnehåll*/}
    <article>
            <p>Glaciärer rör sig långsamt nedför sluttningar på grund av sin vikt och gravitation. Rörelsen kan variera från några centimeter till flera meter per dag, beroende på isens temperatur och underlaget som den glider på. Trots att denna rörelse ofta är långsam finns det undantag. Ett exempel är från mars 1995, när ett stort isblock bröt loss från Antarktis glaciärer. Detta isberg var nästan lika stort som Gotland.</p>

            <p>Glaciärer kan röra sig på två sätt. Dels genom <strong>intern rörelse,</strong> där isen glider och deformeras inom sig själv, vilket sker i alla glaciärer. Dels genom <strong>basal glidning,</strong> där glaciären rör sig längs markytan. Vissa delar av en glaciär eller inlandsis kan röra sig betydligt snabbare än omgivande ismassor, och dessa kallas <strong>isströmmar.</strong></p>
    </article>

    <article>
        <h2>En katastrof</h2>
            <p>Den 10 januari 1962 bröts en glaciär loss från det 6 768 meter höga bergstoppen Huascaran i Peru. Glaciärbiten vägde tre miljoner ton och var nära 200 meter lång och 800 meter bred. Glaciären rusade ner för en dal med hastigheten 100 km/tim. Sammanlagt begravdes 4 000 människor från nio byar under ett nästan 20 meter tjockt lager av is och sten.</p>
    </article>

    <article>
    <p>Ett klipp som visar när glaciärer kollapsar.</p> {/*Ett videoklipp som är importerat från Youtube*/}
    <div className="video-container">
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ACIqAUZo7-M"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
</article>

{/*Navigeringskappar längst ner på sidan*/}
        <div className="navigation-buttons">
            <BackButton to="/GlacierPage3" />
            <ForwardButton to="/GlacierPage5" />
        </div>
</section>
      </div>
    </div>
 </div>
  );
};

export default GlacierPage4;
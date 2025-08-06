import './App.css';
import React from "react";
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import SeaLevelChart from './WaterlevelChart.jsx';
import CO2emissions from './CO2Chart.jsx'; 
import GlobalTemperaturePage from './GlobalTemperaturePage.jsx';
import GlacierChart from './GlacierChart.jsx';
import WorkshopCards from './workshopCards.jsx';
import SigninView from "./SigninView.jsx";
import Homepage from './Start.jsx';
import AboutPage from './Aboutus.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import SeaLevelPage1 from './SeaLevelPage1.jsx';
import SeaLevelPage2 from './SeaLevelPage2.jsx';
import SeaLevelPage3 from './SeaLevelPage3.jsx';
import SeaLevelPage4 from './SeaLevelPage4.jsx';
import SeaLevelPage5 from './SeaLevelPage5.jsx';
import SeaLevelQuiz from './SeaLevelQuiz';
import CO2Page from './CO2Page.jsx';
import CO2Page2 from './CO2Page2.jsx';
import CO2Page3 from './CO2Page3.jsx';
import CO2Page4 from './CO2Page4.jsx';
import CO2Page5 from './CO2Page5.jsx';
import CO2Quiz from './CO2Quiz.jsx';
import GlacierPage from './GlacierPage.jsx';
import GlacierPage2 from './GlacierPage2.jsx';
import GlacierPage3 from './GlacierPage3.jsx';
import GlacierPage4 from './GlacierPage4.jsx';
import GlacierPage5 from './GlacierPage5.jsx';
import GlacierQuiz from './GlacierQuiz.jsx';
import SignoutButton from './SignoutButton.jsx';


function AppContent() {
  const location = useLocation(); // För att hämta den aktuella sökvägen

  // Här definieras vilka rutter som inte ska visa Header
  const pathsWithoutHeader = ["/", "/start"];
  const hideHeader = pathsWithoutHeader.includes(location.pathname);

  // Här definieras vilka rutter som inte ska visa logga ut knappen
  const pathsWithoutButton = ["/", "/start", "/Signin"];
  const hideButton = pathsWithoutButton.includes(location.pathname);
  
  return (
    <>
      <ScrollToTop />
      {!hideHeader && <Header />}
      {!hideButton && <SignoutButton />}
      {/* Huvudrutter */}
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/start" element={<Homepage />} />
        <Route path="signoutbutton" element={<SignoutButton />} />
        <Route path="/globaltemperaturepage" element={<GlobalTemperaturePage />} />
        <Route path="/co2emissions" element={<CO2emissions />} />
        <Route path="/co2page" element={<CO2Page />} />
        <Route path="/sealevelchart" element={<SeaLevelChart />} />
        <Route path="/glacierchart" element={<GlacierChart />} />
        <Route path="/signin" element={<SigninView />} />
        <Route path="/workshopCards" element={<WorkshopCards />} />
        <Route path="/Aboutus" element={<AboutPage />} />
        <Route path="/SeaLevelPage1" element={<SeaLevelPage1 />} />
        <Route path="/SeaLevelPage2" element={<SeaLevelPage2 />} />
        <Route path="/SeaLevelPage3" element={<SeaLevelPage3 />} />
        <Route path="/SeaLevelPage4" element={<SeaLevelPage4 />} />
        <Route path="/SeaLevelPage5" element={<SeaLevelPage5 />} />
        <Route path="/SeaLevelQuiz" element={<SeaLevelQuiz />} />
        <Route path="/CO2Page" element={<CO2Page />} />
        <Route path="/CO2Page2" element={<CO2Page2 />} />
        <Route path="/CO2Page3" element={<CO2Page3 />} />
        <Route path="/CO2Page4" element={<CO2Page4 />} />
        <Route path="/CO2Page5" element={<CO2Page5 />} />
        <Route path="/CO2Quiz" element={<CO2Quiz/>} />
        <Route path="/GlacierPage" element={<GlacierPage />} />
        <Route path="/GlacierPage2" element={<GlacierPage2 />} />
        <Route path="/GlacierPage3" element={<GlacierPage3 />} />
        <Route path="/GlacierPage4" element={<GlacierPage4 />} />
        <Route path="/GlacierPage5" element={<GlacierPage5 />} />
        <Route path="/GlacierQuiz" element={<GlacierQuiz/>} />
      </Routes>

      {/* Footer visas fortfarande överallt */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

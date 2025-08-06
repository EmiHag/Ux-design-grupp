import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Komponent för att automatiskt scrolla till toppen av sidan när routen ändras.
const ScrollToTop = () => {
  const { pathname } = useLocation(); // Hämtar den aktuella routens pathname.

  useEffect(() => {
    // När pathname ändras, scrollar fönstret automatiskt till toppen.
    window.scrollTo(0, 0);
  }, [pathname]); // Effekt körs varje gång pathname ändras.

  return null; // Komponent renderar inget i DOM.
};

export default ScrollToTop; // Exporterar komponenten så den kan användas i andra filer.

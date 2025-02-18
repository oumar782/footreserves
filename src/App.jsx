import React, { useEffect } from 'react';  // Assurez-vous de bien importer useEffect
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from "../src/pages/Homepage.jsx";
import Terrains from "../src/pages/Terrains.jsx";
import Reservation from "../src/pages/Reservation.jsx";
import Paiement from './pages/paiement.jsx';
import Contact from "../src/contacts/Contact.jsx";  // Pas besoin de l'extension .jsx
import Creneaux from './pages/creneaux.jsx';  
import Reserveterr from './pages/Reserveterr.jsx';  



const App = () => {
  
  return (
    <div className="App">
      
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/homes" />} />
            <Route path="/homes" element={<HomePage />} />
            <Route path="/terrains" element={<Terrains />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/paiement" element={<Paiement />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/creneaux" element={<Creneaux />} />
            <Route path="/reserve" element={<Reserveterr />} />

            
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;

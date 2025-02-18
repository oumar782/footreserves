import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/Creneaux.css'; 
import Header from '../composant/Header';
import Footer from '../composant/Footer';

const Creneaux = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { creneaux } = location.state || { creneaux: [] };

  const handleReservation = (creneau) => {
    console.log('Réservation du créneau :', creneau);
    alert(`Créneau disponible ! Veuillez finaliser votre réservation.`);

    navigate('/reserve', { state: { creneau } });
  };

  return (
    <div className='head'>
      <Header/>
      <div className="creneaux-container">
        <h1>Créneaux disponibles</h1>
        {creneaux.length > 0 ? (
          creneaux.map((creneau, index) => (
            <div key={index} className="creneau-card">
              <div className="creneau-info">
              <p><strong>Date :</strong> {creneau.datecreneaux}</p>

                <p><strong>Heure début :</strong> {creneau.heure}</p>
                <p><strong>Heure fin :</strong> {creneau.heurefin}</p>
                <p><strong>Terrain :</strong> {creneau.typeTerrain}</p>
                <p><strong>Surface :</strong> {creneau.SurfaceTerrains}</p>
                <p><strong>Statut :</strong> {creneau.statut}</p>
              </div>
              {creneau.statut === 'disponible' ? (
                <button className="reserve-button" onClick={() => handleReservation(creneau)}>
                  Je réserve
                </button>
              ) : (
                <button className="not-available-button" disabled>
                  Indisponible
                </button>
              )}
            </div>
          ))
        ) : (
          <p>Aucun créneau disponible.</p>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Creneaux;

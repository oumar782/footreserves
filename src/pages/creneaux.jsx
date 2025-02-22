import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../composant/Header';
import Footer from '../composant/Footer';
import '../css/Creneaux.css';

const Creneaux = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { creneaux } = location.state || { creneaux: [] };

  const handleReservation = (creneau) => {
    console.log('Réservation du créneau :', creneau);
    toast.success('Créneau disponible ! Veuillez finaliser votre réservation.');
    navigate('/reserve', { state: { creneau } });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className='head'>
      <Header />
      <ToastContainer />
      <div className="creneaux-container">
        <h1>Les Créneaux disponibles le {creneaux.length > 0 ? formatDate(creneaux[0].datecreneaux ) : 'Aucune date disponible'}</h1>
        {creneaux.length > 0 ? (
          creneaux.map((creneau, index) => (
            <div key={index} className="creneau-card">
              <div className="creneau-info">
                <p><strong>Date :</strong> {formatDate(creneau.datecreneaux)}</p>
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
      <Footer />
    </div>
  );
};

export default Creneaux;
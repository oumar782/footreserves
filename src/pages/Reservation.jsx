import React, { useState } from 'react';
import { useNavigate ,Link } from 'react-router-dom';
import axios from 'axios';
import './Reservation.css';
import Header from "../composant/Header";

const Reservation = () => {
  const [date, setDate] = useState('');
  const [terrainType, setTerrainType] = useState('');
  const [debut, setDebut] = useState('');
  const [fin, setFin] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    console.log('🔍 Données envoyées:', { date, terrainType, });

    try {
      const response = await axios.get('http://localhost:8000/api/creneaux/creneaux', {
        params: { date, terrainType, debut, fin },
      });
      console.log('Réponse du serveur:', response.data);

      if (response.data.length > 0) {
        // Rediriger vers la page des créneaux avec les données
        navigate('/creneaux', { state: { creneaux: response.data } });
      } else {
        setError('Aucun créneau disponible pour cette date et ce terrain.');
      }
    } catch (err) {
      console.error('Erreur lors de la récupération des créneaux:', err);
      if (err.response) {
        setError(`Erreur serveur: ${err.response.data.message || 'Erreur inconnue'}`);
      } else if (err.request) {
        setError('Aucune réponse du serveur. Vérifiez votre connexion.');
      } else {
        setError(`Erreur inconnue: ${err.message}`);
      }
    }
  };

  return (
   
      
      
    <div className="reservations">
      <Header />
      <div className="bouton">
        {/* Bouton pour consulter le créneau */}
        <Link to="/reservation" className="btn">
          Je consulte le créneau
        </Link>

        <Link to="/paiement" className="btn">
          Je paie ma reservation
        </Link>

        <Link to="/reserve" className="btn">
          Je consulte ma reservation
        </Link>
      </div  >
      <div className="degrades">
      <h1>Reserver votre espace de foot en seulement quelque clics et en toute serenite</h1>
      <div className="reservation-containers">
      <h1>Faites-vous plaisir ! Réservez Votre Terrain</h1>
      <form onSubmit={handleSubmit} className="reservation-forms">
        <label>
          Date :
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label>
          Type de terrain :
          <select value={terrainType} onChange={(e) => setTerrainType(e.target.value)} required>
            <option value="" className='bg'>Sélectionner</option>
            <option value="herbe"  className='bg'>Normal</option>
            <option value="synthetique" className='bg'>Synthetique</option>
          </select>
        </label>
        <button type="submit">Voir les créneaux</button>
       </form>
       <div className="reservation-infos">
            <p style={{ fontSize: '15px' }}>
              <span style={{ color: 'green', fontSize: '25px', textDecoration: 'underline' }}>Nb:</span>
              Pour toute question, merci de consulter le chatbot pour plus de détails.
            </p>
          </div>
      </div>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Reservation;
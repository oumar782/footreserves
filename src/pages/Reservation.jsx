import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Reservation.css';
import Header from "../composant/Header";

const Reservation = () => {
  const [date, setDate] = useState('');
  const [terrainType, setTerrainType] = useState('');
  const [surface, setSurface] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    console.log('🔍 Données envoyées:', { date, terrainType, surface });

    try {
      const response = await axios.get('http://localhost:8000/api/creneaux/creneaux', {
        params: { date, terrainType, surface },
      });

      console.log('✅ Réponse du serveur:', response.data);

      if (response.data.length > 0) {
        navigate('/creneaux', { state: { creneaux: response.data } });
      } else {
        setError('Aucun créneau disponible pour cette date et ce terrain.');
      }
    } catch (err) {
      console.error('❌ Erreur lors de la récupération des créneaux:', err);
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
        <Link to="/reservation" className="btn">Je consulte le créneau</Link>
        <Link to="/paiement" className="btn">Je paie ma réservation</Link>
        <Link to="/reserve" className="btn">Je consulte ma réservation</Link>
      </div>
      <div className="degrades">
        <h1>Réservez votre espace de foot en quelques clics et en toute sérénité</h1>
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
                <option value="">Veuillez sélectionner le type de terrain</option>
                <option value="normal">Normal</option>
                <option value="synthetique">Synthétique</option>
              </select>
            </label>
            <label>
              Surface du terrain :
              <select value={surface} onChange={(e) => setSurface(e.target.value)} required>
                <option value="">Veuillez sélectionner la surface du terrain</option>
                <option value="7X7">7X7</option>
                <option value="9X9">9X9</option>
                <option value="11X11">11X11</option>
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

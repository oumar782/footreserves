import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../composant/Header';
import '../css/reserterr.css';
import axios from 'axios';
import { format } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReserveTerr = () => {
  const location = useLocation();
  const creneau = location.state?.creneau || {};
  const reservation = location.state?.reservation || {};

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [tarif, setTarif] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nom || !prenom || !email || !telephone || !tarif) {
      toast.error("Tous les champs sont obligatoires ! ❌", { position: "top-right", autoClose: 3000 });
      return;
    }

    const formData = {
      date: creneau?.datecreneaux ? format(new Date(creneau.datecreneaux), 'yyyy-MM-dd') : '',
      heureDebut: creneau.heure || '',
      heureFin: creneau.heurefin || '',
      terrain: creneau.typeTerrain || '',
      surface: creneau.SurfaceTerrains || '',
      nom,
      prenom,
      email,
      telephone,
      tarif
    };

    try {
      const response = await axios.post("http://localhost:8000/reservations", formData, {
        headers: { "Content-Type": "application/json" }
      });

      if (response.status === 200) {
        toast.success("Réservation enregistrée avec succès ! 🎉", { position: "top-right", autoClose: 3000 });
      }
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
      toast.error("Erreur : " + (error.response?.data?.error || "Erreur serveur"), { position: "top-right", autoClose: 3000 });
    }
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      <div className='formulaireprinc'>
        <h1>Le formulaire de réservation</h1>
        <button onClick={() => toast.success("Test de notification réussi ! 🎉")} className="test-btn">Test Notification</button>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Date de réservation</label>
            <input type="text" value={creneau.datecreneaux || ''} className="auto-filled" readOnly />
          </div>

          <div className='form-group'>
            <label>Heure début</label>
            <input type="time" value={creneau.heure || ''} className="auto-filled" readOnly />
          </div>

          <div className='form-group'>
            <label>Heure Fin</label>
            <input type="time" value={creneau.heurefin || ''} className="auto-filled" readOnly />
          </div>

          <div className='form-group'>
            <label>Type de terrain</label>
            <input type="text" value={creneau.typeTerrain || ''} className="auto-filled" readOnly />
          </div>

          <div className='form-group'>
            <label>Surface</label>
            <input type="text" value={creneau.SurfaceTerrains || ''} className="auto-filled" readOnly />
          </div>

          <div className='form-group'>
            <label>Nom</label>
            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
          </div>

          <div className='form-group'>
            <label>Prénom</label>
            <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
          </div>

          <div className='form-group'>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className='form-group'>
            <label>Téléphone</label>
            <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
          </div>

          <div className='form-group'>
            <label>Tarif</label>
            <input type="number" value={tarif} onChange={(e) => setTarif(e.target.value)} required />
          </div>

          <button type="submit" className="submit-btn">Réserver</button>
        </form>
      </div>
    </div>
  );
};

export default ReserveTerr;

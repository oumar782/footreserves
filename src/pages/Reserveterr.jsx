import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../composant/Header';
import '../css/reserterr.css';
import axios from 'axios';
import { format } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../composant/Footer';
const ReserveTerr = () => {
  const location = useLocation();
  const creneau = location.state?.creneau || {};

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
      date: creneau?.datecreneaux ? format(new Date(creneau.datecreneaux), 'dd-MM-yyyy') : '',
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

      if (response.status === 200 || response.status === 201) {
        setNom('');
        setPrenom('');
        setEmail('');
        setTelephone('');
        setTarif('');

        toast.success("Votre Réservation a ete  mentionne avec succès ! 🎉", { position: "top-right", autoClose: 3000 });
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
        <form onSubmit={handleSubmit}>
          <div className='form-groups'>
          <div  className='form-group'>
            <label>Date de réservation</label>
            <input type="text" name='date'   value={creneau.datecreneaux ? format(new Date(creneau.datecreneaux), 'd-M-y') : ''} className="auto-filled" readOnly />
          </div>

          <div className='form-group'>
            <label>Heure début</label>
            <input type="time" name='heureDebut' value={creneau.heure || ''} className="auto-filled" readOnly />
          </div>

          <div className='form-group'>
            <label>Heure Fin</label>
            <input type="time" name='heureFin' value={creneau.heurefin || ''} className="auto-filled" readOnly />
          </div>

          <div className='form-group'>
            <label>Type de terrain</label>
            <input type="text" name='terrain' value={creneau.typeTerrain || ''} className="auto-filled" readOnly />
          </div>

          <div className='form-group'>
            <label>Surface</label>
            <input type="text" name='surface' value={creneau.SurfaceTerrains || ''} className="auto-filled" readOnly />
          </div>

          <div className='form-group'>
            <label>Nom</label>
            <input type="text" name='nom' value={nom} onChange={(e) => setNom(e.target.value)} required />
          </div>

          <div className='form-group'>
            <label>Prénom</label>
            <input type="text" name='prenom' value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
          </div>

          <div className='form-group'>
            <label>Email</label>
            <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className='form-group'>
            <label>Téléphone</label>
            <input type="tel" name='telephone' value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
          </div>

          <div className='form-group'>
            <label>Tarif</label>
            <input type="number" name='tarif' value={tarif} onChange={(e) => setTarif(e.target.value)} required />
          </div>
          </div>
          <button type="submit" className="submit-btn">Réserver</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default ReserveTerr;
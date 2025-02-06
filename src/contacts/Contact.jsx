import Header from "../composant/Header";
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import Footer from "../composant/Footer";
import './contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulaire soumis:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <Header />
            <div className="app-container">
                <div className="hero-section">
                    <div className="hero-overlay">
                        <h1>Contactez <span>FootSpaceReserve </span>pour vos reservation en un clic </h1>
                    </div>
                </div>

                <div className="main-content">
                    <div className="contact-details">
                        <h2>Nos Coordonnées</h2>
                        <div className="details-list">
                            <div className="details-item">
                                <MapPin className="details-icon" />
                                <div  className="details-title">
                                    <p>Adresse</p>
                                    <p>123 boulevard chefchaouni</p>
                                    <p>75001 Casablanca, Maroc</p>
                                </div>
                            </div>
                            <div className="details-item">
                                <Phone className="details-icon" />
                                <div  className="details-title">
                                    <p >Téléphone</p>
                                    <p>+212 07-21-97-62-88</p>
                                </div>
                            </div>
                            <div  className="details-title">
                                <Mail className="details-icon" />
                                <div>
                                    <p className="details-title">Email</p>
                                    <p>contact@FootSpaceReserve.ma</p>
                                </div>
                            </div>
                            <div  className="details-title">
                                <Clock className="details-icon" />
                                <div>
                                    <p className="details-title">Horaires d'ouverture</p>
                                    <p>Lundi - Dimanche: 8h00 - 23h00</p>
                                </div>
                            </div>
                        </div>
                        <h3 className="details-title">Suivez-nous</h3>
                        <div className="social-links">
                            <a href="#"><Facebook className="social-icon" /></a>
                            <a href="#"><Instagram className="social-icon" /></a>
                            <a href="#"><Twitter className="social-icon" /></a>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h2>Envoyez-nous un message</h2>
                        <form  onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nom complet</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Téléphone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="form-submit">Envoyer le message</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;
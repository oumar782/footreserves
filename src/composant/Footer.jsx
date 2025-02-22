import './footer.css';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-top">
          <div className="brand-logo">
            <i className="fab fa-slack"></i>
            <span className="brand-name">Foot <span className="brand-nam">Space</span>Reserve</span>
            <hr />
          </div>
          <hr />
          <div className="social-icons"> 
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Facebook size={30} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Twitter size={30} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Instagram size={30} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin size={30} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Youtube size={30} />
            </a>
          </div>
        </div>
        <hr />
        <div className="footer-links">
          <ul className="footer-section">
            <li className="section-title">Service</li>
            <li><a href="#">Reservation rapide de terrain de foot</a></li>
            <li><a href="#">Gestion des crenaux de reservation</a></li>
            <li><a href="#">Gestion des crenaux</a></li>
          </ul>
          <ul className="footer-section">
            <li className="section-title">Liens rapides</li>
            <li><a href="#">Reservation</a></li>
            <li><a href="#">A Propos</a></li>
            <li><a href="#">Nos Terrains</a></li>
            <li><a href="#">Contact</a></li>

           
          </ul>
            
        
        </div>
      </div>
      <div className="footer-bottom">
        <div className="bottom-text">
          <span className="copyright">© 2025 <a href="#">FootSpaceReserve</a> tous droits reserve.</span>
          <span className="policy-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

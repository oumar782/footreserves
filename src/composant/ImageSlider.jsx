
import './homepage.css';
import videoFile from '../assets/Video/Blue And White Modern Extend a Helping Hand through Open Donations Instagram Post (1).mp4';
import myImage from '../assets/Image/whatsapp.png';
import myImages from '../assets/Image/twitter.png';
import myImagess from '../assets/Image/instagram.png';
import myImagesss from '../assets/Image/linkedin.png';

const ImageSlider = () => {
  return (
    <section className="homepage" id="home">
      <div className="video-background">
        {/* Utilisation de videoFile pour la source */}
        <video autoPlay muted loop playsInline>
          <source src={videoFile} type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo HTML5.
        </video>
      </div>
      <div className="content">
        <div className="textss">
          <h1>Terrains Pro, Matchs Mémorables</h1>
          <p>Réservez facilement les meilleurs terrains de football à proximité. Profitez d’un service rapide, fiable et adapté à vos besoins, que vous soyez amateur ou professionnel. Découvrez une nouvelle façon de jouer, avec des installations de qualité et des expériences inoubliables.</p>
        </div>
        <div className="ok">
          <a style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', backdropFilter: 'blur(10px)' }} href="/reservation">
            Reserver maintenant
          </a>
          <a style={{ backgroundColor: 'rgba(8, 8, 8, 0.5)', backdropFilter: 'blur(10px)' }} href="/contact">
            Contactez-nous!
          </a>
        </div>
        <div className="oui">
          <a href="#" title="WhatsApp">
            <img src={myImage} alt="WhatsApp" />
          </a>
          <a href="#" title="Twitter">
            <img src={myImages} alt="Twitter" />
          </a>
          <a href="#" title="Instagram">
            <img src={myImagess} alt="Instagram" />
          </a>
          <a href="#" title="LinkedIn">
            <img src={myImagesss} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
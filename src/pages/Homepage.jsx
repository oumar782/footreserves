import Footer from "../composant/Footer.jsx";
import Header from "../composant/Header.jsx";

import ImageSlider from "../composant/ImageSlider.jsx"
import Section from "../composant/Section.jsx";
import Section2 from "../composant/Section2.jsx";

const HomePage = () => {
  return (
  <>
  <div className="scrollable-container ">
      <Header />
    <ImageSlider/>
    <Section/>
    <Section2/>
    <Footer/>

      </div>
      </>

  );
};

export default HomePage;
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import AOS from "aos";
import "aos/dist/aos.css";
import BestSeller from './components/BestSeller/BestSeller';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Popup from './components/Popup/Popup';
import Ourteam from './components/Ourteam/Ourteam';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  
  return (
    <Router>
      <div>
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <Products handleOrderPopup={handleOrderPopup} />
        <BestSeller handleOrderPopup={handleOrderPopup} />
        <Banner />
        <About />
        <Ourteam/>
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </Router>
  );
};

export default App;

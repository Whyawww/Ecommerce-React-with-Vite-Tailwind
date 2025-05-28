import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import SearchResult from './pages/SearchResult'; 
import { CartProvider } from './components/CartContext/CartContext';

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
      <CartProvider>
        <div className="overflow-x-hidden"> 
          <Navbar /> 
          
          <Routes> 
            <Route path="/" element={
              <>
                <Hero handleOrderPopup={handleOrderPopup} />
                <Products /> 
                <BestSeller />
                <Banner />
              </>
            } />
            
            <Route path="/ProductDetail/:id" element={<ProductDetail />} /> 
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/search" element={<SearchResult />} /> 
          </Routes>
          
          <Footer />
          <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;

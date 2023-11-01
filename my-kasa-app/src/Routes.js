import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Property from './pages/Property';
import NotFound from './pages/ErrorPage';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/Header.css";
import "./styles/Footer.css";

const AppRoutes = () => {
  return (
    <Router>
      <Header />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;

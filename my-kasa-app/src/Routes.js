import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Property from './components/Property';
import NotFound from './components/NotFound';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/property/:id" component={Property} />
        <Route component={NotFound} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

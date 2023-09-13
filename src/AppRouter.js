import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Concierge from './components/Concierge';
import Spa from './components/Spa';
import Bar from './components/Bar';
import Drinks from './components/DrinkList';
import Snacks from './components/SnackList';
import Massage from './components/MassageList';
import Quiz from './components/Quiz';
import Itinerary from './components/Itinerary';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {' '}
                {/* Wrap your routes with the Routes component */}
                <Route path="/" element={<Home />} />
                <Route path="/Concierge" element={<Concierge />} />
                <Route path="/Spa" element={<Spa />} />
                <Route path="/Bar" element={<Bar />} />
                <Route path="/Drinks" element={<Drinks />} />
                <Route path="/Snacks" element={<Snacks />} />
                <Route path="/Massage" element={<Massage />} />
                <Route path="/Quiz" element={<Quiz />} />
                <Route path="/Itinerary" element={<Itinerary />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;

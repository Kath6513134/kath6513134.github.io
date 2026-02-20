import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tables from './pages/Tables';
import Relationships from './pages/Relationships';
import Forms from './pages/Forms';
import Queries from './pages/Queries';
import Reports from './pages/Reports';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tables" element={<Tables />} />
                    <Route path="/relationships" element={<Relationships />} />
                    <Route path="/forms" element={<Forms />} />
                    <Route path="/queries" element={<Queries />} />
                    <Route path="/reports" element={<Reports />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

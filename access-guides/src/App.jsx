import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tables from './pages/Tables';
import Relationships from './pages/Relationships';
import Forms from './pages/Forms';
import Queries from './pages/Queries';
import Reports from './pages/Reports';

function App() {
    return (
        <Router>
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

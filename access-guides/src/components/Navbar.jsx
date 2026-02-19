import React from 'react';
import { NavLink } from 'react-router-dom';
import { Database, Table, GitMerge, FileText, Search, BarChart3 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-container">
                <NavLink to="/" className="logo">
                    <Database size={22} />
                    <span>Access Guides</span>
                </NavLink>
                <div className="nav-links">
                    <NavLink to="/tables" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        <Table size={16} />
                        <span>Tables</span>
                    </NavLink>
                    <NavLink to="/relationships" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        <GitMerge size={16} />
                        <span>Relationships</span>
                    </NavLink>
                    <NavLink to="/forms" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        <FileText size={16} />
                        <span>Forms</span>
                    </NavLink>
                    <NavLink to="/queries" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        <Search size={16} />
                        <span>Queries</span>
                    </NavLink>
                    <NavLink to="/reports" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        <BarChart3 size={16} />
                        <span>Reports</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

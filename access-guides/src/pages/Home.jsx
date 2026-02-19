import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Server, Monitor, Table, GitMerge, FileText, Search, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

const Home = () => {
  return (
    <motion.div className="container page" variants={containerVariants} initial="hidden" animate="visible">

      {/* Hero */}
      <header className="hero">
        <motion.h1 variants={itemVariants} className="hero-title">
          Master Microsoft Access
        </motion.h1>
        <motion.p variants={itemVariants} className="hero-subtitle">
          Your comprehensive guide to Database Management Systems, from fundamental concepts to advanced queries and reports.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link to="/tables" className="btn btn-primary">
            Start Learning <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
          </Link>
        </motion.div>
      </header>

      {/* DBMS Section */}
      <motion.section variants={itemVariants} className="content-section">
        <h2><Server size={24} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> What is a DBMS?</h2>
        <p>A <strong>Database Management System (DBMS)</strong> is software that allows users to create, manage, and manipulate databases. It provides a systematic way to store, retrieve, and organize data efficiently.</p>
        <div className="info-grid" style={{ marginTop: '1.5rem' }}>
          <div className="card">
            <h4>Key Functions</h4>
            <ul className="styled-list">
              <li>Data storage and retrieval</li>
              <li>Data security and access control</li>
              <li>Data integrity enforcement</li>
              <li>Concurrent access management</li>
              <li>Backup and recovery</li>
            </ul>
          </div>
          <div className="card">
            <h4>Examples of DBMS</h4>
            <ul className="styled-list">
              <li><strong>Microsoft Access</strong> — Desktop RDBMS</li>
              <li><strong>MySQL</strong> — Open-source server-based</li>
              <li><strong>PostgreSQL</strong> — Advanced open-source</li>
              <li><strong>Oracle Database</strong> — Enterprise-grade</li>
              <li><strong>SQL Server</strong> — Microsoft enterprise</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Microsoft Access Section */}
      <motion.section variants={itemVariants} className="content-section">
        <h2><Monitor size={24} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Microsoft Access</h2>
        <p>Microsoft Access is a <strong>Relational Database Management System (RDBMS)</strong> included in the Microsoft Office suite. It combines a database engine with a graphical user interface and software-development tools, making it ideal for small to medium-sized database solutions.</p>
        <div className="highlight-box" style={{ marginTop: '1.5rem' }}>
          <h4>Why Use Access?</h4>
          <ul className="styled-list">
            <li>User-friendly GUI — no need to write complex SQL manually</li>
            <li>Built-in tools for Tables, Forms, Queries, and Reports</li>
            <li>Integration with other Microsoft Office applications</li>
            <li>Supports multiple users through network sharing</li>
            <li>File format: <code>.accdb</code> (Access 2007+)</li>
          </ul>
        </div>
      </motion.section>

      {/* Database Section */}
      <motion.section variants={itemVariants} className="content-section">
        <h2><Database size={24} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> What is a Database?</h2>
        <p>A <strong>Database</strong> is an organized collection of structured data, stored and accessed electronically. In Microsoft Access, a database is a single <code>.accdb</code> file that contains all of the following objects:</p>
        <div className="object-grid" style={{ marginTop: '1.5rem' }}>
          <Link to="/tables" className="card object-card">
            <Table size={32} color="var(--primary)" />
            <h4>Tables</h4>
            <p>Store data in rows and columns</p>
          </Link>
          <Link to="/relationships" className="card object-card">
            <GitMerge size={32} color="var(--primary)" />
            <h4>Relationships</h4>
            <p>Connect tables together</p>
          </Link>
          <Link to="/forms" className="card object-card">
            <FileText size={32} color="var(--primary)" />
            <h4>Forms</h4>
            <p>User interfaces for data entry</p>
          </Link>
          <Link to="/queries" className="card object-card">
            <Search size={32} color="var(--primary)" />
            <h4>Queries</h4>
            <p>Ask questions of your data</p>
          </Link>
          <Link to="/reports" className="card object-card">
            <BarChart3 size={32} color="var(--primary)" />
            <h4>Reports</h4>
            <p>Print and present data</p>
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;
